import Link from "next/link"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import LoginBtn from "./login-btn"
import { Icons } from "@/lib/icons"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="inline-block font-bold">{siteConfig?.name}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <LoginBtn />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
