"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors px-2 py-1 rounded-md"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/experience"
            className="text-foreground hover:text-primary transition-colors px-2 py-1 rounded-md"
            onClick={() => setOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="/principles"
            className="text-foreground hover:text-primary transition-colors px-2 py-1 rounded-md"
            onClick={() => setOpen(false)}
          >
            What I Believe In
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
