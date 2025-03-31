"use client"

import { ReactNode, useState } from "react"
import useOutsideClick from "../_hooks/useOutsideClick"
import DownChevron from "../_assets/svgs/DownChevron"

interface DropdownProps<T> {
  label: ReactNode
  items: T[]
  renderItem: (item: T) => ReactNode // Custom rendering function
}

export default function Dropdown<T>({
  label,
  items,
  renderItem,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useOutsideClick(() => setIsOpen(false))

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseOver={() => setIsOpen(true)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="text-foreground flex gap-2 items-center hover:text-primary cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <span
          className={`block transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <DownChevron />
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-[100%] w-max bg-white rounded-lg py-2 z-50"
          style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
        >
          {items.map((item, index) => (
            <div key={index}>{renderItem(item)}</div>
          ))}
        </div>
      )}
    </div>
  )
}
