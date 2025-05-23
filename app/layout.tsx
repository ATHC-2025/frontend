import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"
import AppHeader from "./_components/Header"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Adeyemi Tosin Homes & Consults",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <AppHeader />
        {children}
      </body>
    </html>
  )
}
