import { Routes } from "./routes";

export const NAV_LINKS = [
    {
        label: "Difference",
        href: Routes.Difference,
    },
    {
        label: "Workflow",
        href: Routes.Workflow,
    },
    {
        label: "Capabilities",
        href: Routes.Capabilities,
    },
    {
        label: "Integrations",
        href: Routes.Integrations,
    },
    {
        label: "Membership",
        href: Routes.Membership,
    },
] as const;

export const footerLinks = {
    product: [
        { label: "Features", href: "#capabilities" },
        { label: "Integrations", href: "#integrations" },
        { label: "Pricing", href: "#membership" }
    ],
    resources: [
        { label: "Support", href: Routes.Support }
    ],
    company: [
        { label: "About", href: Routes.About },
        { label: "Terms & Conditions", href: Routes.Terms },
        { label: "Cookie Policy", href: Routes.Cookies },
        { label: "Contact", href: "https://mail.google.com/mail/?view=cm&to=fyoiaaidev@gmail.com" }
    ]
};

export const socialLinks = [];
