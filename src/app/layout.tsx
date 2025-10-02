import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurel Golemi - Web Developer Portfolio",
  description: "Professional web developer specializing in HTML, CSS, JavaScript, and React. View my projects and get in touch for your next web development project.",
  keywords: "web developer, frontend developer, HTML, CSS, JavaScript, React, portfolio",
  authors: [{ name: "Aurel Golemi " }],
  openGraph: {
    title: "Aurel Golemi - Web Developer Portfolio",
    description: "Professional web developer specializing in modern web technologies",
    type: "website",
    url: "https://portfolio-website-puce-seven-59.vercel.app/",
  },
  icons: {
    icon: [
    { url: '/Aurel-Golemi-Logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/Aurel-Golemi-Logo.png', sizes: '32x32', type: 'image/png' }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}


