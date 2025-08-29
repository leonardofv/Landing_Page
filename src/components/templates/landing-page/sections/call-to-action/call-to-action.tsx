import { ArrowRight, Store } from "lucide-react";
import { Button } from "../../../../ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to bg-gray-700">
      
      <div className="bg-[url('/background-footer.svg')] absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"/>
      
      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-cyan-300 w-fit rounded-full hover:bg-cyan-900">
            <Store className="text-cyan-100" />
          </div>
          <h2
            className="font-sans text-gray-100 text-heading-lg text-balance"
          >
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>
          <Button variant={"primary"} className="mt-6" asChild>
            <Link href="criar-loja">
              Criar loja grátis <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
