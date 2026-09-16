---
version: 1.0
name: buildlog-design
description: |
  사진 중심 SNS 홍보 페이지용 디자인 시스템. awesome-design-md의 Pinterest DESIGN.md
  (VoltAgent/awesome-design-md, MIT)를 기반으로 구조·간격·모서리·타이포 규칙을 가져오고,
  브랜드 색은 빌드로그 고유 색으로 바꿨다. 크림색 바탕이 화면(게시물 이미지)을
  돋보이게 하고, 강조색 하나가 주요 행동만 표시한다.

colors:
  primary: "#5b3df5"        # 빌드로그 보라. 주 CTA, 로고, 활성 탭 표시에만 사용
  on-primary: "#ffffff"
  primary-pressed: "#4a2fd6"
  primary-soft: "#efebff"   # 라벨 칩, 선택 배경
  ink: "#111111"
  body: "#33332e"
  mute: "#62625b"           # 보조 문구, 캡션 (흰 바탕 대비 6:1 이상)
  ash: "#91918c"            # 장식용만. 읽어야 하는 글자에 쓰지 않음
  hairline: "#dadad3"
  hairline-soft: "#e5e5e0"
  canvas: "#ffffff"
  surface-soft: "#fbfbf9"   # 페이지 바탕
  surface-card: "#f6f6f3"   # 카드·타일·그리드 칸 바탕
  secondary-bg: "#e5e5e0"   # 보조 버튼 모양
  surface-dark: "#262622"   # 마무리 띠
  on-dark: "#ffffff"
  on-dark-mute: "rgba(255,255,255,0.72)"
  like: "#ef4b5f"           # 화면 속 채워진 하트 아이콘에만 사용
  focus: "#435ee5"

typography:
  fontFamily: "Pretendard, -apple-system, 'Apple SD Gothic Neo', 'Malgun Gothic', system-ui, sans-serif"
  display-xl: { size: 64px, weight: 700, lineHeight: 1.15, letterSpacing: -1.2px }   # 히어로 제목
  display-lg: { size: 44px, weight: 700, lineHeight: 1.2, letterSpacing: -0.8px }    # 섹션 제목
  heading-lg: { size: 22px, weight: 600, lineHeight: 1.3 }                           # 카드 제목
  heading-md: { size: 18px, weight: 600, lineHeight: 1.35 }
  body-md: { size: 16px, weight: 400, lineHeight: 1.6 }
  body-strong: { size: 16px, weight: 600, lineHeight: 1.5 }
  body-sm: { size: 14px, weight: 400, lineHeight: 1.5 }                              # 게시물 캡션, 푸터
  body-sm-strong: { size: 14px, weight: 700, lineHeight: 1.4 }                       # 게시물 계정 이름
  caption: { size: 12px, weight: 500, lineHeight: 1.5 }
  button-md: { size: 15px, weight: 700, lineHeight: 1 }

rounded:
  sm: 8px
  md: 16px
  lg: 32px
  full: 9999px

spacing:
  xxs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 96px

components:
  primary-nav:       { bg: canvas, height: 64px, border-bottom: "1px hairline", sticky: true }
  button-primary:    { bg: primary, text: on-primary, type: button-md, rounded: md, height: 48px, padding: "0 22px" }
  link-arrow:        { text: ink, type: body-strong, underline: "offset 4px" }
  label-chip:        { bg: primary-soft, text: primary, type: body-sm-strong, rounded: full, padding: "6px 14px" }
  post-card:         { bg: canvas, border: "1px hairline", rounded: md, padding: 0, image: "1:1 full-bleed" }
  post-header:       { avatar: "32px full", name: body-sm-strong, handle: "caption mute", padding: "12px 14px" }
  post-actions:      { icons: "24px stroke 1.8 ink", gap: 14px, padding: "10px 14px 4px", counts: none }
  profile-header:    { avatar: "88px full", name: heading-lg, handle: "body-sm mute", follow: "button-primary 모양, 비상호작용" }
  profile-grid:      { columns: 3, gap: 4px, cell: "1:1 surface-card", rounded: "0 (그리드 바깥만 md)" }
  feature-card:      { bg: canvas, rounded: md, padding: 28px, border: none }
  category-tile:     { bg: surface-card, rounded: md, image: "4:5 rounded md", label: body-strong }
  step:              { number: "40px full primary", title: heading-md }
  faq-row:           { border-bottom: "1px hairline", summary: body-strong 18px, padding: "20px 0" }
  closing-strip:     { bg: surface-dark, text: on-dark, rounded: lg, padding: "72px 32px" }
  footer:            { bg: canvas, text: "body-sm mute", border-top: "1px hairline", padding: "32px 24px" }
