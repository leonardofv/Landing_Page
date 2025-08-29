import Link from "next/link";
import { Button } from "../ui/button";
import { ActiveLink } from "../active-link/active-link";
import { Logo } from "../logo";

export function Header() {
  return (
    <header className="top-0 z-50 w-full border-b border-white/20">
      <div className="flex justify-between items-center mx-auto w-full h-16 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="flex justify-between items-center gap-6">
          <ActiveLink href="/">Inicio</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
          <Button variant={"secondary"} asChild>
            <Link href="/comecar">Começar</Link>
          </Button>
        </nav>

      </div>
    </header>
  );
}
