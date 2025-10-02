import { Linkedin, Facebook, Slack } from "lucide-react";


export type ShareConfig = {
    url: string,
    title?: string,
    text?: string,
}


export const SOCIAL_PROVIDERS = {

    linkedin: {
        name: 'LinkedIn',
        icon: <Linkedin className="h-4 w-4" />,
        shareUrl: (config: ShareConfig) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`
    },
    facebook: {
        name: 'LinkedIn',
        icon: <Facebook className="h-4 w-4" />,
        shareUrl: (config: ShareConfig) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`
    },
    slack: {
        name: 'LinkedIn',
        icon: <Slack className="" />,
        shareUrl: (config: ShareConfig) => `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || '')}`
    }
}