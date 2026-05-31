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

      <section>
        <h2 className={styles.title_h2}>Brand & Semantic Colors</h2>

        <div className={styles.color_group}>
          <h3 className={styles.group_title}>Primary (기본 액션 / 브랜드 컬러)</h3>
          <div className={styles.color_grid}>
            <ColorBlock label="50" hex="#ecfeff" />
            <ColorBlock label="100" hex="#cffafe" />
            <ColorBlock label="200" hex="#99f6e4" />
            <ColorBlock label="300" hex="#5eead4" />
            <ColorBlock label="400" hex="#2dd4bf" />
            <ColorBlock label="500" hex="#00adc0" main />
            <ColorBlock label="600" hex="#0d9488" />
            <ColorBlock label="700" hex="#0f766e" />
            <ColorBlock label="800" hex="#115e59" />
            <ColorBlock label="900" hex="#134e4a" />
          </div>
        </div>

        <div className={styles.color_group}>
          <h3 className={styles.group_title}>Secondary & Neutral (보조 액션 / 회색조)</h3>
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
          <h3 className={styles.group_title}>Success (성공 / 긍정 / 상승)</h3>
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
          <h3 className={styles.group_title}>Danger (위험 / 실패 / 하락)</h3>
          <div className={styles.color_grid}>
            <ColorBlock label="50" hex="#eff6ff" />
            <ColorBlock label="100" hex="#dbeafe" />
            <ColorBlock label="200" hex="#bfdbfe" />
            <ColorBlock label="300" hex="#93c5fd" />
            <ColorBlock label="400" hex="#60a5fa" />
            <ColorBlock label="500" hex="#3b82f6" main />
            <ColorBlock label="600" hex="#2563eb" />
            <ColorBlock label="700" hex="#1d4ed8" />
            <ColorBlock label="800" hex="#1e40af" />
            <ColorBlock label="900" hex="#1e3a8a" />
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
      </section>
    </div>
  );
};

export default ColorsGuidePage;