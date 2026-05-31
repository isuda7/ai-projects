# 📊 퍼블리싱 대시보드 가이드 및 생성 프롬프트

대시보드(Publishing Dashboard)는 프로젝트 내 모든 화면의 작업 상태, 경로, URL을 표 형태로 한눈에 관리하는 역할을 합니다. 대시보드를 수정하거나 새로운 기능을 추가할 때는 아래의 데이터 구조와 UI 명세를 준수해 주세요.

## 📝 1. 대시보드 데이터 구조
대시보드는 화면들을 논리적인 그룹(`PageGroup`) 단위로 묶어서 관리하며, 각 화면(`PageItem`)은 상태와 유형을 가집니다.

```typescript
type PageType = 'Page' | 'Popup';
type PageStatus = 'Published' | 'Review' | 'Draft';

interface PageItem {
  no: string;          // 화면 번호 (예: '01')
  path: string;        // 메뉴 경로
  type: PageType;      // 화면 유형
  url: string;         // 접속 URL
  date: string;        // 최근 수정일
  status: PageStatus;  // 작업 상태
  remarks: string;     // 비고
}

interface PageGroup {
  name: string;        // 그룹명
  items: PageItem[];   // 화면 목록
}
```

## 🎨 2. UI/UX 요구사항 (디자인 제약사항)
AI가 대시보드 UI를 구성하거나 수정할 때는 다음의 디자인 규칙을 **반드시 엄격하게 준수**해야 합니다.

### 2.1. 전체 레이아웃 (Layout)
- 일반 가이드 문서(`1024px`)와 달리, 대시보드는 사이드바 없이 브라우저 전체 너비 100%를 시원하게 사용합니다.

### 2.2. 상단 요약 영역 (Summary Dashboard)
- **숫자 강조**: 매우 큰 폰트(`30px`, `weight: 500`, `letter-spacing: -0.6px`)를 사용하여 직관적으로 눈에 띄게 배치합니다.
- **라벨**: 작은 폰트(`14px`, `weight: 700`, 대문자, `letter-spacing: 1px`)로 숫자 위에 배치합니다.
- 항목 간에는 세로 구분선(`1px solid #e5e7eb`)을 배치하여 시각적으로 분리합니다.

### 2.3. 데이터 테이블 영역 (Table Layout)
- **밀도 (Density)**: 좁은 화면에 많은 정보를 담기 위해 행 높이(`--table-row-height: 36px`)와 폰트 크기(`--table-font-size: 12px`)를 CSS 변수로 제어합니다.
- **테이블 헤더 (`thead`)**: 연한 청회색 배경(`background: #edf1fd`), 대문자, 굵은 글씨를 적용하여 열의 성격을 명확히 합니다.
- **그룹 행 (`group_row`)**: 옅은 회색 배경을 띠며 마우스 오버 시 살짝 진해집니다. 우측의 쉐브론(Chevron) 아이콘은 접힘/펼침 상태에 따라 회전(`-180deg` <-> `0deg`) 애니메이션이 적용되어야 합니다.
- **데이터 행 (`item_row`)**: 마우스 오버 시 미세한 배경색 변화(`rgba(15, 23, 42, 0.025)`)를 주어 현재 읽고 있는 행을 강조합니다. URL 링크는 포인트 컬러(`#00897b`)를 적용하고 오버 시 밑줄이 생기게 합니다.

### 2.4. 상태 뱃지 컬러 매핑 (Status Badges)
- **Published (완료)**: 긍정의 의미인 Cyan/Teal 계열 (`color: #00897b`, `background: #e0f2f1`)
- **Review (검토중)**: 주의/진행중 의미인 Amber 계열 (`color: #f57c00`, `background: #fff3e0`)
- **Draft (대기)**: 비활성화/대기 의미인 Gray 계열 (`color: #9e9e9e`, `background: #f5f5f5`)