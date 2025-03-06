import type { Metadata } from "next"
import { Mona_Sans, Noto_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const monaSans = Mona_Sans({ subsets: ["latin"], variable: "--font-mona-sans" })
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" })
const circularStd = localFont({
  src: [
    {
      path: "./fonts/circular-std-medium-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-circular-std",
})

export const metadata: Metadata = {
  title: "Welcome to Outbound AI",
  description:
    "This AI-powered calling solution helps you connect with customers effortlessly, track conversations in real-time, and never miss an opportunity.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen ${monaSans.variable} ${circularStd.variable} ${notoSans.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
