'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

import { Button } from "./ui/button"
import { DropdownMenu } from "./ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu trigger={
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    }>
      <div className="px-1 py-1">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("system")}>System</button>
      </div>
    </DropdownMenu>
  )
}
