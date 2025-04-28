import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import BackgroundCanvas from "@/components/custom/Backgrounds/BackgroundCanvas";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Atencio | Software Engineer",
  description: "Software Engineer",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  let { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-foreground text-background scroll-smooth px-4`}
      >
        <NextIntlClientProvider>
          <BackgroundCanvas />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
