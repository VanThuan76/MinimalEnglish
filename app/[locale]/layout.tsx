import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { Open_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minimal English",
  description: "Minimal English",
  icons: {
    icon: '/logo.png',
  }
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const translate = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={cn("min-h-screen bg-background", openSans.className)}>
        <NextIntlClientProvider messages={translate}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <FooterSection />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Script
          type='text/javascript'
          src='../node_modules/tw-elements/dist/js/tw-elements.umd.min.js'
        ></Script>
      </body>
    </html>
  );
}
