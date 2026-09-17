# 빌드로그 소개 사이트 프로젝트 현황

> 갱신일: 2026-09-16 · 문서 리비전: 2.3

## 1. 로드맵

- [x] 단계 1 — 서비스 구조 확인(ChatGPT 대화 재검토), 기획 v2.1, `DESIGN.md`
- [x] 단계 2 — 소개 페이지 v2.1 구현 (HTML/CSS 화면)
- [x] 단계 3 — 로컬 검증 (lint·typecheck·반응형·앵커·키보드·FAQ)
- [x] 단계 4 — 커밋 → GitHub push → Vercel 첫 배포(운영) → 공개 URL https://buildlog-opal.vercel.app 확인

## 2. 진행 중인 계획

별도 `PLAN` 없음.

## 3. 현재 작업

**v2.4: semantic-wrap으로 화면의 모든 텍스트 줄바꿈 검사·적용, 커밋·push.** 사용자 지시 "https://semantic-wrap.woohyunpark.xyz/ko 설치 후 모든 화면상의 텍스트를 검사 후", "필요시 폭도 조절". 라이브러리의 React 통합은 브라우저에서 측정해 `<br>`을 넣는 방식이라 클라이언트 JS 없음 원칙과 맞지 않아, core+ko 모델을 빌드 시 서버에서만 돌리는 `app/wrap.ts`를 만들었다. 모델이 구 안쪽으로 본 공백(penalty 1)을 NBSP로 바꾸고, 문장 끝 뒤는 항상 나뉘게 두며, 구가 예산을 넘으면 머리말(오른쪽)부터 묶는다. 짝으로 리드·본문·FAQ·h3에 `text-wrap: balance`. 검사 방법: Playwright로 4개 뷰포트의 텍스트 87개(348건)의 실제 줄바꿈·서체·글자 폭을 수집해 모델의 선택과 비교하고, 예산 조합은 greedy+balance 시뮬레이션으로 골랐다. 결과: 마지막 줄이 어절 하나인 외톨이 45건 → 0건(올리기 입력창의 URL 줄 4건은 의도된 줄바꿈), 모델과 같은 줄바꿈 261 → 310건, 총 줄 수 502 → 505(360px의 FAQ 답 2개·마무리 문단이 한 줄씩 늘었고 구 단위로 고르게 나뉨). 폭 조절은 시뮬레이션상 이득이 없어 하지 않았다. 알려진 한계: 예산을 넘는 구를 자를 때 언어 정보가 없어 어색한 자리가 남을 수 있다. 사용자 지적으로 피드 제목은 "만들어지는 중인 | 프로젝트를 봅니다"가 되도록 h1처럼 손 지정(앞 구 `sw()` + 뒤 구 `.nowrap`).

**v2.3: Impeccable(impeccable.style) 스킬의 디자인 규칙을 대조해 권장안을 모두 적용하고, 사용자 피드백(목업 그림자·예시 캡션·파랑 전환)까지 반영해 커밋·push.** 사용자가 "권장안 모두 적용"을 지시했다. 적용한 것: 기능·누구에게·시작하기 섹션의 카드 제거(기능은 아이콘 왼쪽 2열 목록, 누구에게는 1px 윗줄, 시작하기는 번호+텍스트), 히어로 접힘선 개선(h1 최대 52px, 상단 48px, 목업 위 40px, 그림자 제거), 한글 제목 행간 1.3/1.35·자간 -0.02em, 타임라인 현재 행 날짜를 `--primary-mute`로, 링크 색 전환 150ms, `::selection`, 날짜 `tabular-nums`, 헤더 blur 제거, 글자 크기 램프(12/14/16/18/22px)·모서리 토큰(`--r-xs` 6 / `--r-sm` 12)·굵기(800은 로고·h1·h2만) 정리. `DESIGN.md` 1.1로 동기화. 판단 항목으로 남겨 손대지 않은 것: 히어로 태그라인 칩, 섹션 위 라벨(올리기/피드/프로젝트 페이지), 피드 목업의 카드 안 카드, 타이머 민트색 `#2dd4bf`.

