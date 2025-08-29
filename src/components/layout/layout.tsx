import { Inter } from "next/font/google";
import { Header } from "./header";
import { Footer } from "./footer";

const fontInter = Inter({ 
    subsets: ['latin'], 
    weight: ['400', '500'],
    variable: '--font-inter', 
}); 

type LayoutProps =  {
    children: React.ReactNode;
}

export function Layout( { children }: LayoutProps) {
    return (
        // todos os textos dentro desse <div> vão usar a fonte Inter, sem precisar importar CSS manualmente.
        <div className={`${fontInter.className} bg-gray-700 relative flex min-h-screen flex-col`}>
            <Header />
            <main className="flex-1 flex flex-col mt-10 mb-12">
                {children}
            </main>
            <Footer />            
        </div>
    )
}