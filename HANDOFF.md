# 핸드오프 · 빌드로그 소개 사이트

> 마지막 갱신: 2026-09-17 · 다음 세션에서 **"핸드오프 읽고 진행하자"**라고 하면 이 문서부터 읽고 바로 이어서 진행한다.

## 1. 한눈에 보기

| 항목 | 내용 |
|---|---|
| 서비스 이름 | **빌드로그** (사용자 결정, `app/site.ts`의 `SERVICE`) |
| 작업 폴더 | 이 저장소 `buildlog-showcase/` (Next.js 프로젝트 + 기획 문서). 2026-09-17에 `buildlog/`에서 이름을 바꿨다: `buildlog`는 앞으로 실제로 만들 서비스 프로젝트에 쓰고, 이 저장소는 그 서비스를 홍보하는 사이트다. 같은 날 GitHub 저장소(cheng80/buildlog-showcase)와 Vercel 프로젝트(buildlog-showcase)도 같은 이름으로 바꿨다. 이 파일은 저장소 루트에 있다 |
| 현재 단계 | **v2.4(semantic-wrap 의미 단위 줄바꿈) 커밋·push 완료, 운영 자동 배포** |
| 바로 할 일 | 운영 URL에서 v2.4 줄바꿈 확인 → 판단 항목 4개 결정(`docs/03` 6절). 문구를 바꾸면 `docs/og/og-source.html`도 맞추고 OG PNG 재렌더링 |
| 공개 URL | **https://buildlog-showcase.vercel.app** (운영, 공개). `buildlog-showcase-virtues1.vercel.app`은 SSO 보호 |
| 정본 문서 | `CLAUDE.md`(작업 지침), `docs/01_PRODUCT_SPEC.md` v2.1(구조·카피·규칙), `DESIGN.md`(디자인 토큰), `docs/02_TECH_SPEC.md`, `docs/03_PROJECT_STATUS.md`(진행·검증) |
| 서비스 개념 근거 | `_workspace/chatgpt-project-idea-2026-09-16.md` (ChatGPT 기획 대화 전체 추출본, Git 제외) |

## 2. 서비스가 무엇인가 (3층)

```text
개발자 → 프로젝트(상시 페이지) → 게시물(스크린샷/GIF/유튜브 URL/GitHub URL + 한 줄)
게시물 하나 → 피드(발견) + 프로젝트 타임라인(기록, 올릴 때마다 재노출)
피드 = 사용자 게시물 + 공식 카드(오늘의 만들기 주제·개발 팁·이번 주 프로젝트) → 사용자가 적어도 안 비어 보임
```

인스타그램은 참고 UX일 뿐이다. 문구에 다른 서비스 이름을 쓰지 않는다. 좋아요·팔로우·결제·지도는 부속.

## 3. 오늘 있었던 방향 전환

