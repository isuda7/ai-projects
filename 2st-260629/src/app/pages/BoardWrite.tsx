import * as React from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import styles from "./BoardWrite.module.scss";

export default function BoardWrite() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save and redirect
    alert("게시물이 등록되었습니다. (실제 연결 필요)");
    navigate("/board");
  };

  return (
    <div className={styles.container}>
      <div className={styles.backLinkWrapper}>
        <Link to="/board" className={styles.backLink}>
          <ArrowLeft className={styles.backIcon} />
          목록으로 돌아가기
        </Link>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1 className={styles.title}>게시물 작성</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <Input
              id="title"
              label="제목"
              required
              placeholder="제목을 입력하세요"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="content" className={styles.label}>
              내용 <span className={styles.required}>*</span>
            </label>
            <textarea
              id="content"
              required
              rows={15}
              placeholder="내용을 입력하세요"
              className={styles.textarea}
            ></textarea>
          </div>

          <div className={styles.formField}>
            <label className={styles.label}>
              첨부파일
            </label>
            <input
              type="file"
              className={styles.fileInput}
            />
          </div>

          <div className={styles.formActions}>
            <Button asChild color="primary" variant="outline">
              <Link to="/board" style={{ textDecoration: 'none', color: 'inherit' }}>취소</Link>
            </Button>
            <Button type="submit" color="primary" variant="fill">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8rem' }}>
                <Save className="w-4 h-4" />
                등록하기
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
