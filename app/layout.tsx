import type { Metadata } from "next";
import { Geist, Geist_Mono, Young_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Manta Fleet – B2B Marine Fleet Management for Yachts, Resorts & Marinas",
  description: "Manta Fleet provides B2B fleet operations and managed services for yachts, resorts, and marinas — controlling fuel, maintenance, and procurement costs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${youngSerif.variable} antialiased bg-neutral-100 dark:bg-neutral-900`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
