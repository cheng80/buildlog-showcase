# 빌드로그 소개 사이트 작업 진입점

이 묶음은 서비스 ‘빌드로그’의 소개 사이트 기획·제작용이다. 서비스 이름은 `app/site.ts`에서만 바꾼다. 실제 서비스의 제품·기술 기획과 구분한다. 세부 내용의 정본은 아래 문서다.

## 읽기 순서

0. 세션 재개 시 상위 폴더의 [핸드오프](../HANDOFF.md)
1. [프로젝트 현황](docs/03_PROJECT_STATUS.md)의 현재 작업과 인수인계
2. 활성 계획이 있는 경우 해당 계획
3. 관련 [기획서](docs/01_PRODUCT_SPEC.md), [DESIGN.md](DESIGN.md), [기술 전제](docs/02_TECH_SPEC.md)
4. 구현이 생긴 경우 관련 코드와 검증 결과
5. 필요할 때 [작업 흐름](docs/04_WORKFLOW.md)

## 갱신 위치

- 목적·범위·카피·예시 콘텐츠·화면 → `docs/01_PRODUCT_SPEC.md`
- 색·서체·간격·컴포넌트 → `DESIGN.md`
- 구현 방식·제약 → `docs/02_TECH_SPEC.md`
- 진행·검증·다음 작업·인수인계 → `docs/03_PROJECT_STATUS.md`
- 작업 절차 → `docs/04_WORKFLOW.md`

요청한 작업 범위와 기존 자산을 먼저 확인한다. 실행하지 않은 구현·배포·검증을 완료로 기록하지 않는다. 시각 자료는 HTML/CSS로 만들고 생성형 인포그래픽은 쓰지 않는다. 사용자에게 묻는 질문은 한글로만 쓴다.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
