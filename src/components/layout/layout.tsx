import { Header } from "../header";
import { Footer } from "../footer";

type LayoutProps =  {
    children: React.ReactNode;
}

export function Layout( { children }: LayoutProps) {
    return (
        <div className="bg-black text-white relative flex min-h-screen flex-col dark">
            <Header />
            <main className="flex-1 flex flex-col mb-12">
                {children}
            </main>
            <Footer />            
        </div>
    )
}