import { Plus_Jakarta_Sans, Caveat, Syne } from "next/font/google";
import localFont from "next/font/local";

export const heading = localFont({
    src: [
        {
            path: "../../public/fonts/Satoshi-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Black.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-Variable.woff2",
            weight: "100 900",
            style: "normal",
        },
    ],
    variable: "--font-heading",
});

export const base = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-base",
});

export const handwriting = Caveat({
    subsets: ["latin"],
    variable: "--font-handwriting",
    weight: ["400", "500", "600", "700"],
});

export const display = Syne({
    subsets: ["latin"],
    variable: "--font-display",
    weight: ["400", "500", "600", "700", "800"],
});
