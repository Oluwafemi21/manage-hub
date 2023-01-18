import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    theme: {
        fontFamily: {
            "dm-sans": ["DM Sans", "sans-serif"],
            clash: ["Clash Display", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#5352ED",
                red: "#ccc",
            },
            boxShadow: {
                vertical: "0 1px 0 0 #5352ED",
            },
        },
    },
};
