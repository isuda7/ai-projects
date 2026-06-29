import { useParams, Link } from "react-router";
import { ArrowLeft, User, Calendar, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
import { MOCK_POSTS } from "./BoardList";
import styles from "./BoardDetail.module.scss";

export default function BoardDetail() {
  const { id } = useParams();
  const post = MOCK_POSTS.find(p => p.id === Number(id)) || MOCK_POSTS[0];

  return (
    <div className={styles.container}>
      <div className={styles.backLinkWrapper}>
        <Link to="/board" className={styles.backLink}>
          <ArrowLeft className={styles.backIcon} />
          목록으로 돌아가기
        </Link>
      </div>

      <div className={styles.card}>
        {/* Detail Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.metaList}>
            <div className={styles.metaItem}>
              <User className={styles.metaIcon} />
              <span className={styles.authorName}>{post.author}</span>
            </div>
            <div className={styles.metaItem}>
              <Calendar className={styles.metaIcon} />
              <span>{post.date}</span>
            </div>
            <div className={styles.metaItem}>
              <Eye className={styles.metaIcon} />
              <span>조회 {post.views}</span>
            </div>
          </div>
        </div>

        {/* Detail Content */}
        <div className={styles.content}>
          <p>
            안녕하세요. BuildCore {post.author}입니다.
          </p>
          <br/>
          <p>
            본 게시물은 테스트용 상세 내용입니다. 
            실제 운영 시에는 데이터베이스에 저장된 HTML 또는 마크다운 내용이 렌더링될 영역입니다.
          </p>
          <br/>
          <p>
            BuildCore는 항상 최고의 품질과 안전을 위해 노력하겠습니다.<br/>
            감사합니다.
          </p>
        </div>
      </div>

      <div className={styles.actions}>
        <Button asChild color="primary" variant="outline">
          <Link to="/board" style={{ textDecoration: 'none', color: 'inherit' }}>목록</Link>
        </Button>
        <div className={styles.actionRight}>
          <Button color="secondary" variant="fill">
            수정
          </Button>
          <Button color="danger" variant="fill">
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
}
