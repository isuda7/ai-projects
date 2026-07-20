// @ts-nocheck
import GuideSection from './components/guide-section';
import CodeBlock from './components/code-block';
import styles from './template.module.scss';

// 가이드 블록 렌더링용 공통 내부 컴포넌트
const UtilityBlock = ({ title, classNameText, children, description }: any) => (
  <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
    <h4 className={styles.title_h4} style={{ marginBottom: '8px' }}>
      {title} <span style={{ color: '#0294de', fontSize: '14px', marginLeft: '8px', fontWeight: 'bold' }}>.{classNameText}</span>
    </h4>
    {description && <p className={styles.description} style={{ marginBottom: '16px', fontSize: '13px' }}>{description}</p>}
    <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '4px', border: '1px dashed #d1d5db', minHeight: '80px' }}>
      {children}
    </div>
  </div>
);

const UtilitiesGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Utilities</h1>
        <p className={styles.description}>
          인라인 스타일을 최소화하고 일관된 레이아웃을 구성하기 위해 제공되는 공통 CSS 유틸리티 클래스입니다.
        </p>
      </header>

      <GuideSection title="1. Sizing (Width)">
          <p className={styles.description}>
            요소의 너비를 제어하는 클래스입니다. 고정값(px)과 퍼센트(%) 단위를 명확히 구분하여 사용합니다.
          </p>
          <div className={styles.guideline}>
            <strong>표기 규칙:</strong> 
            고정값은 <code>.w-&#123;size&#125;</code> (예: <code>.w-100</code> = 100px), 
            퍼센트는 <code>.w-&#123;size&#125;p</code> (예: <code>.w-100p</code> = 100%)
            <br /><br />
            <strong>사이즈 스케일:</strong>
            <ul style={{ paddingLeft: '24px', marginTop: '8px', lineHeight: '1.6' }}>
              <li><strong>0~100:</strong> 10 단위 (10, 20, 30 ... 100)</li>
              <li><strong>100~200:</strong> 20 단위 (120, 140, 160 ... 200)</li>
              <li><strong>200~500:</strong> 40 단위 (240, 280, 320 ... 500)</li>
              <li><strong>500~:</strong> 필요 시 사용자 정의 커스텀 추가</li>
            </ul>
          </div>
        
        <div className={styles.sub_section}>
          <UtilityBlock title="Percentage Width (%)" classNameText="w-{size}p" description="부모 요소에 비례하는 퍼센트 너비입니다.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ width: '100%', padding: '8px', backgroundColor: '#f0f9ff', textAlign: 'center', borderRadius: '4px', color: '#0369a1', fontSize: '12px' }}>w-100p (100%)</div>
              <div style={{ width: '80%', padding: '8px', backgroundColor: '#f0f9ff', textAlign: 'center', borderRadius: '4px', color: '#0369a1', fontSize: '12px' }}>w-80p (80%)</div>
              <div style={{ width: '50%', padding: '8px', backgroundColor: '#f0f9ff', textAlign: 'center', borderRadius: '4px', color: '#0369a1', fontSize: '12px' }}>w-50p (50%)</div>
              <div style={{ width: '30%', padding: '8px', backgroundColor: '#f0f9ff', textAlign: 'center', borderRadius: '4px', color: '#0369a1', fontSize: '12px' }}>w-30p (30%)</div>
            </div>
          </UtilityBlock>

          <UtilityBlock title="Fixed Width (px)" classNameText="w-{size}" description="지정된 스케일에 따른 고정 픽셀 너비입니다.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ width: '400px', padding: '8px', backgroundColor: '#faf5ff', textAlign: 'center', borderRadius: '4px', color: '#7e22ce', fontSize: '12px' }}>w-400 (400px)</div>
              <div style={{ width: '240px', padding: '8px', backgroundColor: '#faf5ff', textAlign: 'center', borderRadius: '4px', color: '#7e22ce', fontSize: '12px' }}>w-240 (240px)</div>
              <div style={{ width: '160px', padding: '8px', backgroundColor: '#faf5ff', textAlign: 'center', borderRadius: '4px', color: '#7e22ce', fontSize: '12px' }}>w-160 (160px)</div>
              <div style={{ width: '100px', padding: '8px', backgroundColor: '#faf5ff', textAlign: 'center', borderRadius: '4px', color: '#7e22ce', fontSize: '12px' }}>w-100 (100px)</div>
              <div style={{ width: '40px', padding: '8px', backgroundColor: '#faf5ff', textAlign: 'center', borderRadius: '4px', color: '#7e22ce', fontSize: '12px' }}>w-40 (40px)</div>
            </div>
          </UtilityBlock>
        </div>
      </GuideSection>

      <GuideSection title="2. Grid Layout">
          <p className={styles.description}>그리드 기반의 레이아웃 배치를 돕는 클래스입니다.</p>
        
        <div className={styles.sub_section}>
          <UtilityBlock title="Grid Container & Items" classNameText="grid, col, row" description="부모 요소에 grid를 선언하고, 자식 요소에 col, row를 배치합니다.">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              <div style={{ padding: '16px', backgroundColor: '#f0f9ff', textAlign: 'center', borderRadius: '4px', color: '#0369a1' }}>.col</div>
              <div style={{ padding: '16px', backgroundColor: '#f0f9ff', textAlign: 'center', borderRadius: '4px', color: '#0369a1' }}>.col</div>
              <div style={{ padding: '16px', backgroundColor: '#f0f9ff', textAlign: 'center', borderRadius: '4px', color: '#0369a1' }}>.col</div>
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'auto auto', gap: '8px', marginTop: '12px' }}>
               <div style={{ padding: '8px', backgroundColor: '#faf5ff', textAlign: 'center', borderRadius: '4px', color: '#7e22ce' }}>.row</div>
               <div style={{ padding: '8px', backgroundColor: '#faf5ff', textAlign: 'center', borderRadius: '4px', color: '#7e22ce' }}>.row</div>
            </div>
          </UtilityBlock>
        </div>
      </GuideSection>

      <GuideSection title="3. Alignment">
          <p className={styles.description}>콘텐츠나 요소의 정렬 위치를 제어합니다.</p>
        
        <div className={styles.sub_section}>
          <UtilityBlock title="Top Align" classNameText="align-t" description="위쪽으로 정렬합니다.">
            <div style={{ display: 'flex', alignItems: 'flex-start', height: '60px', backgroundColor: '#f0f9ff', padding: '8px', color: '#0369a1' }}>
              Top Aligned Content
            </div>
          </UtilityBlock>

          <UtilityBlock title="Bottom Align" classNameText="align-b" description="아래쪽으로 정렬합니다.">
            <div style={{ display: 'flex', alignItems: 'flex-end', height: '60px', backgroundColor: '#f0f9ff', padding: '8px', color: '#0369a1' }}>
              Bottom Aligned Content
            </div>
          </UtilityBlock>

          <UtilityBlock title="Middle / Center Align" classNameText="align-m" description="수직 및 수평 중앙으로 정렬합니다.">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', backgroundColor: '#f0f9ff', padding: '8px', color: '#0369a1' }}>
              Middle Aligned Content
            </div>
          </UtilityBlock>

          <UtilityBlock title="Left Align" classNameText="align-l" description="왼쪽으로 텍스트를 정렬합니다.">
            <div style={{ textAlign: 'left', backgroundColor: '#faf5ff', padding: '16px', color: '#7e22ce' }}>
              Left Aligned Text
            </div>
          </UtilityBlock>

          <UtilityBlock title="Right Align" classNameText="align-r" description="오른쪽으로 텍스트를 정렬합니다.">
            <div style={{ textAlign: 'right', backgroundColor: '#faf5ff', padding: '16px', color: '#7e22ce' }}>
              Right Aligned Text
            </div>
          </UtilityBlock>
        </div>
      </GuideSection>
    </div>
  );
};

export default UtilitiesGuidePage;