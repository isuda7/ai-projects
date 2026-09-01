# 디자인 시스템 Elevator 가이드 생성 프롬프트

- **공통 뼈대**: 반드시 `template/PROMPT_GUIDE_BASE.md`에 정의된 마스터 템플릿 규칙(메뉴 분류, `// @ts-nocheck`, `<GuideSection>`, `<CodeBlock>` 등)을 최우선으로 준수합니다.
- **개별 구성**: 새로운 그림자 깊이(Elevation) 옵션을 추가하거나 확인하기 위한 가이드 페이지를 작성할 때는 아래의 개별 규칙과 뼈대 구조를 활용합니다.

## 📝 Elevator 가이드 작성 규칙
1. **파일 경로**: `src/pages/guide/elevator.tsx`
2. **스타일 재사용**: `src/pages/guide/template.module.scss`에 정의된 공통 클래스를 사용합니다.
3. **섹션 래핑**: `GuideSection`을 사용하여 접고 펼치기를 지원합니다.
4. **5단계 스케일 준수**: `--elevator-none` 부터 `--elevator-4` 까지 깊이감을 점진적으로 시각화하여 표현합니다.
5. **Z-index 스케일 명시**: 10단계의 `--zindex-*` 변수들을 테이블 형태로 안내합니다.
6. **컴포넌트 분리**: 단일 그림자 카드를 렌더링하는 요소는 파일 상단에 `ElevatorBlock`이라는 내부 컴포넌트로 분리하여 재사용합니다.

---

## 💻 Elevator 가이드 표준 뼈대 (React Component)

```tsx
import styles from './template.module.scss';
import GuideSection from './components/guide-section';

// 단일 Elevator(그림자) 블록 렌더링을 위한 공통 컴포넌트
const ElevatorBlock = ({ level, label, examples, varName }: { level: number; label: string; examples?: string; varName: string }) => (
  <div style={{ boxShadow: `var(${varName})`, padding: '24px', borderRadius: '8px', backgroundColor: '#ffffff', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    <p style={{ fontWeight: 600 }}>Level {level}</p>
    <p style={{ fontSize: '14px', fontWeight: 700, margin: '8px 0' }}>
      {label}
      {examples && <><br /><span style={{ fontSize: '11px', fontWeight: 'normal', color: '#6b7280' }}>{examples}</span></>}
    </p>
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
          <ElevatorBlock level={0} label="None" varName="--elevator-none" />
          <ElevatorBlock level={1} label="Element" examples="(Button, Badge)" varName="--elevator-1" />
          <ElevatorBlock level={2} label="Group" examples="(Card, Accordion)" varName="--elevator-2" />
          <ElevatorBlock level={3} label="Layer" examples="(Dropdown, Tooltip)" varName="--elevator-3" />
          <ElevatorBlock level={4} label="Overlay" examples="(Modal, Popover)" varName="--elevator-4" />
        </div>
      </GuideSection>

      <GuideSection title="Z-index Scales">
        <div style={{ overflowX: 'auto' }}>
          <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#475569' }}>
            <strong>Z-index 설계 규칙 (여유 공간 확보 전략)</strong><br />
            • <strong>1 ~ 99</strong>: 로컬 컨텍스트 내부에서의 겹침 제어 (요소 호버, 스티키 카드 등)<br />
            • <strong>100 ~ 999</strong>: 사이트 레이아웃 프레임 및 컨텐츠 위로 뜨는 일반 레이어<br />
            • <strong>1000 ~ 1999</strong>: 오버레이 영역. 모달 내부에 또 다른 팝오버나 달력이 뜰 수 있음을 고려하여 계층 사이에 100~200 단위의 충분한 여유 공간을 둡니다.<br />
            • <strong>9999</strong>: 시스템 알림(토스트 등) 절대 가려지지 않는 최상단 계층
          </p>
          <table className="table table-bordered" style={{ width: '100%', fontSize: '14px', textAlign: 'left' }}>
            <thead style={{ backgroundColor: '#f8fafc' }}>
              <tr>
                <th style={{ padding: '12px 16px' }}>Level / Name</th>
                <th style={{ padding: '12px 16px' }}>Variable</th>
                <th style={{ padding: '12px 16px' }}>Value</th>
                <th style={{ padding: '12px 16px' }}>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Element</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-element</code></td>
                <td style={{ padding: '12px 16px' }}>1</td>
                <td style={{ padding: '12px 16px' }}>탭 활성화 상태, 캐러셀 화살표, 카드 호버 등 내부 엘리먼트 뎁스</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Group</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-group</code></td>
                <td style={{ padding: '12px 16px' }}>10</td>
                <td style={{ padding: '12px 16px' }}>화면 내 플로팅 버튼(FAB), 스티키(Sticky) 컨텐츠</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Site Layout</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-layout</code></td>
                <td style={{ padding: '12px 16px' }}>100</td>
                <td style={{ padding: '12px 16px' }}>GNB (상단 헤더), LNB (사이드바), 고정 푸터 등 레이아웃 프레임</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Layer</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-layer</code></td>
                <td style={{ padding: '12px 16px' }}>200</td>
                <td style={{ padding: '12px 16px' }}>드롭다운 메뉴, 커스텀 셀렉트박스 옵션 목록</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Backdrop</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-backdrop</code></td>
                <td style={{ padding: '12px 16px' }}>1000</td>
                <td style={{ padding: '12px 16px' }}>모달/오프캔버스가 뜰 때 깔리는 검은색 딤(Dim) 처리 영역</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Modal</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-modal</code></td>
                <td style={{ padding: '12px 16px' }}>1200</td>
                <td style={{ padding: '12px 16px' }}>팝업 창, 모달 다이얼로그, 바텀 시트, 오프캔버스</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Popover</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-popover</code></td>
                <td style={{ padding: '12px 16px' }}>1300</td>
                <td style={{ padding: '12px 16px' }}>클릭 시 나타나는 정보성 팝오버 (모달 위에도 위치할 수 있음)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Datepicker</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-datepicker</code></td>
                <td style={{ padding: '12px 16px' }}>1400</td>
                <td style={{ padding: '12px 16px' }}>달력 선택기 (모달이나 팝오버 등 어떤 상황에서도 최상위에 떠야 함)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Tooltip</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-tooltip</code></td>
                <td style={{ padding: '12px 16px' }}>1500</td>
                <td style={{ padding: '12px 16px' }}>마우스 호버 시 즉각적으로 나타나는 아주 작은 정보 팁</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px' }}><strong>Toast / System</strong></td>
                <td style={{ padding: '12px 16px' }}><code>--zindex-toast</code></td>
                <td style={{ padding: '12px 16px' }}>9999</td>
                <td style={{ padding: '12px 16px' }}>토스트 알림, 글로벌 로딩 스피너 (절대 화면에서 가려지면 안 되는 시스템 메시지)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </GuideSection>
    </div>
  );
};

export default ElevatorGuidePage;
```