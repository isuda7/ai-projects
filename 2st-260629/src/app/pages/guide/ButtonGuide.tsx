import { Button } from "../../components/ui/Button";
import { PreviewBlock } from "../../components/guide/PreviewBlock";
import styles from "./GuidePages.module.scss";

export default function ButtonGuide() {
  const codeColors = `
<div className={styles.previewItems}>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="danger">Danger</Button>
  <Button color="link">Link</Button>
</div>
`;

  const codeVariants = `
<div className={styles.previewItems}>
  <Button color="primary" variant="fill">Fill (기본)</Button>
  <Button color="primary" variant="outline">Outline</Button>
  <Button color="primary" variant="ghost">Ghost</Button>
</div>
`;

  const codeSizes = `
<div className={styles.previewItems + ' ' + styles['previewItems--items-end']}>
  <Button size="sm">Small (sm)</Button>
  <Button size="md">Medium (md)</Button>
  <Button size="lg">Large (lg)</Button>
</div>
`;

  const codeStates = `
<div className={styles.previewItems}>
  <Button color="primary" disabled>Disabled Primary</Button>
  <Button color="primary" variant="outline" disabled>Disabled Outline</Button>
</div>
`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Button</h1>
        <p className={styles.description}>사용자의 액션을 유도하고 상호작용을 처리하는 가장 기본적인 UI 요소입니다.</p>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>1. Button Colors (컬러 계열)</h2>
        </div>
        
        <div className={styles.subSection}>
          <div className={styles.block}>
            <p className={styles.blockDesc}>`color` 속성을 사용하여 테마 컬러(primary, secondary, danger, link)를 정의합니다.</p>
            <PreviewBlock code={codeColors}>
              <div className={styles.previewItems}>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="danger">Danger</Button>
                <Button color="link">Link</Button>
              </div>
            </PreviewBlock>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>2. Button Variants (형상 계열)</h2>
        </div>
        
        <div className={styles.subSection}>
          <div className={styles.block}>
            <p className={styles.blockDesc}>`variant` 속성을 사용하여 외관 형태(fill, outline, ghost)를 정의합니다.</p>
            <PreviewBlock code={codeVariants}>
              <div className={styles.previewItems}>
                <Button color="primary" variant="fill">Fill (기본)</Button>
                <Button color="primary" variant="outline">Outline</Button>
                <Button color="primary" variant="ghost">Ghost</Button>
              </div>
            </PreviewBlock>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>3. Button Properties (속성)</h2>
        </div>

        <div className={styles.subSection}>
          <h3 className={styles.subSectionTitle}>3.1. Sizes</h3>
          
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Standard Sizes</h4>
            <p className={styles.blockDesc}>기본값은 Medium(md)입니다.</p>
            <PreviewBlock code={codeSizes}>
              <div className={`${styles.previewItems} ${styles['previewItems--items-end']}`}>
                <Button size="sm">Small (sm)</Button>
                <Button size="md">Medium (md)</Button>
                <Button size="lg">Large (lg)</Button>
              </div>
            </PreviewBlock>
          </div>
        </div>

        <div className={styles.subSection}>
          <h3 className={styles.subSectionTitle}>3.2. States</h3>
          
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Disabled State</h4>
            <p className={styles.blockDesc}>액션을 수행할 수 없을 때 사용합니다.</p>
            <PreviewBlock code={codeStates}>
              <div className={styles.previewItems}>
                <Button color="primary" disabled>Disabled Primary</Button>
                <Button color="primary" variant="outline" disabled>Disabled Outline</Button>
              </div>
            </PreviewBlock>
          </div>
        </div>
      </section>
    </div>
  );
}