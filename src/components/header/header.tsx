import Link from "next/link";
import { Button } from "../ui/button";
import { ActiveLink } from "../active-link/active-link";
import { Logo } from "../logo";

export function Header() {

    return (

        <header className="fixed top-0 z-50 w-full border-b border-white/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
                <div className="flex h-16 items-center justify-between">
                    <Logo />
            
                    <nav className="border flex items-center gap-6">
                        <ActiveLink href="/">Inicio</ActiveLink>
                        <ActiveLink href="/blog">Blog</ActiveLink>
                        <Button asChild>
                            <Link href="/comecar">Começar</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}