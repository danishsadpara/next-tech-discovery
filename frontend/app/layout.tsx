import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ThemeSwitch } from "./utils/ThemeSwitch";

export const metadata: Metadata = {
  title: "Code Discovery",
  description: "learn and earn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <ThemeSwitch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
