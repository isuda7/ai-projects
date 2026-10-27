# VibeCoding Design System — "Aurora Dark"

`VC-Convention/styles.css`에서 추출한 디자인 컨셉을 토큰·컴포넌트로 정리한 가이드. 새 UI는 값을 직접 쓰지 말고 `css/tokens.css`의 변수만 참조한다.

## 1. 컨셉
- **다크 + 네온 오로라**: 거의 검정(`#0d0d12`) 배경 위에 보라·시안·핑크가 천천히 흐르는 고정 배경(`body::after`, 15s).
- **글래스모피즘**: 반투명 면(`--glass`) + 얇은 테두리(`--border`) + 블러. 헤더·메가메뉴·지도·표·카드에 적용.
- **살아있는 hover**: 카드는 위로 떠오르고(`translateY`), 보라색 테두리·글로우, 상단에 시안→보라 라인이 그어진다.
- **그라데이션은 강조에만**: 제목(흰→라벤더), 루트 노드·마지막 로드맵(보라→핑크). 나머지는 단색.

## 2. 파일 구조
| 파일 | 역할 |
|---|---|
| `css/tokens.css` | 색·타이포·간격·반경·그림자·모션 변수 (다크 기본, `[data-theme="light"]` 오버라이드) |
| `css/base.css` | 리셋, 타이포, 포커스, 선택·스크롤바, 오로라 배경, 키프레임 |
| `css/layout.css` | 상단 고정 헤더 + hover 메가메뉴, 메인 컬럼, 블록 헤더, 페이저, 모바일(≤900px) |
| `css/components.css` | tag, note, card, desc, table, flow, stairs, map, road, rules |

로드 순서: tokens → base → layout → components.

## 3. 토큰
**색상**
| 용도 | 토큰 | 값 |
|---|---|---|
| 배경 | `--bg` | `#0d0d12` |
| 본문 / 보조 / 제목 | `--text` / `--text-muted` / `--text-heading` | `#f8f8f8` / `#a1a1aa` / `#fff` |
| Primary (보라) | `--primary` / `--primary-light` | `#7c3aed` / `#b38bfa` |
| Secondary (시안) | `--secondary` | `#06b6d4` |
| Accent (핑크) | `--accent` | `#ec4899` |
| Warning (앰버) | `--warning` | `#f59e0b` |
| 글래스 면 / hover | `--glass` / `--glass-hover` | `rgba(255,255,255,.03 / .06)` |
| 테두리 | `--border` | `rgba(255,255,255,.08)` |

**의미 매핑**: 시안 = 순서·번호·코드, 보라 = 유형·활성·강조, 앰버 = 단계, 핑크 = 그라데이션 끝·규칙 번호.

**타이포**: 본문 `Outfit`, 제목 `Inter` (한글은 Apple SD Gothic Neo / Pretendard / Malgun Gothic 폴백). 제목 `letter-spacing:-0.02em`, 한글 `word-break:keep-all`.
스케일: display `clamp(2.25rem,4.5vw,3.5rem)` · h2 1.65rem · h3 1.1rem · lead 1.15rem · body 1rem · small .9rem · caption .8rem.

**간격** 4px 단위 `--s-1`(4) ~ `--s-8`(64). **반경** sm 8 / md 12 / lg 20 / xl 24 / pill 999.
**모션** `--t-fast .2s`, `--t-base .3s`, `--ease`, `--ease-spring`(카드 hover). `prefers-reduced-motion` 시 애니메이션 비활성.

## 4. 컴포넌트 규칙
| 컴포넌트 | 클래스 | 규칙 |
|---|---|---|
| 성격 태그 | `.tag[data-k]` | 설명=중립, 순서=시안, 단계=앰버, 유형=보라. pill, 12.5px 내외 |
| 카드 | `.card` | glass + `--r-lg`, hover 시 -6px·보라 테두리·상단 시안→보라 라인 |
| 설명 목록 | `dl.desc` | 2열(키워드/설명), 행 구분선만 사용 |
| 표 | `.table-wrap > table` | glass 컨테이너, 헤더 glass, 행 hover |
| 순서 | `ol.flow` | 자동 번호(시안), 상단 3px 시안 라인, hover 상승 |
| 단계 | `ol.stairs` | 앰버 계단(nth-child로 높이 증가), 모바일은 세로 스택 |
| 지도 | `.map .root .branch .leaf` | 루트=그라데이션 pill, 영역=보라 tint 카드, 항목=glass 행 |
| 로드맵 | `ol.road` | 4열 카드, 마지막(완성)만 그라데이션 |
| 노트 | `.note` | 보라 tint + 좌측 3px 보라 바, 강조어 `b`는 보라 하이라이트 |
| 내비 | `.top .nav` / `.mega` | 상단 고정 글래스 헤더(전체 지도 + 5영역). 헤더에 hover/focus 시 전체 목차가 5열로 펼쳐짐, 링크 클릭 시 닫힘. ≤900px은 `목차` 버튼 토글. 메가메뉴 항목 옆 성격 표시는 `.tag` 배지(설명·순서·단계·유형)를 그대로 사용. |

## 5. 사용 규칙
1. 색·크기·간격은 반드시 토큰으로 쓴다 (하드코딩 금지).
2. 한 화면에서 그라데이션 채움은 1~2곳만.
3. 모든 인터랙티브 요소는 `:focus-visible` 링 유지, hover 시 transform+색 변화 중 하나 이상.
4. 라이트 테마는 토큰만 바꾼다. 컴포넌트에서 테마 분기하지 않는다.
5. 새 반응형은 `layout.css`의 900px 브레이크포인트를 따른다.