사용자 피드백(v2.3 확인 중): "설명 페이지와 예시 이미지의 경계가 명확하지 않다. 예시는 누를 수 없는데 시각적 깊이가 같다. 프레임에 그림자를 주자." → 목업 프레임 6종(히어로 피드 창·프로젝트 창, 올리기 입력창·게시물, 피드 창, 프로젝트 창)에 `--shadow-mock` 적용. 페이지 카드는 평평하게 유지. `DESIGN.md` 원칙 4를 "페이지 내용은 평평하게, 화면 캡처는 떠 있게"로 고침. 히어로 그림자 제거는 이 규칙으로 되돌린 셈이다. 이어서 "아직 약하다" → 농도를 올리고 세 겹으로, "흐림 강도를 약하게" → blur를 28/12/2px로 줄이고, "우측 하단으로 향하는 게 더 명확" → x 오프셋 14/6/1px을 더해 오른쪽 아래로 지는 그림자로 확정(`--shadow-mock` 현재 값은 `globals.css`·`DESIGN.md`). "화면 속 게시물은 예시입니다 캡션이 눈에 안 띈다. 색이 다르거나 박스" → `.caption`을 보라 글자 + 1px 점선 알약 박스로(`DESIGN.md` `example-caption`). 피드·프로젝트 프레임 안의 캡션은 padding-bottom을 margin-bottom으로 바꿔 박스 크기가 안 늘어나게 함. "보라색은 걷어 내자. 다른 색 추천" → 코발트 파랑 `#1e4fd8`(pressed `#173fb0`, soft `#e7edfc`, mute `#3f5aa8`, focus = primary)로 확정. 파비콘 `icon.svg`, OG 소스·PNG 재렌더, `DESIGN.md`·`CLAUDE.md`·`docs/01`·`docs/02` 동기화.

이전(v2.2): v2.1 커밋 뒤 사용자가 "아직 미완성 같아 보인다"고 해서 v2.2로 보강, 커밋 완료. 히어로 재배치, 앱 UI 목업 사실감 보강, 왜·기능·누구에게 섹션 추가, 푸터 보강, 파비콘. lint·typecheck·360~1440px·앵커·Tab·FAQ 재확인. 서비스 이름은 사용자가 **빌드로그**로 정했고 `app/site.ts` 한 곳에서 관리한다.

오늘의 흐름: v1.x 구현 → 사용자 "무슨 사이트 홍보인지 모르겠다" → 인포그래픽 폐기·인스타그램형 부각 요청 → v2.0 기획 → 사용자 "피드형 SNS 구조가 맞나? 구조가 안 그려진다" → ChatGPT 기획 대화 전체를 추출해 검토 → 3층 구조 확인(사용자 "맞음") → 화면을 직접 만들어 보여주기로 하고 v2.1 구현 → 이름 결정.

## 4. 완료

- ChatGPT 기획 대화 46개 메시지 추출·검토 (`_workspace/chatgpt-project-idea-2026-09-16.md`)
- 기획서 v2.1, 기술 명세 2.1, 작업 흐름, README, `DESIGN.md`, `AGENTS.md`
- `app/site.ts`(이름·태그라인), `app/layout.tsx`, `app/globals.css`(DESIGN.md 토큰), `app/page.tsx`, `app/page.module.css`
- 인포그래픽 이미지·스크립트 삭제(`git rm`)
- v2.3 Impeccable 규칙 적용(위 3절), lint·typecheck·build·Playwright 재검증 통과

## 5. 막힘 / 알려진 문제

| 항목 | 상태 | 처리 |
|---|---|---|
| 첫 화면 테스트(`BR-007`) | 사용자 확인 대기 | 확인 후 8절 체크 |
| 실제 스크린샷 | 없음 | CSS로 그린 예시 화면 유지 |
| 공유 이미지(OG) | `app/opengraph-image.png`(1200×630) + `.alt.txt` | 소스 `docs/og/og-source.html`을 Playwright로 렌더링. 문구 바꾸면 재렌더링 |
| 실제 서비스 주소·가입 링크 | 없음 | 링크 두지 않음(`BR-004`) |
| Pretendard | jsDelivr CDN CSS 링크 | 오프라인이면 시스템 서체로 표시(정상 동작) |

## 6. 다음 작업

