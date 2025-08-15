import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

type ActiveLinkProps = {
    children: React.ReactNode;
} & LinkProps

export function ActiveLink({ children, href, ...rest  }: ActiveLinkProps ) {

    const router = useRouter();
    const isCurrentPath = 
        router.asPath === href || 
        router.asPath === rest.as || 
        router.asPath.startsWith(String(rest.as));

    return (
       <Link href={href} className={cn("border-2 text-sm font-medium transition-colors hover:text-blue-300", isCurrentPath ? 'text-blue-500' : 'text-muted-foreground')}>{children}</Link> 
    )
}