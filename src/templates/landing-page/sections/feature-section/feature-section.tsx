import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function FeatureSection() {
  return (
    <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 rounded-sm uppercase w-fit">
          Simples
        </span>
        <h2 className="text-gray-100 text-heading-lg font-sans">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 rounded-sm uppercase w-fit">
          Prático
        </span>
        <h2 className="text-gray-100 text-heading-lg font-sans">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
          <div className="bg-gray-500 grid grid-cols-1 gap-12 p-6 md:grid-cols-2 md:gap-4 rounded-lg">
            <div className="flex flex-col gap-4">
              <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 rounded-sm uppercase w-fit">
                Personalizável
              </span>
              <h2 className="text-gray-100 text-heading-lg font-sans">
                Tenha uma loja online personalizada com a cara da sua marca
              </h2>
              <Button
                asChild
                className="rounded-full mt-4 hidden md:mt-auto md:flex w-fit"
              >
                <Link href="/criar-loja">
                  Criar loja grátis
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-md overflow-hidden">
                  <Image
                    src="/feature-section.svg"
                    alt="features"
                    width={400}
                    height={330}
                    className="object-cover w-full" //imagem ocupe todo o espaço disponível
                  />
              </div>
              <Button asChild className="rounded-full mt-4 md:mt-auto md:hidden w-full">
                <Link href="/criar-loja">
                  Criar loja grátis
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
}
