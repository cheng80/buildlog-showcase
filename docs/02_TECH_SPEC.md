# 소개 사이트 기술 명세 · Next.js / Vercel

> 버전: 1.2 · 2026-09-16
>
> 소개 사이트는 Next.js로 제작하고 Vercel에 배포하는 구성을 채택한다. 아래 내용은 제작 기준이며 현재 코드·Vercel 프로젝트·배포 URL은 없다. 실제 서비스의 기술 스택·DB·API는 설계하지 않는다.

## 1. 기술 스택

| 영역 | 현재 결정 | 이유 / 제약 |
|---|---|---|
| 프레임워크 | **Next.js · App Router** | 단일 소개 페이지, 이미지와 검색·공유용 메타정보 관리 |
| 언어 | **TypeScript** | 컴포넌트와 정적 콘텐츠의 일관성 유지 |
| 화면 생성 | 정적 사전 렌더링 중심 | 내용이 방문자마다 달라지지 않음 |
| 컴포넌트 | Server Components 기본 | 브라우저 상호작용이 필요한 작은 부분에만 Client Component 사용 |
| 스타일 | CSS Modules + 공통 CSS 변수 | 현재 범위의 레이아웃·색·반응형 표현에 충분한 기본안 |
| 배포 | **Vercel** | Next.js 통합 배포, Preview에서 확인 후 Production 공개 |
| 백엔드 / DB / 인증 | 소개 사이트에서 사용하지 않음 | 사용자 입력·서비스 기능 없음 |
| 이미지 | 로컬 서비스 화면·인포그래픽 자산 + `next/image` | 크기·반응형 이미지 최적화; 자산이 없으면 텍스트 카드 |
| 인포그래픽 생성 | `scripts/gen-infographic.sh IG-xxx` → Codex CLI `imagegen` 스킬(내장 `image_gen`, API 키 불필요) → `public/infographics/ig-xxx.png` | 기획서의 IG 프롬프트와 대응 WF 절을 그대로 전달. 기존 파일은 `-v2`로 보존, 실행 로그는 `.codex-logs/`(Git 제외). 생성 후 한글·예시 문구를 사람이 검수 |
| 콘텐츠 | 소스 안의 정적 문구·예시 | 별도 CMS나 외부 데이터 연동 없이 관리 |
| 도메인 | 실제 배포 시 발급되는 Vercel URL, 필요하면 자체 도메인 연결 | 도메인 이름과 계정·프로젝트는 아직 미정 |

구현 시작 시 지원 중인 안정 버전과 호환되는 Node.js를 확인해 사용하고, 패키지 잠금 파일과 런타임 설정으로 개발·배포 버전을 일치시킨다. 실험 기능이나 특정 버전 번호를 지금 임의로 고정하지 않는다.

## 2. 페이지 구조

소개 페이지 경로는 `/` 하나다. 섹션 ID와 링크 계약은 [기획서](01_PRODUCT_SPEC.md)의 4절을 따른다. 별도 피드·프로젝트·프로필 화면은 만들지 않는다.

| 위치 | 역할 |
|---|---|
| `app/layout.tsx` | 한국어 문서 언어, 공통 스타일, 사이트 메타정보 |
| `app/page.tsx` | 헤더·7개 섹션·푸터 구성 |
| `components/` | 페이지가 길어질 때 섹션별 컴포넌트 분리 |
| `app/globals.css` / `*.module.css` | 공통 토큰, 반응형 레이아웃, 섹션 스타일 |
| `public/` | 실제로 준비된 서비스 화면·인포그래픽 이미지·아이콘 |

Next.js의 기본 빌드와 Vercel 통합 배포를 사용한다. 정적인 페이지를 만든다고 `output: 'export'`를 별도로 설정할 필요는 없다. 페이지에 요청별 데이터·세션·외부 API 의존성을 추가하지 않고, 빌드 결과에서 `/`의 사전 렌더링 여부를 확인한다. Server Component 사용 자체가 매 요청마다 페이지를 다시 만든다는 의미는 아니다.

## 3. 개인정보 / 권한

로그인·회원정보·이메일 수집·결제 입력이 없다. API 키나 비밀정보가 필요한 외부 연동도 전제하지 않는다. 방문 분석 도구는 이번 기본 구성에 포함하지 않는다.

## 4. 데이터 모델

