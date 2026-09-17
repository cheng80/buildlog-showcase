# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 이 저장소는 무엇인가

**빌드로그**(개발 과정을 공유하는 프로젝트 SNS)를 알리는 **홍보용 단일 랜딩 페이지**다. 서비스 자체(피드·게시·결제 등)는 여기서 만들지 않는다. 화면 속 피드·프로젝트 페이지는 전부 HTML/CSS로 그린 정적 목업이다. 문서 폴더(`docs/`)와 Next.js 프로젝트가 한 저장소에 있다. '프로젝트 쇼케이스'는 이 문서 묶음의 옛 이름일 뿐 서비스 이름이 아니며 화면에 쓰지 않는다. 로컬 폴더 이름은 `buildlog-showcase`다(2026-09-17 `buildlog`에서 변경). `buildlog`라는 이름은 앞으로 실제로 만들 서비스 프로젝트에 쓰기로 했으므로 이 홍보 사이트에 붙이지 않는다. GitHub 저장소(cheng80/buildlog-showcase)와 Vercel 프로젝트(buildlog-showcase)도 같은 이름이다.

## 명령

Node 24.x, npm. 테스트 프레임워크는 없다.

```bash
npm run dev        # http://localhost:3000 (Turbopack). AGENTS.md 끝에 Next 안내 블록을 자동으로 붙인다 — 지우지 말고 함께 커밋
npm run lint       # eslint .
npm run typecheck  # next typegen && tsc --noEmit
npm run build      # 운영 빌드. 출력에서 `/` 가 ○(정적)인지 확인
vercel             # Preview 배포 (팀 virtues1, 프로젝트 buildlog-showcase. .vercel/은 Git 제외)
vercel --prod      # 운영 수동 배포. 보통은 불필요: GitHub cheng80/buildlog-showcase가 연결되어 main push가 곧 운영 배포다
```

공개 주소: https://buildlog-showcase.vercel.app . `main`에 push하면 Vercel이 자동으로 운영 배포하므로 push 전에 `npm run build`가 통과하는지 확인한다.

배포 URL 중 `buildlog-showcase-virtues1.vercel.app`과 배포별 URL은 Vercel 로그인(SSO)으로 보호되니 확인은 공개 도메인 또는 `vercel curl <url>`로 한다.

브라우저 검증은 저장소에 스크립트가 없다. 세션 scratchpad에 `npm i playwright-core` 후 `chromium.launch({ channel: "chrome" })`으로 360·390·768·1440px 가로 넘침(`scrollWidth > clientWidth`), 모든 `a[href^="#"]` 대상 존재, 앵커 도착 시 제목이 고정 헤더 아래에 있는지, Tab 순서가 실제 링크와 FAQ만 거치는지, `details` Enter 동작을 확인한다. 결과는 `docs/03_PROJECT_STATUS.md` 9절에 `PASS / FAIL / INCOMPLETE / NOT_RUN`으로 기록하고, 실행하지 않은 검증을 통과로 쓰지 않는다.

## 읽기 순서와 정본

세션 재개 시 `HANDOFF.md` → `docs/03_PROJECT_STATUS.md`(현재 작업·다음 순서) → 필요 시 `docs/01_PRODUCT_SPEC.md`(구조·카피·규칙), `DESIGN.md`(디자인 토큰), `docs/02_TECH_SPEC.md`. 갱신 위치: 목적·범위·카피·예시 콘텐츠·화면 → `docs/01_PRODUCT_SPEC.md`, 색·서체·간격·컴포넌트 → `DESIGN.md`, 구현 방식·제약 → `docs/02_TECH_SPEC.md`, 진행·검증·다음 작업·인수인계 → `docs/03_PROJECT_STATUS.md`, 작업 절차 → `docs/04_WORKFLOW.md`. `AGENTS.md`는 Codex용 한 줄 포인터이며 `next dev`가 자동 블록을 덧붙인다. 서비스 개념의 근거는 `_workspace/chatgpt-project-idea-2026-09-16.md`(Git 제외, 사용자의 ChatGPT 기획 대화 추출본)이며, 문구를 바꾸기 전에 그 3층 구조(가볍게 올리기 / 프로젝트에 쌓이기 / 공식 카드로 피드 유지)를 확인한다.

## 코드 구조

Server Components만 쓴다. 클라이언트 JS·상태 관리·이미지 파일이 없다. FAQ는 `details`/`summary`.

- `app/wrap.ts` — 의미 단위 줄바꿈 `sw(text, maxChars)`. semantic-wrap(`@semantic-wrap/core`·`@semantic-wrap/ko`, ESM, Node 22+) 한국어 제목 모델을 빌드 시 서버에서만 돌려, 모델이 구 안쪽으로 본 공백을 NBSP로 바꾼다. 제목·리드·본문·FAQ·공식 카드 문구가 `page.tsx`에서 이 함수를 거치며, 짝이 되는 CSS는 `page.module.css`의 `text-wrap: balance` 묶음 규칙이다. 예산 상수(H1·H2·H3·LEAD·BODY)는 실제 글자 폭으로 시뮬레이션해 고른 값이니 바꾸려면 다시 재본다. 카피 표와 대조할 때 NBSP는 공백으로 본다. 모델이 어색하게 자르는 제목(현재 h1·올리기 제목·피드 제목)은 앞 구만 `sw()`에 넣고 뒤 구를 `.nowrap` span으로 손 지정한다.