---

## 개요

기반: [Pinterest DESIGN.md](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/pinterest) (MIT). awesome-design-md에 Instagram 항목이 없어 가장 가까운 **사진 중심 SNS** 시스템을 골랐다. 가져온 것은 원칙과 수치이고, 브랜드 색·로고·서체는 가져오지 않았다(기획서 `BR-005`).

핵심 원칙 네 가지:

1. **화면이 주인공이다.** 바탕은 조용한 크림색(`surface-soft`)과 흰색이고, 눈에 띄는 것은 게시물 이미지뿐이다.
2. **강조색은 하나.** `primary` 보라는 주 CTA·로고·라벨 칩에만 쓴다. 한 화면 높이에 보라 버튼은 하나까지.
3. **모서리는 세 값.** 대부분 16px, 큰 띠 32px, 원형은 full. 각진 버튼·카드는 없다.
4. **그림자 대신 경계선.** 카드는 평평하게 두고 1px `hairline`으로 구분한다. 히어로 비주얼만 은은한 그림자 하나를 허용한다.

## 레이아웃

- 콘텐츠 최대 폭 1200px, 좌우 여백 데스크톱 24px / 모바일 16px.
- 섹션 간격 `section` 96px → 태블릿 72px → 모바일 56px.
- 섹션은 **텍스트 한쪽 + 화면 한쪽** 2열을 기본으로 하고, 좌우를 번갈아 배치한다(Pinterest 홈의 교차 배치). 768px 이하에서 텍스트 위, 화면 아래 1열.
- 피드 화면 열 폭은 최대 470px로 실제 SNS 피드 비율을 따른다.

## 게시물 이미지 (CSS로 그리기)

실제 스크린샷이 없으므로 게시물 이미지는 CSS로 그린다. 사진처럼 보이게 하려 하지 말고, 프로젝트별 **색 팔레트가 분명한 화면 조각**으로 만든다.

| 프로젝트 | 팔레트 | 그리는 방법 |
|---|---|---|
| 달빛 정원사 | 남색 `#1b1f4a` → 보라 `#3b2f6b`, 연두 `#9be37a`, 달빛 `#f4e9a8` | 8px 격자 픽셀 타일, 원형 달, 작은 식물 사각형 |
| 작은 타이머 | 진청록 `#0f2c29`, 민트 `#2dd4bf` | 원형 진행 링과 큰 숫자 |
| 레시피 메모 | 크림 `#fff4e2`, 토마토 `#f06b4f`, 올리브 `#7a8b3a` | 세로 반 나눈 전/후 목록 화면 |

영상 게시물은 이미지 위 오른쪽 위에 작은 재생 삼각형 표시만 둔다(재생 기능 없음).

## 아이콘

인라인 SVG, 24px, 선 두께 1.8, `currentColor`. 하트·말풍선·보내기·저장·재생·추가만 쓴다. 다른 서비스 아이콘 세트를 그대로 복제하지 않는다. 좋아요가 눌린 상태를 보여줄 때만 `like` 색으로 채운다.

## 접근성

- 본문 글자는 `mute` 이상 진하기만 쓴다(`ash`는 장식용).
- 포커스 링: 2px `focus` + 2px 오프셋.
- 화면 속 버튼 모양(팔로우, 하트)은 `span`/`div`로 만들고 포커스되지 않는다. 장식 도형은 `aria-hidden="true"`.
- `prefers-reduced-motion`이면 부드러운 스크롤을 끈다. 자동 재생·스크롤 애니메이션 없음.

## 하지 말 것

- Pinterest 빨강 `#e60023`, Instagram 그라디언트·로고·카메라 아이콘 사용
- 좋아요·팔로워·조회 숫자, 가짜 후기
- 카드 그림자 남발, 16px/32px 이외의 둥근 모서리
- 생성형 인포그래픽 이미지