1. v1.x 구현 → 사용자: "사이트 내용만 봐서는 무슨 사이트 홍보인지 전혀 모르겠다. 심각해."
2. 사용자: 인포그래픽 폐기, 인스타그램형 인디개발 홍보 사이트 부각, 내용 전면 재검토, awesome-design-md에서 디자인 적용, 질문은 한글로만.
3. v2.0 기획(인스타그램 클론에 가까움) → 사용자: "피드형 SNS 구조가 맞을까? 구조가 머릿속에 안 그려진다. ChatGPT 대화 다시 검토하자."
4. 대화 전체 추출·검토 → 3층 구조 제시 → 사용자 "맞음. 화면 자체는 안 그려짐. 제목은 서비스 이름이어야. 보는 사람이 직관적으로 알아야."
5. 화면을 직접 HTML/CSS로 만들어 localhost:3000에서 보여줌 → 이름 **빌드로그** 결정 → 커밋(7fb821f).
6. 사용자 "아직 미완성 같아 보인다" → v2.2: 히어로 재배치(제목 가운데 + 피드 창·프로젝트 창 나란히), 앱 UI 목업 사실감(타이머 버튼, 픽셀 정원, 레시피 검색), 섹션 추가(`#why` `#features` `#who`), 푸터 보강, 파비콘 `app/icon.svg`. 커밋 완료.
7. 사용자 "impeccable.style 스킬 규칙을 우리 디자인에 적용할 부분 검토" → 규칙 61개 + craft-floor 수동 대조 → "권장안 모두 적용" → v2.3: 카드 4연속 해체(기능·누구에게·시작하기), 히어로 첫 화면 개선, 한글 제목 행간, 색 배경 위 회색 글자, 전환 150ms, 헤더 blur 제거, 글자 크기·모서리·굵기 토큰 정리, `DESIGN.md` 1.1. 미커밋. 판단 항목 4개는 손대지 않음.
8. 사용자 "예시 이미지가 누를 수 없는데 페이지와 깊이가 같아 경계가 흐리다. 프레임에 그림자를" → 목업 프레임 6종에만 `--shadow-mock`. 규칙: 페이지 내용은 평평, 화면 캡처는 떠 있음. 린트가 테두리+그림자 겹침을 잡아도 목업 프레임은 유지. 이후 "아직 약하다" → 진하게, "흐림 강도를 약하게" → blur 작게(진하고 또렷한 그림자 선호), "우측 하단으로 향하는 게 더 명확" → x 오프셋 14/6/1px 추가.
9. 사용자 "'화면 속 게시물은 예시입니다' 캡션이 눈에 안 띈다. 색이 다르거나 박스" → `.caption`을 primary 글자 + 점선 알약 박스로. `DESIGN.md` `example-caption`.
10. 사용자 "보라색은 걷어 내자. 다른 색 추천" → 코발트 파랑 `#1e4fd8`(추천)·잉크 블랙·번트 오렌지 3안 제시, 파랑을 개발 서버에 미리보기 → "커밋/푸시"로 파랑 확정. 파비콘·OG 이미지 재렌더·문서 동기화 후 커밋·push(12701b7).
11. 사용자 "semantic-wrap 설치 후 모든 화면 텍스트 검사", "필요시 폭도 조절" → `app/wrap.ts`(빌드 시 서버에서 모델 실행, NBSP 삽입, 클라이언트 JS 0) + `text-wrap: balance`. 외톨이 어절 45→0. 폭은 시뮬레이션상 이득이 없어 그대로. 피드 제목은 사용자 지적으로 손 지정. 커밋·push.

## 4. 다음 순서

1. ~~사용자가 v2.3을 보고 판정~~ → 그림자·캡션·색 피드백 반영 후 커밋·push 완료. 운영 URL에서 최종 확인.
2. 판단 항목 결정: 히어로 태그라인 칩 제거? 섹션 위 라벨(올리기/피드/프로젝트 페이지) 제거? 피드 목업을 카드 대신 구분선으로? 타이머 민트 `#2dd4bf` 교체?
3. ~~커밋·push~~ 완료(2026-09-16).

이전:
1. ~~사용자가 localhost:3000 v2.2를 보고 판정.~~
2. ~~커밋~~ 완료(2026-09-16).
3. ~~파비콘·OG 이미지·Vercel 배포~~ 완료. OG 재생성 방법은 `docs/og/og-source.html` 머리말 주석.

## 5. 유지할 규칙

