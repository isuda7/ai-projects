import React from 'react';
import styles from './template.module.scss';

// 단일 그림자 블록을 렌더링하는 내부 컴포넌트
const ElevatorBlock = ({ level, varName }: { level: number; varName: string }) => (
  <div 
    style={{ 
      boxShadow: `var(${varName})`, 
      padding: '24px', 
      borderRadius: '8px', 
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      minWidth: '200px',
      alignItems: 'center',
      justifyContent: 'center',
      border: level === 1 ? '1px solid var(--color-gray-100)' : 'none'
    }}
  >
    <p style={{ fontWeight: 600, color: 'var(--color-gray-900)' }}>Level {level}</p>
    <p style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>{varName}</p>
  </div>
);

const ElevatorGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Elevator</h1>
        <p className={styles.description}>
          UI 요소의 Z축 깊이감을 나타내는 그림자(Box-shadow) 스케일 가이드입니다.
        </p>
      </header>

      <section className={styles.section}>
        <div>
          <h2 className={styles.title_h2}>1. Basic Usage</h2>
          <p className={styles.description}>
            계층 구조와 시각적 중요도에 따라 5단계의 그림자를 적용하여 요소 간의 깊이감을 표현합니다.
          </p>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 화면에 떠 있는 요소(모달, 팝업, 드롭다운 등)의 깊이가 깊을수록 더 높은 Level의 그림자를 사용해야 자연스럽습니다.
          </div>
        </div>

        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>1.1. Elevation Levels</h3>
          <p className={styles.description}>5단계의 점진적인 그림자 스케일 시각화입니다.</p>
          
          <div className={styles.content}>
            <ElevatorBlock level={1} varName="--elevator-1" />
            <ElevatorBlock level={2} varName="--elevator-2" />
            <ElevatorBlock level={3} varName="--elevator-3" />
            <ElevatorBlock level={4} varName="--elevator-4" />
            <ElevatorBlock level={5} varName="--elevator-5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElevatorGuidePage;