"use client"
import Link from "next/link"
import { ReactNode, useState } from "react"
import CallIcon from "../_assets/svgs/CallIcon"
import DownChevron from "../_assets/svgs/DownChevron"
import CloseIcon from "../_assets/svgs/CloseIcon"
import MenuIcon from "../_assets/svgs/MenuIcon"
import Dropdown from "./Dropdown"
import useOutsideClick from "../_hooks/useOutsideClick"

class NavLinkData {
  href = ""
  children: ReactNode = ""
  subLinks: { href: string; children: ReactNode }[] = []
  constructor(
    href: string,
    children: ReactNode,
    subLinks?: { href: string; children: ReactNode }[]
  ) {
    this.href = href
    this.children = children
    this.subLinks = subLinks || []
  }
}

export const navLinks: NavLinkData[] = [
  new NavLinkData("#properties", "Properties", [
    new NavLinkData("/properties/sale", "For Sale"),
    new NavLinkData("/properties/rent", "For Rent"),
    new NavLinkData("/properties/lands", "Lands"),
  ]),

  new NavLinkData("#services", "Services", [
    new NavLinkData("/services#land-acquisition", "Land Acquisition & Sales"),
    new NavLinkData("/services#estate-management", "Estate Management"),
    new NavLinkData("/services#estate-development", "Estate Development"),
    new NavLinkData(
      "/services#architecture-construction",
      "Architectural Design & Construction"
    ),
    new NavLinkData("/services/rentals", "Rentals"),
    new NavLinkData("/services/property-management", "Property Management"),
  ]),

  new NavLinkData("/about", "About Us"),
  new NavLinkData("/contact", "Contact"),
]

export default function DesktopNavigation() {
  return (
    <nav className="font-poppins font-normal text-base xl:text-lg text-foreground/80">
      <ul className="hidden lg:flex lg:gap-4 xl:gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            {link.subLinks.length > 0 ? (
              <Dropdown
                label={link.children}
                items={link.subLinks}
                renderItem={(item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.children}
                  </Link>
                )}
              />
            ) : (
              <AppNavLink {...link} />
            )}
          </li>
        ))}
        <li>
          <Link
            href="tel:+2349011288423"
            className="btn-primary flex items-center gap-2"
          >
            <CallIcon /> (901) 128-8423
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <ul className="flex flex-col gap-3 p-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.subLinks.length > 0 ? (
                <>
                  <MobileNavDropDownLink link={link} />
                </>
              ) : (
                <Link href={link.href} className="block py-2 text-lg">
                  {link.children}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              href="tel:+2349011288423"
              className="btn-primary flex items-center gap-2"
            >
              (901) 128-8423
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
function AppNavLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="text-foreground flex gap-3 items-center hover:text-primary"
    >
      {children}
    </Link>
  )
}
function MobileNavDropDownLink({ link }: { link: NavLinkData }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useOutsideClick(() => setIsOpen(false))

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center w-full py-2 text-lg font-medium"
      >
        {link.children}
        <span className={`transform transition ${isOpen ? "rotate-180" : ""}`}>
          <DownChevron />
        </span>
      </button>
      <ul
        className={`pl-4 border-l border-gray-300 transition-all duration-200 overflow-hidden ${
          isOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {link.subLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="block py-2 text-gray-700">
              {item.children}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
