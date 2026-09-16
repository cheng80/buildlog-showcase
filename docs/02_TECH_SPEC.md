# 소개 사이트 기술 명세 · Next.js / Vercel

> 버전: 2.1 · 2026-09-16
>
> 소개 사이트의 제작 기준이다. 실제 서비스의 기술 스택·DB·API는 설계하지 않는다. v1.x의 인포그래픽 생성 파이프라인은 폐기했다.

## 1. 기술 스택

| 영역 | 결정 | 이유 / 제약 |
|---|---|---|
| 프레임워크 | **Next.js 16 · App Router** (npm, Node 24.x) | 단일 소개 페이지, 메타정보 관리 |
| 언어 | TypeScript | 정적 콘텐츠·컴포넌트 일관성 |
| 렌더링 | 정적 사전 렌더링. Server Components만 사용 | 방문자마다 달라지는 내용 없음. FAQ도 `details`라 Client Component 불필요 |
| 스타일 | CSS Modules + `app/globals.css`의 CSS 변수 | 토큰 값은 루트 [`DESIGN.md`](../DESIGN.md)를 그대로 옮긴다 |
| 디자인 기준 | [`DESIGN.md`](../DESIGN.md) (awesome-design-md Pinterest 기반, 색은 자체) | 색·서체·간격·모서리·컴포넌트의 정본 |
| 서체 | Pretendard (jsDelivr CDN CSS `<link>`) + 시스템 한글 서체 대체 | 한글 제목 품질. 추가 npm 의존성 없음. CDN 실패 시 시스템 서체로 표시 |
| 시각 자료 | HTML/CSS + 인라인 SVG 아이콘 | 기획서 `BR-006`. 이미지 파일·`next/image` 기본 사용 안 함. 실제 스크린샷이 생기면 그때 `next/image` 도입 |
| 백엔드 / DB / 인증 / 분석 | 없음 | 사용자 입력·서비스 기능 없음 |
| 배포 | Vercel (Preview 확인 → Production) | 계정·프로젝트·도메인 미정 |

## 2. 파일 구조

| 위치 | 역할 |
|---|---|
| `DESIGN.md` | 디자인 시스템 정본 |
| `app/site.ts` | 서비스 이름 `SERVICE`(빌드로그)와 태그라인. 이름 변경은 여기서만 |
| `app/layout.tsx` | `lang="ko"`, Pretendard 링크, 메타데이터(`site.ts` 사용) |
| `app/globals.css` | `DESIGN.md` 토큰을 CSS 변수로, 기본 리셋·포커스·스크롤 보정 |
| `app/page.tsx` | 헤더·7개 섹션·푸터. 예시 데이터(프로젝트·게시물·타임라인)와 목업 컴포넌트(`Post`, `Official`, `Shot`, `Timeline`)를 한 파일에 둔다 |
| `app/page.module.css` | 섹션·목업 스타일 |
| `components/` | `page.tsx`가 과하게 길어질 때만 목업(게시물 카드, 프로필 그리드, 아이콘) 분리 |

별도 `/feed`, `/profile` 경로는 만들지 않는다. `output: 'export'`는 설정하지 않고 빌드 결과에서 `/`가 정적(○)인지 확인한다.

## 3. 구현 규칙

- **앵커(`FR-001`):** `<a href="#feed">` 등 일반 링크. 섹션 ID는 `hero post feed project start faq closing`. 고정 헤더 높이는 `scroll-padding-top`으로 보정.
- **목업(`FR-002`, `BR-003`):** 게시물·프로필·버튼 모양은 `div`/`span`/`article`. `button`·`a`·`tabindex` 금지. 화면 속 글자는 실제 텍스트, 장식 도형·아이콘은 `aria-hidden="true"`. 각 목업은 `figure` + `figcaption`(예시 캡션).
- **게시물 이미지:** `DESIGN.md` ‘게시물 이미지’ 표의 팔레트로 CSS 그라디언트·격자 표현. 1:1 `aspect-ratio`.
- **FAQ(`FR-003`):** `details`/`summary`, 첫 항목 `open`.
- **반응형(`FR-004`):** 기준 폭 1440 / 1024 / 768 / 390 / 360px. 1023px 이하 1열(텍스트 먼저), 767px 이하 헤더 2줄.
- **메타데이터:** 제목 `${SERVICE} · ${TAGLINE}`(빌드로그 · 개발 과정을 공유하는 프로젝트 SNS), 설명은 S-01 설명. `metadataBase`·canonical·공유 이미지는 공개 주소가 생긴 뒤 추가.

## 4. 개인정보 / 데이터 / API

로그인·입력 폼·외부 API·Route Handler·Server Action 없음. 영속 데이터 모델 없음. 예시 콘텐츠의 정본은 기획서 4절 ‘예시 콘텐츠’.

## 5. 검증

| 명령 / 확인 | 내용 |
|---|---|
| `npm run lint` | ESLint |
| `npm run typecheck` | `next typegen && tsc --noEmit` |
| `npm run build` | 운영 빌드, `/` 정적 렌더링 |
| 브라우저 | 360·390·768·1440px 가로 넘침, 앵커 도착 위치, Tab 순서(목업 요소 제외), FAQ 키보드, 기획서 8절 완료 기준 |

빌드 통과만으로 화면 검증 완료로 기록하지 않는다. 결과는 [현황](03_PROJECT_STATUS.md) 9절에 남긴다.

## 6. 배포 흐름

1. Git 저장소를 Vercel 프로젝트에 연결(Next.js 기본 설정).
2. Preview에서 위 검증 반복.
3. Production 반영 후 공개 URL 재확인, 결과를 현황에 기록.

이 문서 갱신에서는 저장소 연결·push·배포를 실행하지 않는다.

## 7. 참고

- [awesome-design-md · Pinterest](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/pinterest) (MIT)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
