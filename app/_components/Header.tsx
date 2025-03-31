"use client"
import Image from "next/image"
import Link from "next/link"
import HeaderLocationSearch from "./HeaderLocationSearch"
import DesktopNavigation, { MobileNavigation, navLinks } from "./Navigation"
import { useState } from "react"

export default function AppHeader() {
  return (
    <header className="sticky inset-0 z-10 bg-background w-screen py-2 lg:py-4 ">
      <div className="w-[95%] max-w-[1250px] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Adeyemi Tosin Homes & Consults"
            width={120}
            height={75}
          />
        </Link>
        <HeaderLocationSearch />
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  )
}
