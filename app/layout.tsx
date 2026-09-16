import type { Metadata } from "next";
import "./globals.css";
import { SERVICE, TAGLINE } from "./site";

export const metadata: Metadata = {
  title: `${SERVICE} · ${TAGLINE}`,
  description:
    `${SERVICE}는 앱, 웹, 게임을 만드는 개발자의 SNS입니다. 스크린샷이나 유튜브 링크를 붙여 올리면 게시물이 피드에 뜨고, 같은 게시물이 프로젝트 페이지에 개발 기록으로 쌓입니다.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
