import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ThemeSwitch } from "../utils/ThemeSwitch";
import Appbar from "../utils/Appbar";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" attribute="class">
          <Appbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
