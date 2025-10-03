import { useCallback, useMemo } from "react";
import { ShareConfig, SOCIAL_PROVIDERS, SocialProvider } from "./social-providers"

type UseShareConfigProps = ShareConfig & {
    clipboardTimeout?: number,
}

export function useShare({ url, title, text }: UseShareConfigProps) {

    const shareConfig = useMemo(() => ({
        url,
        ...(title && { title }),
        ...(text && { text })
    }),[url, title, text]);

    const share = useCallback((provider: SocialProvider ) => {
        try {
            const providerConfig = SOCIAL_PROVIDERS[provider];

            if(!providerConfig) {
                throw new Error(`Provider não encontrado: ${provider}`);
            }

            const shareUrl = providerConfig.shareUrl(shareConfig);
            const shareWindow = window.open(shareUrl, '_blank', 'width=600, height=600, location=yes, status=yes');

            return !!shareWindow;

        }catch(error) {
            console.error(error);
            return false;
        }
    },[shareConfig]); //quando o link shareConfig mudar, os valores serão recalculados.

    const shareButtons = useMemo(() => [
        ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
            provider: key,
            name: provider.name,
            icon: provider.icon,
            action: () => share(key as SocialProvider)
        }))
    ],[share]);

    return {
        shareButtons
    }
}