1. 운영 URL https://buildlog-showcase.vercel.app 에서 v2.4 줄바꿈과 이름 전환(OG 이미지 URL 문구 포함) 최종 확인(파랑 전환, 목업 그림자, 예시 캡션).
2. 판단 항목 4개 결정: 태그라인 칩 제거 여부, 섹션 위 라벨 제거 여부, 피드 목업을 구분선만으로 바꿀지, 타이머 민트색 교체 여부.
3. ~~커밋·push~~ 완료(2026-09-16). `main` push가 곧 운영 배포.

이전 목록:
1. ~~사용자에게 localhost:3000 v2.2 화면 확인 받기.~~
2. ~~커밋~~ 완료(2026-09-16, main). 원격 `origin`(GitHub cheng80/buildlog)에 push 완료.
3. ~~GitHub↔Vercel 연결, metadataBase·OG 이미지~~ 완료. 남은 것: 실기기·스크린리더 확인, 자체 도메인(있다면).

## 7. 인수인계

**완료:** 위 4절. 세션 재개 요약은 `../HANDOFF.md`.

**맥락:** 빌드로그는 개발자가 만드는 과정을 스크린샷·유튜브 링크로 가볍게 올리면 피드에 뜨고 프로젝트 페이지에 기록으로 쌓이는 SNS다. 이미 운영 중인 프로덕트처럼 소개한다. 서비스 개념의 정본은 ChatGPT 대화이고, 사이트 카피의 정본은 기획서 4절이다.

**경계:** 실제 서비스 기능·DB·API를 설계하거나 구현하지 않는다. 화면은 모두 정적 표현.

**바로 할 일:** 6절 1번.

## 8. 변경된 계약

- v2.3: 브랜드색 보라 `#5b3df5` → 코발트 파랑 `#1e4fd8`(`primary-pressed` `#173fb0`, `primary-soft` `#e7edfc`, `focus` = primary). `globals.css` 토큰 추가 `--primary-mute`(`#3f5aa8`) `--r-xs` `--r-sm` `--shadow-mock`(목업 프레임 전용 그림자). `.caption`은 점선 알약. CSS 클래스 `featureGrid` → `featureList`, `featureIcon`은 타일이 아닌 24px 아이콘. 기능·누구에게·시작하기 카드 없음. 히어로 그림자 없음, 헤더 blur 없음. `DESIGN.md` 1.1(원칙 5개, 타이포 규칙 절 추가). 카피·섹션 ID·링크는 v2.2와 동일.
- v2.2: 섹션 ID `#hero #why #post #feed #project #features #who #start #faq #closing`. 푸터 링크 7개. `app/icon.svg` 추가, `app/favicon.ico` 삭제.
- v2.1: 섹션 ID `#hero #post #feed #project #start #faq #closing`. 헤더 링크 '올리기 / 피드 / 프로젝트 / 시작하기'. FAQ 4개. 예시 프로젝트 3개. 서비스명 상수 `app/site.ts`. 서비스명 빌드로그.
- v2.0: 인포그래픽 파이프라인·`IG/UI` 프롬프트 삭제, `DESIGN.md` 신설.

## 9. 검증 상태

