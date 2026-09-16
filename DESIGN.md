---
version: 1.1
name: buildlog-design
description: |
  사진 중심 SNS 홍보 페이지용 디자인 시스템. awesome-design-md의 Pinterest DESIGN.md
  (VoltAgent/awesome-design-md, MIT)를 기반으로 구조·간격·모서리·타이포 규칙을 가져오고,
  브랜드 색은 빌드로그 고유 색으로 바꿨다. 크림색 바탕이 화면(게시물 이미지)을
  돋보이게 하고, 강조색 하나가 주요 행동만 표시한다.

colors:
  primary: "#1e4fd8"        # 빌드로그 파랑(코발트). 주 CTA, 로고, 활성 탭 표시에만 사용
  on-primary: "#ffffff"
  primary-pressed: "#173fb0"
  primary-soft: "#e7edfc"   # 라벨 칩, 선택 배경
  primary-mute: "#3f5aa8"   # primary-soft 배경 위 보조 글자(날짜 등). 색 배경 위에 회색 mute를 쓰지 않는다
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
  focus: "#1e4fd8"          # primary와 같은 값. 2px 오프셋 덕에 파란 버튼 위에서도 보인다
  shadow-mock: "14px 20px 28px -12px rgba(17,17,17,0.32), 6px 8px 12px -6px rgba(17,17,17,0.16), 1px 1px 2px rgba(17,17,17,0.1)"   # 앱 화면 목업 프레임 전용. 진하되 흐림은 작게, 빛은 왼쪽 위에서 와서 오른쪽 아래로 진다(사용자 지시)

typography:
  fontFamily: "Pretendard, -apple-system, 'Apple SD Gothic Neo', 'Malgun Gothic', system-ui, sans-serif"
  display-xl: { size: 52px, weight: 800, lineHeight: 1.3, letterSpacing: -0.02em }   # 히어로 제목. 모바일 최소 35px(clamp)
  display-lg: { size: 40px, weight: 800, lineHeight: 1.35, letterSpacing: -0.02em }  # 섹션 제목. 모바일 최소 26px(clamp)
  heading-lg: { size: 22px, weight: 700, lineHeight: 1.3 }                           # 프로젝트 이름
  heading-md: { size: 18px, weight: 700, lineHeight: 1.35 }                          # 소제목(h3), FAQ 질문, 리드 문단
  body-md: { size: 16px, weight: 400, lineHeight: 1.6 }
  body-strong: { size: 16px, weight: 600, lineHeight: 1.5 }
  body-sm: { size: 14px, weight: 400, lineHeight: 1.5 }                              # 게시물 캡션, 푸터
  body-sm-strong: { size: 14px, weight: 700, lineHeight: 1.4 }                       # 게시물 계정 이름
  caption: { size: 12px, weight: 500, lineHeight: 1.5 }
  button-md: { size: 15px, weight: 700, lineHeight: 1 }

rounded:
  xs: 6px       # 목업 안 작은 조각(HUD, 시간 표시, 로고 마크), 포커스 링
  sm: 12px      # 내비 항목, 타임라인 행, 작은 화면 조각, 프레임 안의 게시물
  md: 16px      # 카드, 게시물, 버튼
  lg: 32px      # 히어로·피드·프로젝트 프레임, 마무리 띠
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
  primary-nav:       { bg: surface-soft, height: 64px, border-bottom: "1px hairline", sticky: true, blur: none }
  button-primary:    { bg: primary, text: on-primary, type: button-md, rounded: md, height: 48px, padding: "0 22px" }
  link-arrow:        { text: ink, type: body-strong, underline: "offset 4px" }
  label-chip:        { bg: primary-soft, text: primary, type: body-sm-strong, rounded: full, padding: "6px 14px" }
  post-card:         { bg: canvas, border: "1px hairline", rounded: md, padding: 0, image: "1:1 full-bleed" }
  post-header:       { avatar: "32px full", name: body-sm-strong, handle: "caption mute", padding: "12px 14px" }
  post-actions:      { icons: "24px stroke 1.8 ink", gap: 14px, padding: "10px 14px 4px", counts: none }
  profile-header:    { avatar: "88px full", name: heading-lg, handle: "body-sm mute", follow: "button-primary 모양, 비상호작용" }
  profile-grid:      { columns: 3, gap: 4px, cell: "1:1 surface-card", rounded: "0 (그리드 바깥만 md)" }
  feature-row:       { icon: "24px primary, 제목 왼쪽", title: heading-md, body: "body-md mute", card: none, columns: 2 }
  who-row:           { border-top: "1px hairline", title: heading-md, body: "body-md mute", card: none, columns: 3 }
  why-card:          { bg: canvas, border: "1px hairline", rounded: md, padding: 28px }   # 문제/답 대비가 있는 유일한 카드 그리드
  category-tile:     { bg: surface-card, rounded: md, image: "4:5 rounded md", label: body-strong }
  step:              { number: "40px full primary, 제목 왼쪽", title: heading-md, card: none }
  example-caption:   { text: "primary body-sm 600", border: "1px dashed primary", rounded: full, padding: "4px 14px", align: center }   # 목업 아래 '예시입니다' 안내. 목업 안 칩·탭과 구분되도록 점선
  faq-row:           { border-bottom: "1px hairline", summary: body-strong 18px, padding: "20px 0" }
  closing-strip:     { bg: surface-dark, text: on-dark, rounded: lg, padding: "72px 32px" }
  footer:            { bg: canvas, text: "body-sm mute", border-top: "1px hairline", padding: "32px 24px" }
---

## 개요

