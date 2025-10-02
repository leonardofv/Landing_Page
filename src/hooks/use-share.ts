import { ShareConfig } from "./social-providers"

type UseShareConfigProps = ShareConfig & {
    clipboardTimeout?: number,
}

export function useShare({ url, title, text }: UseShareConfigProps) {

    const shareConfig = {
        url,
        ...(title && { title }),
        ...(text && { text })
    }

    return {}
}