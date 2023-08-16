/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                rsq: {
                    100: "#1C3144", // Primary 1
                    200: "#FC4850", // Primary 2
                    300: "#DBF4AD", // Secondary 1
                    400: "#1B998B", // Secondary 2
                    500: "#F5F5F5", // Secondary 3
                    600: "#DBDBDB", // Labels
                    700: "#111827", // Table rows title
                    800: "#6B7280", // Table rows subtitle
                    900: "#4B4949", // Paragraph
                },
                merca: {
                    100: "#29335c", // Header
                    200: "#019c57", // Official Logo Mercadona
                },
            },
            animation: {
                marquee: "marquee 15s linear infinite",
                marquee2: "marquee2 15s linear infinite",
                marquee3: "marquee3 20s linear infinite",
                marquee4: "marquee4 20s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                marquee3: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                marquee4: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
