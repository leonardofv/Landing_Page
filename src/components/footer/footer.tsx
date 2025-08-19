import Link from "next/link";
import { Logo } from "../logo";

export function Footer() {
    return (
        
        <footer className="border-t border-white/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center md:flex-row gap-8 py-8">
                    <Logo />
                    <nav className="flex flex-col md:flex-row items-center gap-4 text-sm">
                        <Link href="/termos-de-uso" className="hover:text-blue-300">Termos de Uso</Link>
                        <Link href="politica-de-privacidade" className="hover:text-blue-300">Politica de Privacidade</Link>
                        <Link href="enviar-feedback" className="hover:text-blue-300">enviar feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}