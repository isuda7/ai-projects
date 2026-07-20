// @ts-nocheck
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import styles from './colors.module.scss';

const ColorBlock = ({ label, hex, main }: { label: string; hex: string; main?: boolean }) => (
  <div className={styles.color_block}>
    <div className={styles.box} style={{ backgroundColor: hex }}>
      {main && (
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 2px rgba(0,0,0,0.5)',
          }}
        />
      )}
    </div>
    <div>
      <p className={styles.label}>
        {label} {main && <span style={{ color: hex }}>*</span>}
      </p>
      <p className={styles.hex}>{hex}</p>
    </div>
  </div>
);

const ColorsGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Colors</h1>
        <p style={{ color: '#6b7280' }}>
          디자인 시스템에서 사용되는 시맨틱 색상 팔레트입니다. 모든 핵심 컬러는 50부터 900까지 10단계 명도 스케일로 구성됩니다.
        </p>
      </header>

      <GuideSection title="Brand & Semantic Colors">
        <div className={styles.color_group}>
          <h3 className={styles.group_title}>Primary (기본 액션 / 브랜드 컬러)</h3>
          <div className={styles.color_grid}>
            <ColorBlock label="50" hex="#f0f9ff" />
            <ColorBlock label="100" hex="#e0f2fe" />
            <ColorBlock label="200" hex="#bae6fd" />
            <ColorBlock label="300" hex="#7dd3fc" />
            <ColorBlock label="400" hex="#38bdf8" />
            <ColorBlock label="500" hex="#0294de" main />
            <ColorBlock label="600" hex="#0284c7" />
            <ColorBlock label="700" hex="#0369a1" />
            <ColorBlock label="800" hex="#075985" />
            <ColorBlock label="900" hex="#0c4a6e" />
          </div>
        </div>

        <div className={styles.color_group}>
          <h3 className={styles.group_title}>Secondary (보조 액션 컬러)</h3>
          <div className={styles.color_grid}>
            <ColorBlock label="50" hex="#faf5ff" />
            <ColorBlock label="100" hex="#f3e8ff" />
            <ColorBlock label="200" hex="#e9d5ff" />
            <ColorBlock label="300" hex="#d8b4fe" />
            <ColorBlock label="400" hex="#c084fc" />
            <ColorBlock label="500" hex="#923eaa" main />
            <ColorBlock label="600" hex="#9333ea" />
            <ColorBlock label="700" hex="#7e22ce" />
            <ColorBlock label="800" hex="#6b21a8" />
            <ColorBlock label="900" hex="#581c87" />
          </div>
        </div>

        <div className={styles.color_group}>
          <h3 className={styles.group_title}>Neutral (회색조)</h3>
          <div className={styles.color_grid}>
            <ColorBlock label="50" hex="#f9fafb" />
            <ColorBlock label="100" hex="#f3f4f6" />
            <ColorBlock label="200" hex="#e5e7eb" />
            <ColorBlock label="300" hex="#d1d5db" />
            <ColorBlock label="400" hex="#9ca3af" />
            <ColorBlock label="500" hex="#6b7280" main />
            <ColorBlock label="600" hex="#4b5563" />
            <ColorBlock label="700" hex="#374151" />
            <ColorBlock label="800" hex="#1f2937" />
            <ColorBlock label="900" hex="#111827" />
          </div>
        </div>

        <div className={styles.color_group}>
          <h3 className={styles.group_title}>Success (성공 / 긍정)</h3>
          <div className={styles.color_grid}>
            <ColorBlock label="50" hex="#ecfdf5" />
            <ColorBlock label="100" hex="#d1fae5" />
            <ColorBlock label="200" hex="#a7f3d0" />
            <ColorBlock label="300" hex="#6ee7b7" />
            <ColorBlock label="400" hex="#34d399" />
            <ColorBlock label="500" hex="#10b981" main />
            <ColorBlock label="600" hex="#059669" />
            <ColorBlock label="700" hex="#047857" />
            <ColorBlock label="800" hex="#065f46" />
            <ColorBlock label="900" hex="#064e3b" />
          </div>
        </div>

        <div className={styles.color_group}>
          <h3 className={styles.group_title}>Danger (위험 / 실패)</h3>
          <div className={styles.color_grid}>
            <ColorBlock label="50" hex="#fef2f2" />
            <ColorBlock label="100" hex="#fee2e2" />
            <ColorBlock label="200" hex="#fecaca" />
            <ColorBlock label="300" hex="#fca5a5" />
            <ColorBlock label="400" hex="#f87171" />
            <ColorBlock label="500" hex="#ef4444" main />
            <ColorBlock label="600" hex="#dc2626" />
            <ColorBlock label="700" hex="#b91c1c" />
            <ColorBlock label="800" hex="#991b1b" />
            <ColorBlock label="900" hex="#7f1d1d" />
          </div>
        </div>

        <div className={styles.color_group}>
          <h3 className={styles.group_title}>Warning (경고 / 주의)</h3>
          <div className={styles.color_grid}>
            <ColorBlock label="50" hex="#fffbeb" />
            <ColorBlock label="100" hex="#fef3c7" />
            <ColorBlock label="200" hex="#fde68a" />
            <ColorBlock label="300" hex="#fcd34d" />
            <ColorBlock label="400" hex="#fbbf24" />
            <ColorBlock label="500" hex="#f59e0b" main />
            <ColorBlock label="600" hex="#d97706" />
            <ColorBlock label="700" hex="#b45309" />
            <ColorBlock label="800" hex="#92400e" />
            <ColorBlock label="900" hex="#78350f" />
          </div>
        </div>
      </GuideSection>
    </div>
  );
};

export default ColorsGuidePage;