import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" title="Página Inicial">
      <Image 
        src="/Logo.svg" 
        alt="Logo site" 
        width={116} 
        height={32} 
        />
    </Link>
  );
}
