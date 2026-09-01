import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

// 모든 API에 CORS 허용
app.use('/api/*', cors())

// 1. 게시글 목록 조회 (소프트 딜리트된 항목 제외)
app.get('/api/posts', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM posts WHERE deleted_at IS NULL ORDER BY created_at DESC'
    ).all()
    return c.json({ success: true, data: results })
  } catch (error) {
    return c.json({ success: false, error: '게시글 목록을 불러오지 못했습니다.' }, 500)
  }
})

// 2. 특정 게시글 상세 조회
app.get('/api/posts/:id', async (c) => {
  const id = c.req.param('id')
  try {
    const post = await c.env.DB.prepare(
      'SELECT * FROM posts WHERE id = ? AND deleted_at IS NULL'
    ).bind(id).first()
    
    if (!post) {
      return c.json({ success: false, error: '게시글을 찾을 수 없습니다.' }, 404)
    }
    return c.json({ success: true, data: post })
  } catch (error) {
    return c.json({ success: false, error: '게시글 조회에 실패했습니다.' }, 500)
  }
})

// 3. 게시글 작성
app.post('/api/posts', async (c) => {
  try {
    const { title, content, author, password } = await c.req.json()
    
    if (!title || !content || !author || !password) {
      return c.json({ success: false, error: '필수 항목이 누락되었습니다.' }, 400)
    }

    const { success } = await c.env.DB.prepare(
      'INSERT INTO posts (title, content, author, password) VALUES (?, ?, ?, ?)'
    ).bind(title, content, author, password).run()
    
    if (success) {
      return c.json({ success: true, message: '게시글이 등록되었습니다.' }, 201)
    } else {
      return c.json({ success: false, error: '등록 실패' }, 500)
    }
  } catch (error) {
    return c.json({ success: false, error: '서버 에러가 발생했습니다.' }, 500)
  }
})

// 4. 게시글 수정
app.put('/api/posts/:id', async (c) => {
  const id = c.req.param('id')
  try {
    const { title, content, password } = await c.req.json()
    
    if (!title || !content || !password) {
      return c.json({ success: false, error: '제목, 내용, 비밀번호는 필수입니다.' }, 400)
    }

    const post = await c.env.DB.prepare(
      'SELECT password FROM posts WHERE id = ? AND deleted_at IS NULL'
    ).bind(id).first<{password: string}>()

    if (!post) {
      return c.json({ success: false, error: '게시글을 찾을 수 없습니다.' }, 404)
    }

    if (post.password !== password) {
      return c.json({ success: false, error: '비밀번호가 일치하지 않습니다.' }, 401)
    }

    const { success } = await c.env.DB.prepare(
      'UPDATE posts SET title = ?, content = ? WHERE id = ? AND deleted_at IS NULL'
    ).bind(title, content, id).run()

    if (success) {
      return c.json({ success: true, message: '게시글이 수정되었습니다.' })
    } else {
      return c.json({ success: false, error: '수정 실패 또는 찾을 수 없음' }, 404)
    }
  } catch (error) {
    return c.json({ success: false, error: '서버 에러가 발생했습니다.' }, 500)
  }
})

// 5. 게시글 삭제 (소프트 딜리트)
app.delete('/api/posts/:id', async (c) => {
  const id = c.req.param('id')
  try {
    const { password } = await c.req.json()

    if (!password) {
      return c.json({ success: false, error: '비밀번호를 입력해주세요.' }, 400)
    }

    const post = await c.env.DB.prepare(
      'SELECT password FROM posts WHERE id = ? AND deleted_at IS NULL'
    ).bind(id).first<{password: string}>()

    if (!post) {
      return c.json({ success: false, error: '게시글을 찾을 수 없습니다.' }, 404)
    }

    if (post.password !== password) {
      return c.json({ success: false, error: '비밀번호가 일치하지 않습니다.' }, 401)
    }
    const { success } = await c.env.DB.prepare(
      "UPDATE posts SET deleted_at = CURRENT_TIMESTAMP WHERE id = ? AND deleted_at IS NULL"
    ).bind(id).run()

    if (success) {
      return c.json({ success: true, message: '게시글이 삭제되었습니다.' })
    } else {
      return c.json({ success: false, error: '삭제 실패 또는 이미 삭제됨' }, 404)
    }
  } catch (error) {
    return c.json({ success: false, error: '서버 에러가 발생했습니다.' }, 500)
  }
})

export default app
