import { Metadata } from "next";

const appName = process.env.NEXT_PUBLIC_APP_NAME || "Fyoia AI";

export const generateMetadata = ({
    title = `${appName} | Home`,
    description = `All-in-one AI platform for chat, coding, image generation, video creation, and voice agents — powered by Fyoia models.`,
    image = "/images/og-image.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/favicon.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});
