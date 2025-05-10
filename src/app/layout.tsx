import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "react-hook-form & zod",
  description: "react-hook-form & zod",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
