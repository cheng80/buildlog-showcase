# 빌드로그 소개 사이트 프로젝트 현황

> 갱신일: 2026-09-16 · 문서 리비전: 2.2

## 1. 로드맵

- [x] 단계 1 — 서비스 구조 확인(ChatGPT 대화 재검토), 기획 v2.1, `DESIGN.md`
- [x] 단계 2 — 소개 페이지 v2.1 구현 (HTML/CSS 화면)
- [x] 단계 3 — 로컬 검증 (lint·typecheck·반응형·앵커·키보드·FAQ)
- [x] 단계 4 — 커밋 → GitHub push → Vercel 첫 배포(운영) → 공개 URL https://buildlog-opal.vercel.app 확인

## 2. 진행 중인 계획

별도 `PLAN` 없음.

## 3. 현재 작업

**v2.1 커밋 뒤 사용자가 "아직 미완성 같아 보인다"고 해서 v2.2로 보강, 커밋 완료.** 히어로 재배치, 앱 UI 목업 사실감 보강, 왜·기능·누구에게 섹션 추가, 푸터 보강, 파비콘. lint·typecheck·360~1440px·앵커·Tab·FAQ 재확인. 서비스 이름은 사용자가 **빌드로그**로 정했고 `app/site.ts` 한 곳에서 관리한다.

오늘의 흐름: v1.x 구현 → 사용자 "무슨 사이트 홍보인지 모르겠다" → 인포그래픽 폐기·인스타그램형 부각 요청 → v2.0 기획 → 사용자 "피드형 SNS 구조가 맞나? 구조가 안 그려진다" → ChatGPT 기획 대화 전체를 추출해 검토 → 3층 구조 확인(사용자 "맞음") → 화면을 직접 만들어 보여주기로 하고 v2.1 구현 → 이름 결정.

## 4. 완료

- ChatGPT 기획 대화 46개 메시지 추출·검토 (`_workspace/chatgpt-project-idea-2026-09-16.md`)
- 기획서 v2.1, 기술 명세 2.1, 작업 흐름, README, `DESIGN.md`, `AGENTS.md`
- `app/site.ts`(이름·태그라인), `app/layout.tsx`, `app/globals.css`(DESIGN.md 토큰), `app/page.tsx`, `app/page.module.css`
- 인포그래픽 이미지·스크립트 삭제(`git rm`)

## 5. 막힘 / 알려진 문제

| 항목 | 상태 | 처리 |
|---|---|---|
| 첫 화면 테스트(`BR-007`) | 사용자 확인 대기 | 확인 후 8절 체크 |
| 실제 스크린샷 | 없음 | CSS로 그린 예시 화면 유지 |
| 공유 이미지(OG) | 없음 | 배포 전 준비. 파비콘은 `app/icon.svg`로 해결 |
| 실제 서비스 주소·가입 링크 | 없음 | 링크 두지 않음(`BR-004`) |
| Pretendard | jsDelivr CDN CSS 링크 | 오프라인이면 시스템 서체로 표시(정상 동작) |

## 6. 다음 작업

1. 사용자에게 localhost:3000 v2.2 화면 확인 받기.
2. ~~커밋~~ 완료(2026-09-16, main). 원격 `origin`(GitHub cheng80/buildlog)에 push 완료.
3. GitHub 저장소를 Vercel에 연결(push 시 자동 배포). `layout.tsx`에 `metadataBase`(https://buildlog-opal.vercel.app)와 공유 이미지(OG) 추가 후 `vercel --prod`.

## 7. 인수인계

**완료:** 위 4절. 세션 재개 요약은 `../HANDOFF.md`.

**맥락:** 빌드로그는 개발자가 만드는 과정을 스크린샷·유튜브 링크로 가볍게 올리면 피드에 뜨고 프로젝트 페이지에 기록으로 쌓이는 SNS다. 이미 운영 중인 프로덕트처럼 소개한다. 서비스 개념의 정본은 ChatGPT 대화이고, 사이트 카피의 정본은 기획서 4절이다.

**경계:** 실제 서비스 기능·DB·API를 설계하거나 구현하지 않는다. 화면은 모두 정적 표현.

**바로 할 일:** 6절 1번.

## 8. 변경된 계약

- v2.2: 섹션 ID `#hero #why #post #feed #project #features #who #start #faq #closing`. 푸터 링크 7개. `app/icon.svg` 추가, `app/favicon.ico` 삭제.
- v2.1: 섹션 ID `#hero #post #feed #project #start #faq #closing`. 헤더 링크 '올리기 / 피드 / 프로젝트 / 시작하기'. FAQ 4개. 예시 프로젝트 3개. 서비스명 상수 `app/site.ts`. 서비스명 빌드로그.
- v2.0: 인포그래픽 파이프라인·`IG/UI` 프롬프트 삭제, `DESIGN.md` 신설.

## 9. 검증 상태

| 항목 | 결과 | 근거 | 날짜 | 리비전 | 유효성 | 출처 / 공백 |
|---|---|---|---|---|---|---|
| 정적 분석·타입 | PASS | RECHECKED | 2026-09-16 | v2.2 | CURRENT | `npm run lint`, `npm run typecheck` 통과 |
| 운영 빌드 | PASS | RECHECKED | 2026-09-16 | v2.2 | CURRENT | `npm run build`, `/` 정적(○) |
| 반응형·앵커·키보드·FAQ | PASS | RECHECKED | 2026-09-16 | v2.2 | CURRENT | Playwright(Chrome) 360·390·768·1440px 가로 넘침 없음, 모든 `#` 앵커 대상 존재, 제목이 고정 헤더에 안 가림, Tab 순서 실제 링크·FAQ만, 첫 FAQ 기본 펼침·Enter로 둘째 열림. 스크린샷 육안 확인 |
| 첫 화면 테스트(`BR-007`) | INCOMPLETE | NONE | 2026-09-16 | v2.1 | CURRENT | 사용자 확인 대기. v1.x는 FAIL(사용자 판정) |
| 실기기·스크린리더 | NOT_RUN | NONE | - | - | UNKNOWN | 미확인 |
| 배포 | PASS | RECHECKED | 2026-09-16 | 2875f88 | CURRENT | `vercel deploy --yes --scope virtues1` 첫 배포 → 운영(Ready). 프로젝트 `buildlog`, 팀 `virtues1`, Next.js·Node 24.x. 별칭 https://buildlog-virtues1.vercel.app , https://buildlog-opal.vercel.app . `vercel curl`로 제목 '빌드로그 · 개발 과정을 공유하는 프로젝트 SNS' 확인 |
| 공개 URL 접근 | PASS | RECHECKED | 2026-09-16 | 2875f88 | CURRENT | **공개 주소 https://buildlog-opal.vercel.app** 200. Playwright로 360·1440px 가로 넘침 없음, 앵커 9개, Tab 순서, FAQ 확인. Deployment Protection은 기본값(`all_except_custom_domains`) 그대로 — 운영 도메인(opal)은 공개, `buildlog-virtues1.vercel.app`과 배포별 URL은 302 → SSO(로그인 필요). 설정 변경 API 호출(`vercel api … PATCH`)은 400으로 실패했고 변경 불필요로 판단 |