- `app/site.ts` — `SERVICE`("빌드로그")와 `TAGLINE`. 서비스 이름은 여기서만 바꾼다. 바꾸면 `page.tsx`·`layout.tsx`의 조사(는/은)를 확인한다.
- `app/layout.tsx` — `lang="ko"`, Pretendard(jsDelivr CDN `<link>`), 메타데이터가 `site.ts`를 사용.
- `app/globals.css` — `DESIGN.md` 토큰을 CSS 변수로 옮긴 것. 색·간격·모서리를 바꾸려면 `DESIGN.md`를 먼저 고친다. `--header-h`가 `scroll-padding-top`으로 앵커 도착 위치를 보정한다(767px 이하 92px).
- `app/page.tsx` — 페이지 전체가 한 파일. 위에서 아래로: 예시 데이터 상수(프로젝트 3개·타임라인·카피 배열) → `Icon`(인라인 SVG 경로 사전) → `Shot`(프로젝트 `Kind`별로 CSS만으로 그린 앱 화면: timer/garden/recipe) → 목업 조각 `Avatar`·`Post`·`Official`·`Timeline`·`FrameBar`·`ProjectHead` → `Home`(헤더, 섹션 10개, 푸터). 섹션 ID는 `hero why post feed project features who start faq closing`이며 헤더·히어로·마무리·푸터 링크가 이 ID를 가리킨다.
- `app/page.module.css` — 섹션 순서대로 주석 구분. 레이아웃은 1.2(2026-09-18, 시안 C)부터 섹션마다 `.block` + `.white`/`.soft` 색 블록이고 `.main`이 폭 1248px(여백 포함)을 잡는다. 목업 클래스(`.post`, `.shot*`, `.frameBar`, `.timeline`)는 여러 섹션이 공유하므로 한 곳을 고치면 히어로·올리기·피드·프로젝트 섹션이 함께 바뀐다.
- `app/icon.svg` — 파비콘. `app/opengraph-image.png`(+`.alt.txt`) — 링크 공유 이미지. 둘 다 Next 파일 규칙으로 자동 연결. OG 소스는 `docs/og/og-source.html`이며 히어로 문구를 바꾸면 그 파일도 고치고 Playwright(1200×630)로 다시 스크린샷해 PNG를 교체한다.

## 이 저장소만의 규칙 (기획서 7절 BR-001~008)

- 이미 운영 중인 프로덕트처럼 현재형으로 쓴다. '개발 예정·콘셉트·준비 중', 개발 기간·일정 표현 금지.
- 사용자 수, 좋아요·팔로워·조회 숫자, 후기, 가격·'무료', 수상 등 확인되지 않은 사실을 만들지 않는다. 화면 속 예시임은 각 목업 아래 `figcaption` 캡션으로만 알린다.
- 실제로 동작하는 요소는 앵커 링크와 FAQ뿐이다. 목업 속 버튼·아이콘·칩·탭은 `span`/`div`로 만들고 `button`·`a`·`tabindex`를 쓰지 않는다. 장식 도형은 `aria-hidden`, 이미지 대체 설명은 `.srOnly`.
- 가입·로그인·다운로드·외부 채널 링크는 실제 주소가 생기기 전까지 두지 않는다. `#`만 가진 링크 금지.
- 다른 서비스의 이름·로고·고유 색·아이콘을 쓰지 않고 문구에서 비교하지 않는다(인스타그램·Product Hunt 등). 디자인은 awesome-design-md Pinterest 기반이지만 색은 자체 코발트 파랑 `#1e4fd8`(처음의 보라는 사용자 지시로 폐기, 다시 쓰지 않는다).
- 시각 자료는 HTML/CSS와 인라인 SVG로만 만든다. 생성형 인포그래픽·이미지 생성 파이프라인은 폐기됐으니 되살리지 않는다.
- 카피를 바꾸면 "첫 화면만 보고 무슨 서비스인지 한 문장으로 말할 수 있나"를 다시 확인한다. 추상어(기록·이야기·발견)보다 구체어(게시물·스크린샷·피드·프로젝트 페이지·유튜브 링크).
- `docs/01_PRODUCT_SPEC.md` 4절 카피 표는 `page.tsx`와 글자 단위로 같아야 한다. 한쪽을 바꾸면 다른 쪽도 바꾼다.

## 작업 방식

- 사용자에게 묻는 질문과 선택지는 한글로만 쓴다. 이 사용자는 긴 질문 도구보다 본문에 짧게 묻는 쪽에 답한다.
- Git: `main` 브랜치, 원격 `origin` = https://github.com/cheng80/buildlog-showcase.git. 커밋과 push는 사용자가 요청할 때만 하며 메시지는 한국어로 쓴다.
- 작업을 멈출 때 `HANDOFF.md`와 `docs/03_PROJECT_STATUS.md`의 '다음 순서'를 갱신한다.
