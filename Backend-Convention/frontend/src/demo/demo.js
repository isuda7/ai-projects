// Initialize Lucide Icons
lucide.createIcons();

// Vite의 환경변수를 이용하여 개발 모드(Local)와 운영 모드(Production) 분리
const API_BASE = import.meta.env.DEV 
  ? 'http://localhost:8787/api' 
  : 'https://backend.isuda7.workers.dev/api';

let currentEditId = null;

document.addEventListener('DOMContentLoaded', () => {
  fetchPosts();

  // Navigation events
  const createBtn = document.getElementById('btn-create');
  if (createBtn) {
    createBtn.addEventListener('click', () => {
      openEditView(); // No ID means Create mode
    });
  }

  document.querySelectorAll('.btn-back').forEach(btn => {
    btn.addEventListener('click', () => navigate('view-list'));
  });
  
  document.querySelector('.btn-cancel').addEventListener('click', () => navigate('view-list'));

  // Save button
  document.getElementById('edit-btn-save').addEventListener('click', savePost);
});

// -----------------------------------------
// Router (SPA View Switching)
// -----------------------------------------
function navigate(viewId) {
  document.querySelectorAll('.view-section').forEach(view => {
    view.classList.add('hidden');
  });
  document.getElementById(viewId).classList.remove('hidden');
  
  // Create button only visible in list view
  const createBtn = document.getElementById('btn-create');
  if (createBtn) {
    createBtn.style.display = viewId === 'view-list' ? 'flex' : 'none';
  }
}

// -----------------------------------------
// API & Render Logic
// -----------------------------------------

async function fetchPosts() {
  const tbody = document.getElementById('board-tbody');
  tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">로딩 중...</td></tr>';
  
  try {
    const response = await fetch(`${API_BASE}/posts`);
    const result = await response.json();
    
    if (result.success && result.data.length > 0) {
      renderPosts(result.data);
    } else {
      showEmptyState();
    }
  } catch (error) {
    console.error(error);
    showEmptyState('게시글을 불러오는 데 실패했습니다.');
  }
}

function renderPosts(posts) {
  const tbody = document.getElementById('board-tbody');
  tbody.innerHTML = '';
  
  posts.forEach(post => {
    const tr = document.createElement('tr');
    tr.dataset.id = post.id;
    
    tr.innerHTML = `
      <td>${post.id}</td>
      <td class="font-medium">${escapeHTML(post.title)}</td>
      <td>${escapeHTML(post.author)}</td>
      <td>${post.created_at.split(' ')[0]}</td>
      <td class="text-right">
        <button class="action-btn edit-btn" data-id="${post.id}" title="수정"><i data-lucide="edit-2"></i></button>
        <button class="action-btn delete-btn" data-id="${post.id}" title="삭제"><i data-lucide="trash-2"></i></button>
      </td>
    `;
    
    // Row click opens Detail View
    tr.addEventListener('click', (e) => {
      // Prevent opening detail view if action buttons were clicked
      if (e.target.closest('.action-btn')) return;
      openDetailView(post.id);
    });
    
    tbody.appendChild(tr);
  });
  
  lucide.createIcons();
  
  // Edit & Delete button events
  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.currentTarget.dataset.id;
      openEditView(id);
    });
  });
  
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.currentTarget.dataset.id;
      deletePost(id);
    });
  });
}

function showEmptyState(msg = '등록된 게시글이 없습니다.') {
  const tbody = document.getElementById('board-tbody');
  tbody.innerHTML = `
    <tr>
      <td colspan="5" class="empty-state">
        <i data-lucide="inbox"></i>
        <p>${msg}</p>
      </td>
    </tr>
  `;
  lucide.createIcons();
}

// -----------------------------------------
// Detail View Logic
// -----------------------------------------

async function openDetailView(id) {
  try {
    const response = await fetch(`${API_BASE}/posts/${id}`);
    const result = await response.json();
    
    if (result.success) {
      const post = result.data;
      document.getElementById('view-title').textContent = post.title;
      document.getElementById('view-author').textContent = post.author;
      document.getElementById('view-date').textContent = post.created_at;
      document.getElementById('view-content').textContent = post.content;
      
      navigate('view-detail');
    } else {
      alert('게시글을 불러오지 못했습니다.');
    }
  } catch (error) {
    console.error(error);
    alert('서버 에러가 발생했습니다.');
  }
}

// -----------------------------------------
// Edit/Create View Logic
// -----------------------------------------

async function openEditView(id = null) {
  currentEditId = id;
  const titleEl = document.getElementById('edit-modal-title'); // Reused ID from modal
  const form = document.getElementById('edit-form');
  const authorGroup = document.getElementById('author-group');
  const secretGroup = document.getElementById('secret-group');
  
  form.reset();
  
  if (id) {
    // Edit mode
    titleEl.textContent = '게시글 수정';
    authorGroup.style.display = 'none'; // Author cannot be changed
    secretGroup.style.display = 'block'; // Require Password
    
    // Fetch existing data
    try {
      const response = await fetch(`${API_BASE}/posts/${id}`);
      const result = await response.json();
      if (result.success) {
        document.getElementById('edit-title').value = result.data.title;
        document.getElementById('edit-content').value = result.data.content;
        document.getElementById('edit-id').value = result.data.id;
      }
    } catch (e) {
      alert('데이터를 불러오지 못했습니다.');
      return;
    }
  } else {
    // Create mode
    titleEl.textContent = '새 글 쓰기';
    authorGroup.style.display = 'block';
    secretGroup.style.display = 'block'; // Require Password for creation
  }
  
  navigate('view-form');
}

async function savePost() {
  const id = currentEditId;
  const title = document.getElementById('edit-title').value.trim();
  const content = document.getElementById('edit-content').value.trim();
  const author = document.getElementById('edit-author').value.trim();
  const secret = document.getElementById('edit-secret').value.trim();
  
  if (!title || !content || !secret) {
    alert('제목, 내용, 비밀번호를 모두 입력해주세요.');
    return;
  }
  
  try {
    let response;
    
    if (id) {
      // PUT (Update)
      response = await fetch(`${API_BASE}/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content, password: secret })
      });
    } else {
      // POST (Create)
      if (!author) {
        alert('작성자를 입력해주세요.');
        return;
      }
      response = await fetch(`${API_BASE}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content, author, password: secret })
      });
    }
    
    const result = await response.json();
    if (result.success) {
      navigate('view-list');
      fetchPosts();
    } else {
      alert('저장 실패: ' + result.error);
    }
  } catch (error) {
    console.error(error);
    alert('서버 통신 에러가 발생했습니다.');
  }
}

// -----------------------------------------
// Delete Logic
// -----------------------------------------

async function deletePost(id) {
  const secret = prompt('삭제하려면 이 글을 작성할 때 설정한 비밀번호를 입력하세요:');
  if (!secret) return;

  if (!confirm('정말 삭제하시겠습니까?')) return;

  try {
    const response = await fetch(`${API_BASE}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password: secret })
    });
    const result = await response.json();
    if (result.success) {
      fetchPosts();
    } else {
      alert('삭제 실패: ' + result.error);
    }
  } catch (error) {
    console.error(error);
    alert('서버 에러가 발생했습니다.');
  }
}

// XSS 방지용 간단한 이스케이프 함수
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