| 항목 | 결과 | 근거 | 날짜 | 리비전 | 유효성 | 출처 / 공백 |
|---|---|---|---|---|---|---|
| 정적 분석·타입 | PASS | RECHECKED | 2026-09-16 | v2.3+그림자 | CURRENT | `npm run lint`, `npm run typecheck` 통과. 그림자 추가 뒤 lint 재실행 |
| 운영 빌드 | PASS | RECHECKED | 2026-09-16 | v2.3+그림자 | CURRENT | `npm run build`, `/` 정적(○). 그림자 추가 뒤 재실행 |
| 반응형·앵커·키보드·FAQ | PASS | RECHECKED | 2026-09-16 | v2.3 | CURRENT | Playwright(Chrome, `next start` 빌드 결과) 360·390·768·1440px 가로 넘침 없음, `#` 앵커 16개 대상 모두 존재·`#`만 있는 링크 0, 9개 섹션 도착 시 제목 top ≥ 헤더 bottom, Tab 20회가 링크 16개·FAQ summary 4개만 거침, 첫 FAQ 기본 펼침·둘째 Enter로 열림. 스크린샷 육안 확인 |
| 히어로 첫 화면 노출 | PASS | RECHECKED | 2026-09-16 | v2.3 | CURRENT | 1440×900: 목업 top 500px, 첫 게시물 화면 622~854px 전부 보임(이전 561px 시작, 화면 잘림). 390×844: 첫 게시물 화면 639~846px, 207px 중 205px 보임(이전 약 140px) |
| Impeccable 규칙 대조 | PASS | RECHECKED | 2026-09-16 | v2.3 | CURRENT | 탐지 규칙 61개 + craft-floor를 CSS·TSX에 수동 대조. 권장 11건 적용. 의도적 잔존: 목업 안 달 glow·8px 격자·줄무늬·민트-온-다크, 보라 primary, 단계 번호, 판단 항목 4개 |
| 의미 단위 줄바꿈(semantic-wrap) | PASS | RECHECKED | 2026-09-16 | v2.4 | CURRENT | 빌드 결과를 `next start`로 띄워 Playwright(Chrome) 360·390·768·1440px에서 텍스트 87개 수집. 외톨이 어절 45→0(URL 줄 제외), 모델 일치 261→310/348, 가로 넘침 없음, 앵커·헤더 겹침·Tab 20회·FAQ Enter 통과 |
| Impeccable 탐지기 실행 | NOT_RUN | NONE | 2026-09-16 | - | UNKNOWN | 외부 바이너리 다운로드·실행이 권한으로 거부됨. 규칙 수동 대조로 대체 |
| 첫 화면 테스트(`BR-007`) | INCOMPLETE | NONE | 2026-09-16 | v2.3 | CURRENT | 사용자 확인 대기. v1.x는 FAIL(사용자 판정) |
| 실기기·스크린리더 | NOT_RUN | NONE | - | - | UNKNOWN | 미확인 |
| 배포 | PASS | RECHECKED | 2026-09-16 | 2875f88 | CURRENT | `vercel deploy --yes --scope virtues1` 첫 배포 → 운영(Ready). 프로젝트 `buildlog`, 팀 `virtues1`, Next.js·Node 24.x. 별칭 https://buildlog-virtues1.vercel.app , https://buildlog-opal.vercel.app . `vercel curl`로 제목 '빌드로그 · 개발 과정을 공유하는 프로젝트 SNS' 확인 |
| OG·메타데이터 | PASS | RECHECKED | 2026-09-16 | v2.3 | CURRENT | 파랑으로 `docs/og/og-source.html` 수정 후 Playwright 1200×630 재렌더 → `app/opengraph-image.png` 교체. | `npm run build` 결과 `/opengraph-image.png` 정적 생성, `index.html`에 og:title·description·locale·image(1200×630)·type, twitter:card=summary_large_image·image 출력 확인. `metadataBase`=https://buildlog-opal.vercel.app |
| Git 자동 배포 | PASS | RECHECKED | 2026-09-16 | 9d54624 | CURRENT | GitHub cheng80/buildlog 연결됨. `main` push 후 source=git 운영 배포가 18초 만에 READY(commit 9d54624 확인) |
| 공개 URL 접근 | PASS | RECHECKED | 2026-09-16 | 2875f88 | CURRENT | **공개 주소 https://buildlog-opal.vercel.app** 200. Playwright로 360·1440px 가로 넘침 없음, 앵커 9개, Tab 순서, FAQ 확인. Deployment Protection은 기본값(`all_except_custom_domains`) 그대로 — 운영 도메인(opal)은 공개, `buildlog-virtues1.vercel.app`과 배포별 URL은 302 → SSO(로그인 필요). 설정 변경 API 호출(`vercel api … PATCH`)은 400으로 실패했고 변경 불필요로 판단 |
| 이름 전환 buildlog → buildlog-showcase | PASS | RECHECKED | 2026-09-17 | 이름 전환 커밋 | CURRENT | 폴더·GitHub 저장소(`gh repo rename`, 옛 주소는 GitHub가 리다이렉트)·Vercel 프로젝트(`vercel project rename`)·package.json 이름을 모두 `buildlog-showcase`로 통일. `vercel git connect`로 Git 연동을 새 저장소 이름으로 다시 잡음(repoId 동일). 운영 도메인 buildlog-showcase.vercel.app 추가, metadataBase·OG 이미지(재렌더) 갱신. 옛 도메인 buildlog-opal.vercel.app 은 새 배포 확인 후 제거 |