영속 데이터 모델은 해당 없음. 서비스 예시의 문구·이미지는 정적 소개 콘텐츠다. 예시 내용은 기획서의 `WF-006`을 정본으로 사용한다.

## 5. API 계약

애플리케이션 데이터 API는 해당 없음. 링크는 페이지 내 앵커다. Route Handler·Server Action·외부 서비스 API·동영상 임베드는 기본 범위에 없다. Next.js가 제공하는 이미지 최적화 기능은 사용할 수 있다.

## 6. 상태와 접근성

- `FR-001`: 본문과 `<a href="#preview">` 같은 앵커는 스크립트 없이도 사용 가능하게 구성한다. 고정 헤더를 사용하면 도착 위치를 보정한다.
- `FR-002`, `BR-005`: `next/image`에 이미지 크기 또는 비율과 적절한 `sizes`를 지정하고 이미지 밖에 설명을 둔다. 미제작 시 텍스트 카드를 제공한다.
- `FR-003`: FAQ는 HTML의 `details` / `summary`를 사용한다. 이를 위해 별도 상태 관리 라이브러리나 Client Component를 추가하지 않는다.
- `FR-004`: 좁은 화면에서 1열로 배치하고 포커스·대비·줄바꿈을 확인한다. 움직임이 추가되면 줄이기 설정을 반영한다.
- `BR-003`: 목업의 내부 컨트롤을 실제 버튼·링크로 구현하지 않는다.

검색·공유용 제목과 설명은 Next.js Metadata API로 관리하고 기획서의 대상·카피와 일치시킨다. 공유 이미지와 favicon은 실제 자산을 준비해 연결한다. `metadataBase`와 canonical은 공개 주소가 정해진 후 정확한 Production 주소를 사용한다. 본문 전체를 이미지로 대체하지 않는다.

## 7. 오류 처리

서버 API 오류나 회원 상태는 해당 없음. 이미지 누락·긴 제목·앵커 위치·FAQ 상태를 검증한다. 확인되지 않은 외부 링크는 렌더링하지 않는다. 서비스 기능을 흉내 내는 오류·성공 알림을 만들지 않는다.

## 8. 테스트 / 배포

### 제작 후 검증

현재 모두 미실행이다. 초기 패키지 관리자는 npm을 기본으로 하고 다음 명령을 프로젝트 스크립트로 구성한다.

| 명령 | 확인할 것 |
|---|---|
| `npm run lint` | ESLint 검사 (`eslint .`) |
| `npm run typecheck` | TypeScript 검사 (`tsc --noEmit`) |
| `npm run build` | Next.js 운영 빌드 (`next build`)와 페이지 렌더링 결과 |

기획서 8절의 완료 기준에 따라 360px·390px·768px·1440px 화면, 키보드 이동, 모든 앵커, FAQ, 이미지 누락 상태를 점검한다. 검색·공유용 제목·설명·이미지도 확인한다. 빌드만 성공했다고 화면 검증을 완료로 기록하지 않는다.

### 배포 흐름

1. 사이트 코드가 준비되면 사용할 Git 저장소를 Vercel 프로젝트에 연결하고 Next.js 프레임워크 설정을 사용한다. 별도 요구가 없으면 사용자 정의 배포 파이프라인은 만들지 않는다.
2. Preview 배포에서 위 화면·기능·메타정보를 확인한다. Git 연동 시 비운영 브랜치의 변경을 Preview로 검토할 수 있다.
3. 검증한 변경을 설정된 Production 브랜치에 반영해 공개한다. 실제 운영 브랜치·계정·프로젝트·도메인은 배포 작업 시 정한다.
4. 공개 URL에서 다시 확인하고 URL·리비전·검증 결과를 [프로젝트 현황](03_PROJECT_STATUS.md)에 기록한다. 공개 후 치명적인 문제가 생기면 이전 정상 배포로 복구한다.

이번 문서 갱신에서는 저장소 연결·push·Vercel 프로젝트 생성·배포를 실행하지 않는다.

## 9. 공식 참고 자료

- [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs): 통합 배포와 이미지 최적화 지원.
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components): 기본 Server Component와 필요한 부분에 한정한 클라이언트 상호작용.
- [Next.js Deploying](https://nextjs.org/docs/app/getting-started/deploying): 배포 방식과 정적 export의 차이.
- [Vercel Environments](https://vercel.com/docs/deployments/environments): Preview / Production 환경 구분.
