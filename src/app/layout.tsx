import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Mona_Sans } from "next/font/google"

export const metadata: Metadata = {
  title: "Welcome to Outbound AI",
  description:
    "This AI-powered calling solution helps you connect with customers effortlessly, track conversations in real-time, and never miss an opportunity.",
}

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`text-primary ${monaSans.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
