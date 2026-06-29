import { Badge } from "../../components/ui/Badge";
import { PreviewBlock } from "../../components/guide/PreviewBlock";
import styles from "./GuidePages.module.scss";

export default function BadgeGuide() {
  const codeColors = `
<div className={styles.previewItems}>
  <Badge color="default">Default</Badge>
  <Badge color="primary">Primary</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="danger">Danger</Badge>
</div>
`;

  const codeVariants = `
<div className={styles.previewItems}>
  <Badge color="primary" variant="fill">Fill (기본)</Badge>
  <Badge color="primary" variant="outline">Outline</Badge>
  <Badge color="success" variant="outline">Success Outline</Badge>
  <Badge color="danger" variant="outline">Danger Outline</Badge>
</div>
`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Badge</h1>
        <p className={styles.description}>상태, 카테고리, 속성 등을 간결하게 표시하는 컴포넌트입니다.</p>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>1. Badge Colors (컬러 계열)</h2>
        </div>
        
        <div className={styles.subSection}>
          <div className={styles.block}>
            <p className={styles.blockDesc}>`color` 속성을 사용하여 의미적인 테마 색상을 정의합니다.</p>
            <PreviewBlock code={codeColors}>
              <div className={styles.previewItems}>
                <Badge color="default">Default</Badge>
                <Badge color="primary">Primary</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="warning">Warning</Badge>
                <Badge color="danger">Danger</Badge>
              </div>
            </PreviewBlock>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>2. Badge Variants (형상 계열)</h2>
        </div>
        
        <div className={styles.subSection}>
          <div className={styles.block}>
            <p className={styles.blockDesc}>`variant` 속성을 사용하여 배경색 채움(fill) 혹은 테두리선(outline) 형태를 정의합니다.</p>
            <PreviewBlock code={codeVariants}>
              <div className={styles.previewItems}>
                <Badge color="primary" variant="fill">Fill (기본)</Badge>
                <Badge color="primary" variant="outline">Outline</Badge>
                <Badge color="success" variant="outline">Success Outline</Badge>
                <Badge color="danger" variant="outline">Danger Outline</Badge>
              </div>
            </PreviewBlock>
          </div>
        </div>
      </section>
    </div>
  );
}