기반: [Pinterest DESIGN.md](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/pinterest) (MIT). awesome-design-md에 Instagram 항목이 없어 가장 가까운 **사진 중심 SNS** 시스템을 골랐다. 가져온 것은 원칙과 수치이고, 브랜드 색·로고·서체는 가져오지 않았다(기획서 `BR-005`).

핵심 원칙 다섯 가지:

1. **화면이 주인공이다.** 바탕은 조용한 크림색(`surface-soft`)과 흰색이고, 눈에 띄는 것은 게시물 이미지뿐이다.
2. **강조색은 하나.** `primary` 파랑은 주 CTA·로고·라벨 칩에만 쓴다. 한 화면 높이에 파란 버튼은 하나까지. 처음 쓰던 보라 `#5b3df5`는 사용자 지시로 걷어냈다(2026-09-16). 코발트 파랑을 고른 이유는 목업 세 화면의 색(민트·연두·노랑·토마토·올리브)과 겹치지 않는 유일한 색상군이라 사이트 요소와 화면 캡처가 섞이지 않기 때문이다.
3. **모서리는 토큰 값만.** 대부분 16px, 큰 프레임과 띠 32px, 앱 화면 안의 작은 조각 12px·6px, 원형은 full. 각진 버튼·카드는 없다.
4. **페이지 내용은 평평하게, 화면 캡처는 떠 있게.** 설명 카드·목록·FAQ는 그림자 없이 1px `hairline`으로만 구분한다. 반대로 앱 화면 목업 프레임(히어로의 피드 창·프로젝트 창, 올리기 입력창과 게시물, 피드 창, 프로젝트 창)은 실제로 누를 수 없는 '화면 캡처'이므로 `shadow-mock` 그림자로 띄워 페이지 내용과 깊이를 다르게 한다. 프레임의 1px 테두리는 그대로 두며, 이 겹침은 의도된 것이다(사용자 지시 2026-09-16). 프레임 안의 게시물·타일에는 그림자를 주지 않는다.
5. **카드는 구조가 아니다.** 아이콘·제목·본문 카드 3열을 섹션마다 반복하지 않는다. 기능은 아이콘을 왼쪽에 둔 2열 목록, 누구에게는 1px 윗줄, 시작하기는 번호 + 텍스트로 쓰고, 카드는 왜 섹션처럼 문제/답 대비가 있을 때만 쓴다.

2026-09-16에 Impeccable(impeccable.style) 스킬의 탐지 규칙과 craft-floor로 점검해 카드 반복, 아이콘 타일, 카드 한쪽 색 테두리, 유리 헤더, 색 배경 위 회색 글자를 없앴다. 목업 안의 달 glow·픽셀 격자·민트-온-다크와 목업 프레임의 테두리+그림자는 앱 화면 묘사와 깊이 구분에 필요하므로 탐지 대상이어도 유지한다.

## 레이아웃

- 콘텐츠 최대 폭 1200px, 좌우 여백 데스크톱 24px / 모바일 16px.
- 히어로: 상단 여백 48px(모바일 32px), 제목 최대 52px, 목업은 버튼 아래 40px(모바일 32px). 1440×900과 390×844 첫 화면에 히어로 목업의 첫 게시물 화면이 보여야 한다.
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

## 타이포 규칙

- 글자 크기는 램프(12·14·16·18·22·40·52px)만 쓴다. 0.85rem·0.95rem 같은 중간값을 만들지 않는다.
- 한글 제목 행간은 1.3 이상(h1 1.3, h2 1.35). 자간은 -0.02em까지만 줄인다.
- 800 굵기는 로고·h1·h2에만 쓴다. 나머지 강조는 700.
- 숫자가 세로로 정렬되는 곳(타임라인 날짜, 타이머 숫자)은 `tabular-nums`.

## 아이콘

인라인 SVG, 24px, 선 두께 1.8, `currentColor`. 하트·말풍선·보내기·저장·재생·추가만 쓴다. 다른 서비스 아이콘 세트를 그대로 복제하지 않는다. 좋아요가 눌린 상태를 보여줄 때만 `like` 색으로 채운다.

## 접근성

- 본문 글자는 `mute` 이상 진하기만 쓴다(`ash`는 장식용).
- 포커스 링: 2px `focus` + 2px 오프셋.
- 링크·버튼의 색 변화는 150ms ease-out 전환 하나. `::selection`은 `primary-soft` 배경 + `ink` 글자.
- 목업마다 붙는 "화면 속 게시물은 예시입니다" 캡션은 `example-caption`(primary 글자 + 점선 알약)으로 눈에 띄게 둔다. 회색 작은 글자로 숨기지 않는다(사용자 지시 2026-09-16).
- 화면 속 버튼 모양(팔로우, 하트)은 `span`/`div`로 만들고 포커스되지 않는다. 장식 도형은 `aria-hidden="true"`.
- `prefers-reduced-motion`이면 부드러운 스크롤을 끈다. 자동 재생·스크롤 애니메이션 없음.

## 하지 말 것

- Pinterest 빨강 `#e60023`, Instagram 그라디언트·로고·카메라 아이콘 사용
- 좋아요·팔로워·조회 숫자, 가짜 후기
- 페이지 카드·목록에 그림자(그림자는 목업 프레임 전용), 토큰(6/12/16/32/full) 밖의 모서리 값
- 아이콘·제목·본문 카드 3열의 섹션 반복, 아이콘을 둥근 사각 타일에 담기, 카드 한쪽의 두꺼운 색 테두리
- 색 배경(`primary-soft`) 위 회색 `mute` 글자, 헤더 blur·반투명 유리 효과
- 생성형 인포그래픽 이미지
