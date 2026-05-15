import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tshegofentse – Hazardous Waste & Analytical Services",
  description: "Providing Effective Solutions To Address Today's Environmental Challenges.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "nmq4YCvgl8sC0moxtWNeX7og_G0wGYVpKLg9PgRc0ww",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
