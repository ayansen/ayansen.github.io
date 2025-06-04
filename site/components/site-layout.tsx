import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">Ayan Sen</Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="/principles" className="text-muted-foreground hover:text-foreground transition-colors">
              Principles
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/ayansen" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/ayansen89" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="py-4 border-t">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3 mb-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">About</h3>
              <p className="text-xs text-muted-foreground">
                Principal engineer with experience in building multi-tenant, API-first platforms and event-driven
                reactive systems.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Navigation</h3>
              <nav className="flex flex-col gap-1">
                <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link href="/experience" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
                <Link
                  href="/principles" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Principles
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Contact</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">ayan.sen@example.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="h-3 w-3 text-muted-foreground" />
                  <Link
                    href="https://linkedin.com/in/ayansen89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    linkedin.com/in/ayansen89
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <Github className="h-3 w-3 text-muted-foreground" />
                  <Link
                    href="https://github.com/ayansen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    github.com/ayansen
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-3 flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="text-center md:text-left">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Ayan Sen. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="h-7 w-7 p-0">
                <Link href="https://github.com/ayansen" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="h-7 w-7 p-0">
                <Link href="https://linkedin.com/in/ayansen89" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="h-7 w-7 p-0">
                <Link href="mailto:ayan.sen@example.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
