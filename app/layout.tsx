import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "روابط التواصل | Bio Links",
  description: "تواصل معنا عبر منصاتنا المختلفة - Connect with us across platforms",
  openGraph: {
    title: "روابط التواصل | Bio Links",
    description: "تواصل معنا عبر منصاتنا المختلفة",
    type: "website",
    locale: "ar_SA",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} font-sans antialiased`}>
        {children}

        {/* Google Tag Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17766162614"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17766162614');
          `}
        </Script>
      </body>
    </html>
  )
}