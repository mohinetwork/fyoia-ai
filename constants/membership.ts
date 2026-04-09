export const pricingPlans = [
    {
        id: 1,
        name: "Starter",
        price: {
            monthly: 0,
            yearly: 0
        },
        description: "Best for explore AI models",
        features: [
            { text: "1M AI Tokens Per Month", highlighted: false },
            { text: "Limited Access To Fyoia AI Models", highlighted: false },
            { text: "Monthly Token Reset", highlighted: false },
            { text: "Free Voice AI Chat ,Video & Image Generation", highlighted: false },
            { text: "Standard Generation Speed", highlighted: false },
            { text: "Community Support", highlighted: false }
        ],
        cta: {
            text: "Get Starter",
            href: "#"
        },
        popular: false
    },
    {
        id: 2,
        name: "Pro",
        price: {
            monthly: 15,
            yearly: 145
        },
        description: "Advance AI models with API access",
        features: [
            { text: "15M AI Tokens Per Month", highlighted: true },
            { text: "All Access To Fyoia AI Models", highlighted: true },
            { text: "Paid Tokens will Never Expires + Free Monthly Token Reset", highlighted: true },
            { text: "Extra Voice AI Chat ,Video & Image Generation Models", highlighted: true },
            { text: "Faster AI Response Speed", highlighted: true },
            { text: "24/7 priority support", highlighted: true }
        ],
        cta: {
            text: "Get Pro",
            href: "#"
        },
        popular: true,
        badge: "POPULAR",
        yearlyDiscount: "2 months free"
    }
];

export const trustedCompanies = {
    title: "Trusted by teams worldwide",
    description: "Best For Production & Enterprises to use high models in own project",
    cta: {
        text: "Talk to Sales",
        href: "#"
    }
};

