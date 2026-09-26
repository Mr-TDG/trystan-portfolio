import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trystan De Guzman — Product Builder",
  description:
    "Portfolio of Trystan De Guzman — business development, AI automation, and software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
