import { Link } from "react-router";
import { Search, PenLine } from "lucide-react";
import { Button } from "../components/ui/button";
import styles from "./BoardList.module.scss";

// Mock Data
export const MOCK_POSTS = [
  { id: 1, title: "[공지] 2026년 하반기 신입/경력 사원 공개 채용", author: "인사팀", date: "2026-06-25", views: 1245 },
  { id: 2, title: "송도 해양 인프라 연구센터 시공 안전 점검 안내", author: "안전관리팀", date: "2026-06-20", views: 342 },
  { id: 3, title: "협력업체 대금 지급 일정 안내 (7월)", author: "재무팀", date: "2026-06-15", views: 890 },
  { id: 4, title: "제2경부고속도로 현장 환경 평가 보고서", author: "환경관리팀", date: "2026-06-10", views: 210 },
  { id: 5, title: "판교 테크원 타워 준공식 행사 안내", author: "홍보팀", date: "2026-06-01", views: 560 },
];

export default function BoardList() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>고객지원 게시판</h1>
          <p className={styles.subtitle}>
            BuildCore의 최신 소식과 공지사항을 확인하세요.
          </p>
        </div>
        
        <div className={styles.searchWrapper}>
          <div className={styles.searchField}>
            <input 
              type="text" 
              placeholder="검색어를 입력하세요" 
              className={styles.searchInput}
            />
            <Search className={styles.searchIcon} />
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={`${styles.th} ${styles['th--center']} w-20`}>번호</th>
                <th className={styles.th}>제목</th>
                <th className={`${styles.th} ${styles['th--center']} w-32`}>작성자</th>
                <th className={`${styles.th} ${styles['th--center']} w-32`}>등록일</th>
                <th className={`${styles.th} ${styles['th--center']} w-24`}>조회수</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_POSTS.map((post) => (
                <tr key={post.id} className={styles.tr}>
                  <td className={`${styles.td} ${styles['td--center']}`}>{post.id}</td>
                  <td className={styles.td}>
                    <Link to={`/board/${post.id}`} className={styles.postLink}>
                      {post.title}
                    </Link>
                  </td>
                  <td className={`${styles.td} ${styles.author}`}>{post.author}</td>
                  <td className={`${styles.td} ${styles.date}`}>{post.date}</td>
                  <td className={`${styles.td} ${styles.views}`}>{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Dummy */}
        <div className={styles.pagination}>
          <button className={styles.pageBtn}>&lt;</button>
          <button className={`${styles.pageBtn} ${styles['pageBtn--active']}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>&gt;</button>
        </div>
      </div>

      <div className={styles.actionWrapper}>
        <Button asChild color="primary" variant="fill">
          <Link to="/board/write" style={{ display: 'inline-flex', alignItems: 'center', gap: '8rem', color: 'inherit', textDecoration: 'none' }}>
            <PenLine className="w-4 h-4" />
            글쓰기
          </Link>
        </Button>
      </div>
    </div>
  );
}
