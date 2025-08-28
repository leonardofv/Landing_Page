import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ActiveLink } from "@/components/active-link/active-link";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="top-0 z-50 w-full border-b py-3 border-white/20">
      <div className="flex justify-between items-center mx-auto w-full h-16 px-4 sm:px-6 lg:px-80">
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
