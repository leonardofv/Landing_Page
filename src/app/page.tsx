import { LandingPage } from "@/templates/landing-page";
import type { Metadata } from "next";
// import { ErrorComponent } from "./component";

export const metadata: Metadata = {
    title: 'site.set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    robots: 'index, follow',
    // openGraph: {

    // };
};


export default function HomePage() {
    return (
        <LandingPage />
        // <ErrorComponent />
    );
};