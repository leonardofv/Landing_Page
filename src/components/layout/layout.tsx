import { Inter } from "next/font/google";
import { Header } from "../header";
import { Footer } from "../footer";

type LayoutProps =  {
    children: React.ReactNode;
}

const fontInter = Inter({ subsets: ['latin'] }); 

export function Layout( { children }: LayoutProps) {
    return (
        // todos os textos dentro desse <div> vão usar a fonte Inter, sem precisar importar CSS manualmente.
        <div className={`${fontInter.className} bg-gray-700 relative flex min-h-screen flex-col dark`}>
            <Header />
            <main className="flex-1 flex flex-col mb-12">
                {children}
            </main>
            <Footer />            
        </div>
    )
}