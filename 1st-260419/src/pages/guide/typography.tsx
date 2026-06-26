import GuideSection from './components/guide-section';
import styles from './typography.module.scss';

const TypeRow = ({ name, size, weight, sample }: { name: string; size: number; weight: number; sample: string }) => (
  <div className={styles.row}>
    <div className={styles.meta}>
      <span className={styles.name}>{name}</span>
      <span className={styles.spec}>
        {size}px / W{weight}
      </span>
    </div>
    <div
      className={styles.sample}
      style={{ fontSize: `${size}px`, fontWeight: weight, lineHeight: 1.5 }}
    >
      {sample}
    </div>
  </div>
);

const TypographyGuidePage = () => {
  const sampleText = 'The quick brown fox jumps over the lazy dog. 디자인 시스템 가이드입니다.';

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Typography</h1>
        <p style={{ color: '#6b7280' }}>
          용도별로 세분화된 4단계 타이포그래피 스케일(Headline, Title, Body, Label)을 정의합니다.
        </p>
      </header>

      <GuideSection title="1. Headline (20~36px)">
          <TypeRow name="Headline 1" size={36} weight={800} sample={sampleText} />
          <TypeRow name="Headline 2" size={32} weight={800} sample={sampleText} />
          <TypeRow name="Headline 3" size={28} weight={700} sample={sampleText} />
          <TypeRow name="Headline 4" size={24} weight={700} sample={sampleText} />
          <TypeRow name="Headline 5" size={20} weight={700} sample={sampleText} />
      </GuideSection>

      <GuideSection title="2. Title (강조용 14~18px)">
          <TypeRow name="Title 1" size={18} weight={700} sample={sampleText} />
          <TypeRow name="Title 2" size={16} weight={600} sample={sampleText} />
          <TypeRow name="Title 3" size={14} weight={600} sample={sampleText} />
      </GuideSection>

      <GuideSection title="3. Body (본문용 14~18px)">
          <TypeRow name="Body 1" size={18} weight={400} sample={sampleText} />
          <TypeRow name="Body 2" size={16} weight={400} sample={sampleText} />
          <TypeRow name="Body 3" size={14} weight={400} sample={sampleText} />
      </GuideSection>

      <GuideSection title="4. Label (라벨용 10~13px)">
          <TypeRow name="Label 1" size={13} weight={500} sample={sampleText} />
          <TypeRow name="Label 2" size={12} weight={500} sample={sampleText} />
          <TypeRow name="Label 3" size={11} weight={500} sample={sampleText} />
          <TypeRow name="Label 4" size={10} weight={500} sample={sampleText} />
      </GuideSection>
    </div>
  );
};

export default TypographyGuidePage;