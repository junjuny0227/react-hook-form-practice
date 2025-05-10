import "@/styles/globals.css";

import type { Metadata } from "next";
import Provider from "./provider";

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
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
