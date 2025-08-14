import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
    return (
        <header className="border-b fixed top-0 z-50 w-full border-black/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
                <div className="border flex h-16 items-center justify-between">
                    <Link href="/">Logo</Link>
            
                    <nav className="border flex items-center gap-6">
                        <Link href="/">Inicio</Link>
                        <Link href="/blog">Blog</Link>
                        <Button>Começar</Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}