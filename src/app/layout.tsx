import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qorvyn | Engineering Intelligent Software for the Future",
  description: "Qorvyn is a modern technology company specializing in Enterprise Software Development, Microsoft 365 Solutions, AI Applications, and Cloud Solutions.",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          {children}
          
          {/* Global fixed theme toggle widget */}
          <div className="fixed top-24 right-4 sm:top-28 sm:right-6 lg:top-6 lg:right-6 z-[40] drop-shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
