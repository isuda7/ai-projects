import './style.css'

const curriculumData = [
  {
    id: 'step-0',
    title: '아키텍처 개요',
    navTitle: '0. 아키텍처 개요',
    icon: 'layout-dashboard',
    content: `
      <h1 class="step-title">무료 상업용 스택 선정 및 아키텍처 개요</h1>
      <p>안녕하세요. 10년 차 시니어 아키텍트 관점에서, 비용이 전혀 들지 않으면서 상업적 이용이 가능한 완벽한 백엔드 아키텍처를 설계해 드립니다.</p>
      
      <h2>기술 스택 옵션 비교</h2>
      <p>현재 모던 웹 생태계에서 0원으로 시작할 수 있는 가장 강력한 두 가지 옵션을 비교해 보겠습니다.</p>
      
      <div style="display: flex; gap: 20px; margin: 20px 0;">
        <div style="flex: 1; padding: 20px; border: 1px solid var(--border-color); border-radius: 8px; background: rgba(255,255,255,0.03);">
          <h3 style="margin-top: 0; color: #60a5fa;">옵션 A: BaaS 기반 (Supabase + Cloudflare Pages)</h3>
          <ul>
            <li><strong>장점:</strong> GUI 대시보드 제공, 인증(Auth) 및 실시간 구독(Realtime) 기본 내장, PostgreSQL의 강력한 기능.</li>
            <li><strong>단점:</strong> 무료 티어에서 프로젝트가 일정 기간 비활성화되면 일시 정지(Pause)됨. 콜드 스타트 존재.</li>
          </ul>
        </div>
        <div style="flex: 1; padding: 20px; border: 1px solid var(--border-color); border-radius: 8px; background: rgba(255,255,255,0.03);">
          <h3 style="margin-top: 0; color: #4ade80;">옵션 B: 경량 서버리스 기반 (Cloudflare Workers + Hono + D1 DB)</h3>
          <ul>
            <li><strong>장점:</strong> 전 세계 Edge 네트워크에서 실행되어 지연 시간이 0ms에 수렴. <strong>휴면 상태(Pause)가 없으며</strong>, D1(SQLite)을 통한 완벽한 관계형 DB 지원.</li>
            <li><strong>단점:</strong> GUI가 상대적으로 빈약하여 CLI 및 쿼리로 제어해야 함.</li>
          </ul>
        </div>
      </div>

      <div class="alert">
        <i data-lucide="zap" class="alert-icon"></i>
        <div class="alert-content">
          <p><strong>최종 선택: 옵션 B (Cloudflare Workers + Hono + D1)</strong></p>
          <p>상업용 서비스는 <strong>'사용자가 언제 접속하든 즉각적으로 반응'</strong>해야 합니다. 옵션 A는 트래픽이 없을 때 DB가 일시 정지되어 치명적인 콜드 스타트를 유발할 수 있습니다. 반면, 옵션 B는 콜드 스타트가 없으며 하루 10만 건의 넉넉한 무료 API 호출을 제공하므로 정석적인 백엔드 커리큘럼으로 최종 선정했습니다.</p>
        </div>
      </div>
    `
  },
  {
    id: 'step-1',
    title: '1단계: 로컬 환경 구성',
    navTitle: '1. 로컬 셋업 (사전 준비)',
    icon: 'terminal',
    content: `
      <h1 class="step-title">1단계: 완벽한 기초 환경 셋업 가이드</h1>
      <p>백엔드 코드를 치려면 먼저 <strong>명령어를 입력할 수 있는 상태</strong>를 만들어야 합니다. 백엔드를 처음 해보시는 분들을 위해 무엇을, 어디서, 어떻게 설치하는지 아주 상세히 안내해 드립니다.</p>
      
      <h2>Step 1-1. VS Code (코드 에디터) 설치하기</h2>
      <p>우리가 코드를 작성하고 명령어를 입력할 메인 작업 프로그램입니다.</p>
      <ol>
        <li><a href="https://code.visualstudio.com/" target="_blank" style="color:var(--accent-color);">VS Code 공식 홈페이지(클릭)</a>에 접속합니다.</li>
        <li>화면 중앙의 커다란 파란색 <strong>[Download for Mac/Windows]</strong> 버튼을 클릭하여 설치 파일을 다운로드합니다.</li>
        <li>다운로드된 파일을 실행하여 일반적인 프로그램 설치하듯 [다음]을 눌러 설치를 완료합니다.</li>
      </ol>

      <h2>Step 1-2. Node.js 설치하기 (필수)</h2>
      <p>우리 컴퓨터가 JavaScript 명령어를 이해할 수 있게 해주는 핵심 프로그램입니다.</p>
      <ol>
        <li><a href="https://nodejs.org/" target="_blank" style="color:var(--accent-color);">Node.js 공식 홈페이지(클릭)</a>에 접속합니다.</li>
        <li>화면 중앙에 있는 초록색 버튼 중 <strong>[LTS (Long Term Support)]</strong> 라고 적힌 버튼을 클릭하여 다운로드합니다. (최신 기능보다는 안정적인 LTS 버전이 좋습니다.)</li>
        <li>마찬가지로 다운로드된 설치 파일을 실행해 설치를 끝마칩니다.</li>
      </ol>

      <h2>Step 1-3. Cloudflare 무료 가입하기</h2>
      <p>서버를 0원으로 배포하기 위해 사용할 클라우드 플랫폼입니다.</p>
      <ol>
        <li><a href="https://dash.cloudflare.com/sign-up" target="_blank" style="color:var(--accent-color);">Cloudflare 가입 페이지(클릭)</a>에 접속합니다.</li>
        <li>이메일과 비밀번호를 입력하고 가입한 뒤, 이메일 인증을 완료해 둡니다.</li>
      </ol>

      <div class="alert">
        <i data-lucide="check-circle" class="alert-icon"></i>
        <div class="alert-content">
          <p><strong>사전 준비 완료! 이제 터미널을 열어볼까요?</strong></p>
          <p>위 3가지가 모두 끝났다면 VS Code 프로그램을 실행해 주세요. 그리고 화면 맨 위쪽 메뉴 바에서 <strong>[Terminal] -> [New Terminal] (한국어판: [터미널] -> [새 터미널])</strong>을 클릭합니다. 화면 하단에 커서가 깜빡이는 까만 창이 나타났다면, 드디어 코드를 칠 준비가 된 것입니다!</p>
        </div>
      </div>

      <h2>Step 1-4. Hono 백엔드 프로젝트 생성하기</h2>
      <p>방금 연 <strong>하단의 터미널 창</strong>에 아래 명령어를 한 줄씩 복사해서 붙여넣고 키보드 Enter(엔터)를 누르세요. (Node.js가 정상 설치되었는지 먼저 확인합니다.)</p>
      ${createCodeBlock('bash', 'node -v\nnpm -v', 'Terminal')}

      <p>버전 숫자가 정상적으로 출력된다면, 다음 명령어로 프로젝트 뼈대를 자동 생성합니다.</p>
      ${createCodeBlock('bash', 'npm create hono@latest commercial-backend\n# 1. Select template: 방향키로 cloudflare-workers 선택 후 엔터\n# 2. Install dependencies: yes 입력 후 엔터\n# 3. Package manager: npm 선택 후 엔터\n\n# 폴더 생성이 완료되면 해당 폴더로 진입합니다.\ncd commercial-backend', 'Terminal')}

      <h2>Step 1-5. VS Code로 프로젝트 폴더 열기 & 환경변수 파일 만들기</h2>
      <ol>
        <li>VS Code 상단 메뉴에서 <strong>[File] -> [Open Folder] (한국어판: [파일] -> [폴더 열기])</strong>를 클릭합니다.</li>
        <li>방금 생성된 <code>commercial-backend</code> 폴더를 찾아 선택하고 엽니다.</li>
        <li>좌측 파일 탐색기 빈 공간을 우클릭하고 <strong>[New File] (새 파일)</strong>을 클릭한 뒤, 파일 이름을 <code>.dev.vars</code> 로 짓습니다. (앞에 마침표 필수!)</li>
        <li>만들어진 파일 안에 아래 코드를 붙여넣습니다. (이 비밀키는 게시글 수정/삭제 시 쓰입니다.)</li>
      </ol>
      ${createCodeBlock('bash', 'ADMIN_SECRET_KEY="my_secure_admin_key_2024!"', '.dev.vars')}
    `
  },
  {
    id: 'step-2',
    title: '2단계: DB 설계 및 스키마',
    navTitle: '2. 데이터베이스 설계',
    icon: 'database',
    content: `
      <h1 class="step-title">2단계: 데이터베이스(DB)의 이해와 스키마 설계</h1>
      
      <div class="alert">
        <i data-lucide="help-circle" class="alert-icon"></i>
        <div class="alert-content">
          <p><strong>"잠깐, DB 프로그램(MySQL 등)은 설치 안 하나요?"</strong></p>
          <p>가장 많이 하시는 질문입니다! 우리가 선택한 <strong>Cloudflare D1</strong>은 '서버리스(Serverless) 데이터베이스'입니다. 즉, 내 컴퓨터에 무거운 DB 프로그램을 직접 설치할 필요가 전혀 없습니다.<br><br>
          - <strong>로컬 개발 시:</strong> <code>--local</code> 명령어를 쓰면 폴더 내부에 가상의 파일(SQLite)을 만들어 진짜 DB처럼 완벽하게 흉내 냅니다.<br>
          - <strong>실제 배포 시:</strong> 6단계에서 명령어를 치면 Cloudflare 클라우드 서버 상에 진짜 DB가 생성됩니다.</p>
        </div>
      </div>

      <h2>Step 2-1. 스키마(DDL) 파일 작성</h2>
      <p>게시판이나 질문지 데이터를 저장할 '표(Table)'의 구조를 짭니다. 프로젝트 폴더 최상단에 <code>schema.sql</code> 이라는 파일을 새로 만들고 아래 코드를 복사해 넣습니다.</p>
      ${createCodeBlock('sql', `DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME NULL
);

-- 조회 성능 최적화를 위한 인덱스 생성
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX idx_posts_deleted_at ON posts(deleted_at);`, 'schema.sql')}

      <div class="alert">
        <i data-lucide="shield-check" class="alert-icon"></i>
        <div class="alert-content">
          <p><strong>데이터 삭제 정책: 소프트 딜리트(Soft Delete)</strong></p>
          <p>상업용 서비스에서는 고객의 데이터를 함부로 영구 삭제(Hard Delete)하지 않습니다. <code>deleted_at</code> 컬럼을 만들어두고, 삭제 버튼을 누르면 데이터가 지워지는 대신 '삭제된 시간'만 기록하여 화면에서만 안 보이게(논리 삭제) 처리하는 것이 정석입니다.</p>
        </div>
      </div>

      <h2>Step 2-2. 내 컴퓨터(로컬)에 가상 DB 세팅하기 (마이그레이션)</h2>
      <p>방금 <code>schema.sql</code> 파일에 적어둔 테이블 설계도를 <strong>'실제 데이터베이스에 주입해서 진짜 표(Table)로 찍어내는 작업'</strong>을 개발 용어로 <strong>마이그레이션(Migration)</strong>이라고 부릅니다.</p>
      <p>터미널 창에 아래 명령어를 입력하여 내 컴퓨터의 가상 DB에 마이그레이션을 진행하세요.</p>
      ${createCodeBlock('bash', 'npx wrangler d1 execute my-db --local --file=./schema.sql', 'Terminal')}
      
      <p>이 명령어를 치면 내 폴더 안에 <code>.wrangler</code> 라는 숨김 폴더가 생기며, 그 안에 실제 DB 파일이 로컬용으로 세팅됩니다. (진짜 클라우드 DB는 마지막 6단계에서 만듭니다!)</p>
      
      <div class="alert">
        <i data-lucide="help-circle" class="alert-icon"></i>
        <div class="alert-content">
          <p><strong>"게시판 구축을 위해 DB에 직접 접속해서 해줘야 하는 '환경설정(세팅)' 작업은 없나요?"</strong></p>
          <p>결론부터 말씀드리면 <strong>전혀 없습니다!</strong><br>
          전통적인 MySQL이나 Oracle 같은 경우, DB에 직접 접속해서 1) DB 유저 생성 2) 권한 부여(GRANT) 3) 메모리 튜닝 등의 복잡한 세팅을 반드시 해줘야 합니다.<br><br>
          하지만 우리가 쓰는 <strong>Cloudflare D1(서버리스)</strong>은 위에서 한 <strong>'마이그레이션(schema.sql 적용)' 하나만으로 모든 필수 세팅이 끝납니다.</strong> 테이블 뼈대만 만들어주면, 권한 관리나 연결 설정 등 귀찮은 작업은 Cloudflare가 알아서 다 처리해 주므로 DB에 접속해서 따로 만져야 할 필수 설정은 아예 없습니다.</p>
        </div>
      </div>

      <h2>Step 2-3. DB에 직접 접속해서 데이터 조작하기 (개발자 전용)</h2>
      <p>개발을 하다 보면 코드를 통하지 않고 <strong>DB에 직접 들어가서 데이터를 강제로 넣거나(INSERT), 이상한 데이터를 지우고(DELETE), 값을 고치는(UPDATE) 등 모든 권한을 쥐고 조작</strong>해야 할 때가 반드시 있습니다. 다음과 같은 방법으로 직접 제어할 수 있습니다.</p>
      
      <ul>
        <li><strong>방법 1. 명령어(CLI)로 직접 SQL 날리기:</strong> 터미널에 아래처럼 치면 단순 조회가 아니라 데이터 추가/삭제도 마음대로 할 수 있습니다.
          ${createCodeBlock('bash', `# 데이터 조회 (Read)
npx wrangler d1 execute my-db --local --command="SELECT * FROM posts;"

# 강제로 데이터 밀어넣기 (Create)
npx wrangler d1 execute my-db --local --command="INSERT INTO posts (title, content, author) VALUES ('직접 넣은 제목', '내용', '관리자');"

# 데이터 강제 수정 (Update)
npx wrangler d1 execute my-db --local --command="UPDATE posts SET title='수정됨' WHERE id=1;"`, 'Terminal')}
        </li>
        <li><strong>방법 2. 로컬 DB 엑셀처럼 조작하기 (VS Code 확장):</strong> 명령어 창이 너무 불편하다면, VS Code 확장 프로그램 탭에서 <code>SQLite Viewer</code>를 설치하세요. 탐색기에서 <code>.wrangler/state/v3/d1/</code> 폴더 안의 <code>.sqlite</code> 파일을 클릭하면 엑셀처럼 표 형태로 데이터를 볼 수 있고, 마우스 클릭만으로 값을 수정하고 행을 추가/삭제할 수 있습니다.</li>
        <li><strong>방법 3. 운영(프로덕션) DB 웹 GUI 조작:</strong> 6단계에서 배포를 마치고 나면, Cloudflare 홈페이지 로그인 후 <strong>[Workers 및 Pages] -> [D1]</strong> 메뉴로 들어갑니다. 방금 만든 DB를 클릭하면 웹 브라우저 안에서 직접 행(Row)을 추가하고 테이블을 자유자재로 다루는 GUI 대시보드가 열립니다.</li>
      </ul>

      <div class="alert">
        <i data-lucide="alert-triangle" class="alert-icon"></i>
        <div class="alert-content">
          <p><strong>잠깐! 그럼 '관리자 페이지'에서 조작하는 것과 무엇이 다른가요?</strong></p>
          <p>아주 예리한 질문입니다! 위에서 설명한 <strong>'DB 직접 접속'</strong>은 오직 <strong>개발자(최고 관리자)가 에러를 고치거나 초기 데이터를 억지로 밀어 넣을 때 사용하는 비상용 뒷문(Backdoor)</strong>입니다.<br><br>
          실제 운영팀이나 관리자가 쓸 <strong>'진짜 관리자 웹 화면'</strong>을 만들기 위해서는 이런 무식한 뒷문이 아니라, <strong>안전하게 통제된 정문(API)</strong>을 뚫어주어야 합니다. 그 정문을 만드는 작업이 바로 이어지는 <strong>[3단계: 백엔드 API 작성]</strong>의 핵심입니다!</p>
        </div>
      </div>
    `
  },
  {
    id: 'step-3',
    title: '3단계: 백엔드 API 작성',
    navTitle: '3. API & 비즈니스 로직',
    icon: 'code-2',
    content: `
      <h1 class="step-title">3단계: 백엔드 API & 핵심 비즈니스 로직 작성</h1>
      <p>게시글을 다루는 정석적인 RESTful API(CRUD)를 <code>src/index.ts</code>에 구현합니다.</p>
      
      ${createCodeBlock('javascript', `import { Hono } from 'hono'

// 타입 정의
type Bindings = {
  DB: D1Database
  ADMIN_SECRET_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

// [Middleware] 관리자 인증 미들웨어
const adminAuth = async (c, next) => {
  const authHeader = c.req.header('Authorization');
  if (authHeader !== \`Bearer \${c.env.ADMIN_SECRET_KEY}\`) {
    return c.json({ success: false, error: 'Unauthorized Access' }, 401);
  }
  await next();
}

// [Create] 게시글 생성 (퍼블릭)
app.post('/api/posts', async (c) => {
  const { title, content, author } = await c.req.json();
  
  // 입력값 유효성 검증
  if (!title || !content || !author) {
    return c.json({ success: false, error: '필수 항목이 누락되었습니다.' }, 400);
  }

  const result = await c.env.DB.prepare(
    'INSERT INTO posts (title, content, author) VALUES (?, ?, ?) RETURNING *'
  ).bind(title, content, author).first();
  
  return c.json({ success: true, data: result }, 201);
})

// [Read] 게시글 조회 (퍼블릭, 삭제된 데이터 제외)
app.get('/api/posts', async (c) => {
  const { results } = await c.env.DB.prepare(
    'SELECT * FROM posts WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT 50'
  ).all();
  return c.json({ success: true, data: results });
})

// [Update] 게시글 수정 (관리자 전용)
app.put('/api/posts/:id', adminAuth, async (c) => {
  const id = c.req.param('id');
  const { title, content } = await c.req.json();
  
  await c.env.DB.prepare(
    'UPDATE posts SET title = ?, content = ? WHERE id = ? AND deleted_at IS NULL'
  ).bind(title, content, id).run();
  
  return c.json({ success: true, message: '수정 완료' });
})

// [Delete] 게시글 삭제 - 소프트 딜리트 (관리자 전용)
app.delete('/api/posts/:id', adminAuth, async (c) => {
  const id = c.req.param('id');
  
  await c.env.DB.prepare(
    'UPDATE posts SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?'
  ).bind(id).run();
  
  return c.json({ success: true, message: '삭제(소프트 딜리트) 완료' });
})

export default app`, 'src/index.ts')}
    `
  },
  {
    id: 'step-4',
    title: '4단계: 보안 및 환경설정',
    navTitle: '4. 보안 및 네트워크 설정',
    icon: 'lock',
    content: `
      <h1 class="step-title">4단계: 보안 및 네트워크 환경설정</h1>
      <p>우리가 DB에 직접 들어가서 권한 설정을 하지 않아도 되는 이유가 바로 이번 단계에 있습니다. 클라우드에게 <strong>"내 백엔드 코드와 DB를 이렇게 연결해 줘!"</strong>라는 지시서를 파일로 작성하는 단계입니다.</p>
      
      <h2>1. wrangler.toml 바인딩(연결) 설정</h2>
      <p>프로젝트 최상단의 <code>wrangler.toml</code> 파일은 Cloudflare에게 내리는 <strong>핵심 지시서</strong>입니다. 여기에 DB ID를 적어두면, 클라우드가 알아서 DB 유저를 만들고 비밀번호를 설정해서 우리 코드(<code>c.env.DB</code>)에 안전하게 연결해 줍니다.</p>
      ${createCodeBlock('toml', `name = "commercial-backend"
main = "src/index.ts"
compatibility_date = "2024-03-20"

# [핵심 지시] 내 코드의 'DB'라는 변수에 실제 데이터베이스를 알아서 연결해 달라는 명령어
[[d1_databases]]
binding = "DB"
database_name = "my-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" # 추후 6단계 프로덕션 배포 시 기입
preview_database_id = "DB" # 로컬 테스트용 가상 ID`, 'wrangler.toml')}

      <h2>2. CORS 화이트리스트 적용 (프론트엔드 허용)</h2>
      <p><code>src/index.ts</code> 상단에 CORS 미들웨어를 추가하여, 내가 허락한 프론트엔드 도메인(예: 관리자 웹사이트)에서만 이 백엔드 API를 호출할 수 있도록 악의적인 접근을 차단합니다.</p>
      ${createCodeBlock('javascript', `import { cors } from 'hono/cors'

// 모든 API 라우트에 대해 CORS 적용
app.use('/api/*', cors({
  origin: ['https://my-commercial-site.com', 'http://localhost:3000'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}))`, 'src/index.ts')}
    `
  },
  {
    id: 'step-5',
    title: '5단계: 프론트엔드 연동',
    navTitle: '5. 로컬 테스트 및 연동',
    icon: 'monitor-smartphone',
    content: `
      <h1 class="step-title">5단계: 프론트엔드 연동 테스트 (Local Test)</h1>
      <p>작성한 백엔드를 로컬에서 실행하고 프론트엔드에서 데이터를 요청하는 방법을 확인합니다.</p>
      
      <h2>1. 로컬 서버 실행</h2>
      ${createCodeBlock('bash', 'npm run dev', 'Terminal')}
      
      <h2>2. 프론트엔드 Fetch/Axios 호출 예시</h2>
      <p>인증이 필요한 API와 그렇지 않은 API의 호출 방식 차이를 확인하세요.</p>
      ${createCodeBlock('javascript', `// [생성] 일반 사용자의 게시글 작성 (비인증)
async function createPost() {
  const response = await fetch('http://localhost:8787/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: '견적 문의합니다.',
      content: '웹사이트 제작 비용이 궁금합니다.',
      author: '고객명'
    })
  });
  const result = await response.json();
  console.log('생성 결과:', result);
}

// [삭제] 관리자의 게시글 삭제 (인증 헤더 포함)
async function deletePost(postId) {
  const response = await fetch(\`http://localhost:8787/api/posts/\${postId}\`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer my_secure_admin_key_2024!' // .dev.vars 에 설정한 키
    }
  });
  const result = await response.json();
  console.log('삭제 결과:', result);
}`, 'frontend/api.js')}

      <h2>3. cURL을 이용한 빠른 검증</h2>
      ${createCodeBlock('bash', 'curl -X GET http://localhost:8787/api/posts', 'Terminal')}
    `
  },
  {
    id: 'step-6',
    title: '6단계: 클라우드 프로덕션 배포',
    navTitle: '6. 프로덕션 배포',
    icon: 'cloud-upload',
    content: `
      <h1 class="step-title">6단계: 클라우드 프로덕션 배포 및 도메인 연결</h1>
      <p>모든 개발 및 테스트가 완료되면 실제 운영 환경(Production)으로 배포합니다.</p>
      
      <h2>1. 프로덕션 DB 생성 및 마이그레이션</h2>
      <p>클라우드 상에 실제 운영될 텅 빈 DB를 만들고, 로컬에서 했던 것처럼 설계도를 덮어씌우는 마이그레이션(Migration) 작업을 진행합니다.</p>
      ${createCodeBlock('bash', `# 1. 프로덕션 DB 생성 (빈 깡통 만들기)
npx wrangler d1 create my-production-db
# (출력되는 database_id를 wrangler.toml에 붙여넣으세요)

# 2. 마이그레이션 (빈 깡통에 schema.sql 설계도 적용하기)
npx wrangler d1 execute my-production-db --file=./schema.sql`, 'Terminal')}

      <h2>2. 프로덕션 환경 변수 등록 (Secrets)</h2>
      <p>관리자 비밀번호와 같은 민감한 정보는 <code>wrangler.toml</code>에 적지 않고 안전한 보안 저장소에 등록합니다.</p>
      ${createCodeBlock('bash', 'npx wrangler secret put ADMIN_SECRET_KEY', 'Terminal')}

      <h2>3. 최종 배포 (Deploy)</h2>
      ${createCodeBlock('bash', 'npx wrangler deploy', 'Terminal')}
      
      <div class="alert">
        <i data-lucide="check-circle" class="alert-icon"></i>
        <div class="alert-content">
          <p><strong>도메인 연결 및 유료 전환 체크포인트</strong></p>
          <ul>
            <li><strong>HTTPS SSL 자동 연동:</strong> 배포 성공 시 <code>*.workers.dev</code> 도메인이 자동 발급되며, Cloudflare 대시보드에서 본인의 커스텀 도메인을 클릭 몇 번으로 연동할 수 있습니다. (SSL 무상 지원)</li>
            <li><strong>무료 티어 한계:</strong> 하루 10만 건 요청(Workers), 10만 건 쓰기(D1)까지 무료입니다. MAU 수만 명 수준의 서비스까지 커버 가능하며, 초과 시 월 $5의 유료 플랜(Workers Paid)으로 전환하면 즉시 한도가 대폭 상향됩니다.</li>
          </ul>
        </div>
      </div>
    `
  }
];

const aiCurriculumData = [
  {
    id: 'ai-step-1',
    title: '1단계: 프로젝트 환경 구성',
    navTitle: '1. 폴더 생성 및 Hono 세팅',
    icon: 'folder-plus',
    content: `
      <h1 class="step-title">1단계: 프롬프트로 프로젝트 초기화</h1>
      <p>AI에게 <strong>가장 가볍고 빠른 Cloudflare 기반의 Hono 프로젝트</strong>를 만들어 달라고 지시합니다.</p>
      
      ${createCodeBlock('markdown', "[프롬프트]\n너는 10년 차 시니어 백엔드 아키텍트야. \n비용이 0원이고 콜드 스타트가 없는 완벽한 서버리스 백엔드를 만들 거야.\n기술 스택은 Cloudflare Workers + Hono + D1 DB를 사용할 거니까, \n터미널에서 Hono 프로젝트 뼈대를 생성하는 npm CLI 명령어(cloudflare-workers 템플릿 지정)를 알려주고 실행해 줘.", 'AI Prompt')}
    `
  },
  {
    id: 'ai-step-2',
    title: '2단계: DB 스키마 설계',
    navTitle: '2. Cloudflare D1 스키마 설계',
    icon: 'database',
    content: `
      <h1 class="step-title">2단계: DB 스키마 설계 프롬프트</h1>
      <p>AI에게 우리가 원하는 데이터 구조를 말로 설명하여 <code>schema.sql</code> 파일을 짜게 합니다.</p>
      
      ${createCodeBlock('markdown', "[프롬프트]\n프로젝트 루트에 'schema.sql' 파일을 생성해 줘.\n용도는 게시판이며, 'posts' 테이블을 D1(SQLite) 문법으로 작성해야 해.\n필수 컬럼은 id, title, content, author, created_at 이고, \n상업용 서비스이므로 데이터를 완전히 지우지 않기 위한 'deleted_at (소프트 딜리트용)' 컬럼도 반드시 추가해.\n그리고 검색 성능 최적화를 위해 생성일과 삭제일에 인덱스를 걸어줘.", 'AI Prompt')}
    `
  },
  {
    id: 'ai-step-3',
    title: '3단계: 관리자 뒷문 세팅',
    navTitle: '3. 관리자 전용 DB 직접 조작',
    icon: 'terminal-square',
    content: `
      <h1 class="step-title">3단계: 로컬 테스트 및 마이그레이션 프롬프트</h1>
      <p>방금 만든 스키마를 로컬 가상 DB에 적용하고 테스트 데이터를 넣으라고 지시합니다.</p>
      
      ${createCodeBlock('markdown', "[프롬프트]\n방금 만든 schema.sql을 바탕으로 로컬 D1 데이터베이스 마이그레이션을 실행하는 wrangler 명령어를 실행해 줘.\n성공적으로 생성되었다면, 개발자인 내가 뒷문으로 데이터를 확인할 수 있도록 더미 데이터를 3개 INSERT 하고 SELECT로 확인하는 명령어까지 차례대로 실행해 줘.", 'AI Prompt')}
    `
  },
  {
    id: 'ai-step-4',
    title: '4단계: 백엔드 정문(API) 설계',
    navTitle: '4. 백엔드 API 로직 작성',
    icon: 'code-2',
    content: `
      <h1 class="step-title">4단계: API & 인프라 지시서 프롬프트</h1>
      <p>핵심 비즈니스 로직(index.ts)과 인프라 지시서(wrangler.toml)를 한 번에 작성하게 합니다.</p>
      
      ${createCodeBlock('markdown', "[프롬프트]\n이제 src/index.ts 파일에 Hono를 이용한 게시글 CRUD REST API를 구현해 줘.\n- DB 바인딩 이름은 'DB'야.\n- 삭제는 물리 삭제가 아닌 deleted_at을 업데이트하는 소프트 딜리트로 구현해.\n- 모든 API에는 CORS를 열어줘.\n\n그리고 wrangler.toml 파일도 생성해서 d1_databases 바인딩(DB)을 세팅해 줘.", 'AI Prompt')}
    `
  },
  {
    id: 'ai-step-5',
    title: '5단계: 보안 키 세팅',
    navTitle: '5. 인증 키 보안 (Secrets)',
    icon: 'key',
    content: `
      <h1 class="step-title">5단계: 보안 인증 및 미들웨어 프롬프트</h1>
      <p>데이터 조작을 아무나 하지 못하도록 관리자 인증 키를 세팅하고 코드를 수정하게 합니다.</p>
      
      ${createCodeBlock('markdown', "[프롬프트]\nAPI 중 수정(PUT)과 삭제(DELETE)는 아무나 할 수 없어야 해.\n헤더에 Authorization: Bearer {ADMIN_SECRET_KEY} 가 있을 때만 통과하는 미들웨어를 index.ts에 추가해 줘.\n그리고 로컬 테스트를 위해 .dev.vars 파일을 만들어서 ADMIN_SECRET_KEY=my_secure_key 라고 설정해 줘.\n실제 배포용 클라우드 Secret은 나중에 내가 직접 입력할 테니까 설정 방법만 주석으로 알려줘.", 'AI Prompt')}
    `
  },
  {
    id: 'ai-step-6',
    title: '6단계: 프로덕션 배포',
    navTitle: '6. 클라우드 배포 및 도메인',
    icon: 'cloud-upload',
    content: `
      <h1 class="step-title">6단계: 배포 및 디버깅 프롬프트</h1>
      <p>작업한 내용을 클라우드에 배포하고, 혹시라도 에러가 발생하면 AI에게 통째로 물어보는 <strong>'에러 던지기' 기법</strong>을 사용합니다.</p>
      
      ${createCodeBlock('markdown', "[프롬프트]\n모든 작업이 끝났어. 현재 프로젝트를 Cloudflare 프로덕션 서버에 배포하는 명령어를 실행해 줘.\n\n만약 에러가 난다면 아래 로그를 보고 해결해 줘:\n(여기에 빨간색 에러 로그 전체를 복사해서 붙여넣기)", 'AI Prompt')}
    `
  }
];
function createCodeBlock(language, code, filename) {
  // HTML 엔티티 이스케이프 (PrismJS 정상 작동을 위함)
  const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  return `
    <div class="code-wrapper">
      <div class="code-header">
        <span>${filename}</span>
        <button class="copy-btn" onclick="copyToClipboard(this)">
          <i data-lucide="copy"></i> Copy
        </button>
      </div>
      <pre><code class="language-${language}">${escapedCode}</code></pre>
    </div>
  `;
}

let currentStep = 0;
let currentTab = 'practical'; // 'workflow', 'practical', 'ai'

function init() {
  // Mobile Menu Toggle
  document.getElementById('mobile-menu-btn').onclick = () => {
    document.getElementById('sidebar').classList.toggle('open');
  };

  // Tab Listeners
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      
      if (currentTab === 'workflow') {
        document.getElementById('sidebar').style.display = 'none';
        renderWorkflow();
      } else {
        document.getElementById('sidebar').style.display = 'flex';
        renderSidebar();
        renderStep(0);
      }
    };
  });

  // Initial Render
  renderSidebar();
  renderStep(0);
}

function renderSidebar() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.innerHTML = '';
  
  const data = currentTab === 'ai' ? aiCurriculumData : curriculumData;
  
  data.forEach((step, index) => {
    const navItem = document.createElement('a');
    navItem.className = `nav-item ${index === 0 ? 'active' : ''}`;
    navItem.innerHTML = `<i data-lucide="${step.icon}"></i> ${step.navTitle}`;
    navItem.onclick = () => renderStep(index);
    navMenu.appendChild(navItem);
  });
}

function renderStep(index) {
  const contentContainer = document.getElementById('content-container');
  const data = currentTab === 'ai' ? aiCurriculumData : curriculumData;
  currentStep = index;
  
  // Update nav active state
  document.querySelectorAll('.nav-item').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });

  // Render HTML
  contentContainer.innerHTML = `<div class="step-content active">${data[index].content}</div>`;
  
  // Initialize Lucide Icons
  lucide.createIcons();
  
  // Trigger Prism.js Syntax Highlighting
  Prism.highlightAll();
  
  // Close mobile sidebar if open
  document.getElementById('sidebar').classList.remove('open');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderWorkflow() {
  const contentContainer = document.getElementById('content-container');
  
  // Update nav active state (remove active from all steps)
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  
  const workflowHTML = `
    <h1 class="step-title" style="margin-bottom: 30px;"><i data-lucide="map" style="display:inline; margin-bottom:-4px;"></i> 한눈에 보는 바이브코딩 워크플로우</h1>
    <p style="margin-bottom: 40px; color: var(--text-muted);">지금까지 질문과 답변을 통해 정리된 <strong>'AI 기반 로컬 백엔드 구축의 전체 흐름'</strong>입니다. 인프라 구축부터 데이터 조작 권한까지, 이 아키텍처의 큰 그림을 한눈에 파악하세요.</p>
    
    <div class="workflow-container">
      
      <!-- Step 1 -->
      <div class="workflow-step">
        <h3><div class="step-number">1</div> 필수 환경 세팅 (어디서 개발하는가?)</h3>
        <div class="workflow-desc">
          <p><span class="workflow-badge">Local</span> <strong>내 컴퓨터 (VS Code & Terminal)</strong></p>
          <p>모든 개발의 시작입니다. VS Code를 설치하고 하단에 터미널(까만 창)을 엽니다. 이곳에서 폴더를 열고 모든 파일을 관리합니다.</p>
        </div>
      </div>
      
      <div class="workflow-arrow"><i data-lucide="arrow-down"></i></div>

      <!-- Step 2 -->
      <div class="workflow-step">
        <h3><div class="step-number">2</div> 바이브코딩 (AI를 통한 텍스트 파일 작성)</h3>
        <div class="workflow-desc">
          <p><span class="workflow-badge">Vibe Coding</span> <strong>인프라를 코드로 정의 (IaC)</strong></p>
          <p>클라우드 웹사이트에 접속해서 버튼을 누르는 대신, AI(Cursor, Copilot 등)에게 기획만 전달하여 로컬 폴더에 단 3가지 핵심 텍스트 파일만 작성합니다.</p>
          <ul style="margin-top: 10px; color: var(--text-muted); font-size: 0.95rem;">
            <li><code>schema.sql</code> : DB 테이블 설계도 (데이터 구조)</li>
            <li><code>index.ts</code> : 백엔드 로직 정문 API (CRUD)</li>
            <li><code>wrangler.toml</code> : 클라우드 인프라 지시서 (DB 연결, 배포 설정)</li>
          </ul>
        </div>
      </div>

      <div class="workflow-arrow"><i data-lucide="arrow-down"></i></div>

      <!-- Step 3 -->
      <div class="workflow-step">
        <h3><div class="step-number">3</div> 개발자 전용 뒷문 (DB 강제 통제)</h3>
        <div class="workflow-desc">
          <p><span class="workflow-badge">Backdoor</span> <strong>개발자(최고 관리자)의 직접 조작</strong></p>
          <p>개발 중이거나 비상 상황일 때, 코드를 거치지 않고 DB를 직접 강제 조작하는 경로입니다. 터미널 명령어(CLI)를 치거나, VS Code SQLite Viewer(엑셀 형태)를 열어 데이터를 내 마음대로 지우고 추가합니다.</p>
        </div>
      </div>

      <div class="workflow-arrow"><i data-lucide="arrow-down"></i></div>

      <!-- Step 4 -->
      <div class="workflow-step" style="border-color: #fbbf24;">
        <h3><div class="step-number" style="background:#fbbf24;">4</div> 클라우드 제출 및 자동 인프라 구축</h3>
        <div class="workflow-desc">
          <p><span class="workflow-badge" style="background:rgba(251, 191, 36, 0.1); color:#fbbf24;">Cloudflare</span> <strong>서버리스 프로덕션 배포</strong></p>
          <p>로컬에서 작성한 <code>wrangler.toml</code> 지시서를 클라우드로 배포(Deploy)합니다. Cloudflare는 이 지시서를 읽고 <strong>알아서 가상 서버를 할당하고, 진짜 DB를 만들고, 권한을 연결</strong>해 줍니다. 개발자는 인프라 설정에 단 1분도 쓰지 않습니다.</p>
        </div>
      </div>

      <div class="workflow-arrow"><i data-lucide="arrow-down"></i></div>

      <!-- Step 5 -->
      <div class="workflow-step" style="border-color: #4ade80;">
        <h3><div class="step-number" style="background:#4ade80;">5</div> 프론트엔드 정문 통과 (실제 서비스 운영)</h3>
        <div class="workflow-desc">
          <p><span class="workflow-badge" style="background:rgba(74, 222, 128, 0.1); color:#4ade80;">API Frontdoor</span> <strong>관리자 페이지를 통한 정상 데이터 조작</strong></p>
          <p>배포가 끝난 뒤, 실제 운영팀은 3번의 '무식한 뒷문'을 쓰지 않습니다. 우리가 작성한 <code>index.ts</code>가 안전한 정문(API) 역할을 하며, 프론트엔드 관리자 웹사이트는 이 정문을 통해서만 데이터를 조작(수정/삭제)하게 됩니다.</p>
        </div>
      </div>

      <div class="workflow-arrow"><i data-lucide="arrow-down"></i></div>

      <!-- Outro -->
      <div class="workflow-step" style="border-color: #a855f7; background: rgba(168, 85, 247, 0.05);">
        <h3 style="color: #c084fc;"><i data-lucide="sparkles" style="color:#c084fc; display:inline;"></i> 마무리: 왜 이 스택이 '바이브코딩'에 완벽한가?</h3>
        <div class="workflow-desc">
          <p>방금까지의 워크플로우를 보셨다면, 서버를 사고, DB를 깔고, 포트를 여는 <strong>'물리적/인프라적 작업'이 단 하나도 없었다는 것</strong>을 눈치채셨을 것입니다.</p>
          <p>모든 인프라 설정과 로직이 내 컴퓨터의 <strong>단순한 텍스트 파일(<code>schema.sql</code>, <code>index.ts</code>, <code>wrangler.toml</code>)</strong>로 귀결됩니다.</p>
          <p>즉, AI(Cursor 등)에게 <em>"게시판 만들어줘"</em>라고 '바이브(Vibe)'만 전달하면, AI가 이 텍스트 파일들을 써 내려가는 것만으로 <strong>실제 백엔드 서버와 DB 구축, 배포까지 한 번에 끝낼 수 있습니다!</strong></p>
        </div>
      </div>

    </div>
  `;
  
  contentContainer.innerHTML = workflowHTML;
  lucide.createIcons();
  
  // Close mobile sidebar if open
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Global Copy Function for the onclick attribute
window.copyToClipboard = function(buttonElement) {
  const pre = buttonElement.closest('.code-wrapper').querySelector('pre');
  const code = pre.textContent;
  
  navigator.clipboard.writeText(code).then(() => {
    const originalHtml = buttonElement.innerHTML;
    buttonElement.innerHTML = '<i data-lucide="check"></i> Copied!';
    lucide.createIcons();
    buttonElement.style.color = '#4ade80';
    
    setTimeout(() => {
      buttonElement.innerHTML = originalHtml;
      lucide.createIcons();
      buttonElement.style.color = '#a3a3a3';
    }, 2000);
  });
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', init);