- 이미 운영 중인 프로덕트 톤, 현재형. '개발 예정·콘셉트·준비 중' 금지.
- 사용자 수·반응 숫자·후기·가격·무료·가짜 링크 금지. 예시는 화면 아래 작은 캡션으로만.
- 다른 회사 이름·로고·고유 색 금지. 문구에서 다른 서비스와 비교 금지.
- 시각 자료는 HTML/CSS + 인라인 SVG. 생성형 인포그래픽 금지.
- 추상어(기록·이야기·발견)보다 구체어(게시물·스크린샷·피드·프로젝트 페이지·유튜브 링크).
- 카피를 바꾸면 "첫 화면만 보고 무슨 서비스인지 한 문장으로 말할 수 있나" 재확인.
- 사용자에게 묻는 질문은 한글로만. `AskUserQuestion`은 세 번 거부됐으니 본문에 짧게 묻는 편이 낫다.
- `DESIGN.md` 1.1 규칙: 아이콘·제목·본문 카드 3열을 섹션마다 반복하지 않는다, 페이지 카드는 평평하고 앱 화면 목업 프레임만 그림자로 띄운다, 색 배경 위 회색 글자 금지, 글자 크기는 램프(12/14/16/18/22/40/52px)만, 모서리는 토큰(6/12/16/32/full)만, 800 굵기는 로고·h1·h2만.

## 6. 파일 상태

| 경로 | 상태 |
|---|---|
| `app/site.ts` `app/layout.tsx` | v2.1 커밋됨 |
| `app/page.tsx` `app/page.module.css` `app/globals.css` `app/icon.svg` `app/opengraph-image.png` `docs/og/og-source.html` `DESIGN.md` `CLAUDE.md` `docs/01~03` `HANDOFF.md` | v2.3. 커밋됨 |
| `app/icon.svg`(신규) `app/favicon.ico`(삭제) | v2.2 보강. 커밋됨 |
| `docs/01~03` | v2.2 갱신. 커밋됨 |
| `docs/04`, `docs/README.md`, `AGENTS.md` | v2.1. 커밋됨 |
| `public/infographics/`, `scripts/` | 삭제 커밋됨 |
| `_workspace/` | ChatGPT 대화 추출본, 이전 윤문 기록. Git 제외 |
| `app/wrap.ts`(신규) `app/page.tsx` `app/page.module.css` `package.json` `package-lock.json` `CLAUDE.md` `docs/02~03` `HANDOFF.md` | v2.4 semantic-wrap. 커밋됨 |
| Git | `origin` = https://github.com/cheng80/buildlog-showcase.git (push 완료). 마지막 커밋: v2.4 semantic-wrap 의미 단위 줄바꿈 (2026-09-16). `HANDOFF.md`는 저장소 루트로 옮김(2026-09-16) |

## 7. 환경 메모

- 개발 서버 `npm run dev` → http://localhost:3000 (세션마다 다시 실행. v2.3 검증은 `npx next start -p 3011`로 빌드 결과를 띄워서 했다).
- 검증 스크립트: 세션 scratchpad의 `check.mjs`(playwright-core, `channel: "chrome"`)로 360·390·768·1440px·앵커·Tab·FAQ 확인. 새 세션에서는 scratchpad에 `npm i playwright-core` 후 재작성 필요.
- `next dev`가 `AGENTS.md` 끝에 안내 블록을 자동으로 붙임. 지우지 말고 함께 커밋.
- 디자인 기반: awesome-design-md의 Pinterest DESIGN.md(MIT). Instagram 항목 없음. 강조색은 자체 코발트 파랑 `#1e4fd8`(보라 폐기, 2026-09-16).
- Vercel: 팀 `virtues1`, 프로젝트 `buildlog-showcase`(2026-09-17 `buildlog`에서 이름 변경. 첫 배포는 2026-09-16, 운영으로 들어감). 운영 도메인 https://buildlog-showcase.vercel.app (공개). 별칭 https://buildlog-showcase-virtues1.vercel.app 와 배포별 URL은 302 → SSO(`vercel curl <url>`로 확인). `.vercel/`은 Git 제외, `projectName`은 buildlog-showcase. CLI 전역 설치됨(`vercel` 59.x). GitHub 연동: cheng80/buildlog-showcase, `main` push → 운영 자동 배포(별칭 buildlog-showcase-git-main-virtues1.vercel.app), 다른 브랜치 push → Preview. 옛 도메인 buildlog-opal.vercel.app 과 buildlog 이름의 별칭은 2026-09-17 제거.
