# 디자인 시스템 Elevator 가이드 생성 프롬프트

새로운 그림자 깊이(Elevation) 옵션을 추가하거나 확인하기 위한 가이드 페이지를 작성할 때는 아래의 규칙과 뼈대(Template) 구조를 준수하여 React 코드를 작성해 주세요.

## 📝 Elevator 가이드 작성 규칙
1. **파일 경로**: `src/pages/guide/elevator.tsx`
2. **스타일 재사용**: `src/pages/guide/template.module.scss`에 정의된 공통 클래스를 사용합니다.
3. **섹션 래핑**: `GuideSection`을 사용하여 접고 펼치기를 지원합니다.
4. **5단계 스케일 준수**: `--elevator-1` 부터 `--elevator-5` 까지 깊이감을 점진적으로 시각화하여 표현합니다.
5. **컴포넌트 분리**: 단일 그림자 카드를 렌더링하는 요소는 파일 상단에 `ElevatorBlock`이라는 내부 컴포넌트로 분리하여 재사용합니다.

---

## 💻 Elevator 가이드 표준 뼈대 (React Component)

```tsx
import styles from './template.module.scss';
import GuideSection from './components/guide-section';

// 단일 Elevator(그림자) 블록 렌더링을 위한 공통 컴포넌트
const ElevatorBlock = ({ level, varName }: { level: number; varName: string }) => (
  <div style={{ boxShadow: `var(${varName})`, padding: '24px', borderRadius: '8px', backgroundColor: '#ffffff', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <p style={{ fontWeight: 600 }}>Level {level}</p>
    <p style={{ fontSize: '12px', color: '#6b7280' }}>{varName}</p>
  </div>
);

const ElevatorGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>Elevator (Elevation)</h1>
        <p style={{ color: '#6b7280' }}>
          UI 요소들의 Z축 깊이감을 나타내는 5단계 그림자 스케일 가이드입니다.
        </p>
      </header>

      <GuideSection title="Shadow Levels">
        <div className={styles.content}>
          <ElevatorBlock level={1} varName="--elevator-1" />
          <ElevatorBlock level={2} varName="--elevator-2" />
          <ElevatorBlock level={3} varName="--elevator-3" />
          <ElevatorBlock level={4} varName="--elevator-4" />
          <ElevatorBlock level={5} varName="--elevator-5" />
        </div>
      </GuideSection>
    </div>
  );
};

export default ElevatorGuidePage;
```