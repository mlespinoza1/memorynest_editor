import { Button } from '../components/ui/button'
import Link from "next/link"
import { ThemeToggle } from '../components/theme-toggle'
import { Icon } from '../components/ui/icon'

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Icon name="nest" className="w-10 h-10 text-primary" />
          <span className="text-xl font-semibold text-foreground">Memory Nest</span>
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Icon name="bird" className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
