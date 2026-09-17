import type { Metadata } from "next";
import "./globals.css";
import { SERVICE, TAGLINE } from "./site";

const DESCRIPTION = `${SERVICE}는 앱, 웹, 게임을 만드는 개발자의 SNS입니다. 스크린샷이나 유튜브 링크를 붙여 올리면 게시물이 피드에 뜨고, 같은 게시물이 프로젝트 페이지에 개발 기록으로 쌓입니다.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://buildlog-showcase.vercel.app"),
  title: `${SERVICE} · ${TAGLINE}`,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SERVICE,
    title: `${SERVICE} · ${TAGLINE}`,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" suppressHydrationWarning>
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
