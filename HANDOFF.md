# 핸드오프 · 빌드로그 소개 사이트

> 마지막 갱신: 2026-09-16 · 다음 세션에서 **"핸드오프 읽고 진행하자"**라고 하면 이 문서부터 읽고 바로 이어서 진행한다.

## 1. 한눈에 보기

| 항목 | 내용 |
|---|---|
| 서비스 이름 | **빌드로그** (사용자 결정, `app/site.ts`의 `SERVICE`) |
| 작업 폴더 | 이 저장소 `buildlog/` (Next.js 프로젝트 + 기획 문서). 이 파일은 저장소 루트에 있다 |
| 현재 단계 | **v2.2 보강 커밋 완료, 사용자 화면 확인 대기** |
| 바로 할 일 | `layout.tsx`에 `metadataBase`(공개 주소)와 OG 공유 이미지 추가 → push(자동 배포) |
| 공개 URL | **https://buildlog-opal.vercel.app** (운영, 공개). `buildlog-virtues1.vercel.app`은 SSO 보호 |
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

## 4. 다음 순서

1. 사용자가 localhost:3000 v2.2를 보고 판정. 수정 요청은 섹션 단위로 반영.
2. ~~커밋~~ 완료(2026-09-16).
3. favicon·공유 이미지 준비 → Vercel Preview → 공개 URL 재검증 → `03_PROJECT_STATUS.md` 9절.

## 5. 유지할 규칙

- 이미 운영 중인 프로덕트 톤, 현재형. '개발 예정·콘셉트·준비 중' 금지.
- 사용자 수·반응 숫자·후기·가격·무료·가짜 링크 금지. 예시는 화면 아래 작은 캡션으로만.
- 다른 회사 이름·로고·고유 색 금지. 문구에서 다른 서비스와 비교 금지.
- 시각 자료는 HTML/CSS + 인라인 SVG. 생성형 인포그래픽 금지.
- 추상어(기록·이야기·발견)보다 구체어(게시물·스크린샷·피드·프로젝트 페이지·유튜브 링크).
- 카피를 바꾸면 "첫 화면만 보고 무슨 서비스인지 한 문장으로 말할 수 있나" 재확인.
- 사용자에게 묻는 질문은 한글로만. `AskUserQuestion`은 세 번 거부됐으니 본문에 짧게 묻는 편이 낫다.

## 6. 파일 상태

| 경로 | 상태 |
|---|---|
| `app/site.ts` `app/layout.tsx` `app/globals.css` | v2.1 커밋됨 |
| `app/page.tsx` `app/page.module.css` `app/icon.svg`(신규) `app/favicon.ico`(삭제) | v2.2 보강. 커밋됨 |
| `docs/01~03` | v2.2 갱신. 커밋됨 |
| `docs/04`, `docs/README.md`, `DESIGN.md`, `AGENTS.md` | v2.1. 커밋됨 |
| `public/infographics/`, `scripts/` | 삭제 커밋됨 |
| `_workspace/` | ChatGPT 대화 추출본, 이전 윤문 기록. Git 제외 |
| Git | `origin` = https://github.com/cheng80/buildlog.git (push 완료). 마지막 커밋: v2.2 보강 (2026-09-16). `HANDOFF.md`는 저장소 루트로 옮김(2026-09-16) |

## 7. 환경 메모

- 개발 서버 `npm run dev` → http://localhost:3000 (이번 세션에서 백그라운드 실행 중. 새 세션은 다시 실행).
- 검증 스크립트: 세션 scratchpad의 `check.mjs`(playwright-core, `channel: "chrome"`)로 360·390·768·1440px·앵커·Tab·FAQ 확인. 새 세션에서는 scratchpad에 `npm i playwright-core` 후 재작성 필요.
- `next dev`가 `AGENTS.md` 끝에 안내 블록을 자동으로 붙임. 지우지 말고 함께 커밋.
- 디자인 기반: awesome-design-md의 Pinterest DESIGN.md(MIT). Instagram 항목 없음. 강조색은 자체 보라 `#5b3df5`.
- Vercel: 팀 `virtues1`, 프로젝트 `buildlog`(첫 배포가 운영으로 들어감, 2026-09-16). 별칭 https://buildlog-virtues1.vercel.app . `.vercel/`은 Git 제외. CLI 전역 설치됨(`vercel` 59.x). Deployment Protection 기본값 유지: 운영 도메인 https://buildlog-opal.vercel.app 은 공개, 나머지 별칭·배포 URL은 302 → SSO(`vercel curl <url>`로 확인). GitHub 연동 완료: `main` push → 운영 자동 배포(별칭 buildlog-git-main-virtues1.vercel.app), 다른 브랜치 push → Preview. CLI 수동 배포(`vercel`, `vercel --prod`)도 가능.
