// windi.config.ts
import { defineConfig } from "windicss/helpers";
import plugin from "windicss/plugin";

export default defineConfig({
  important: true,
  theme: {
    fontFamily: {
      lato: ["Lato", "ui-sans-serif", "system-ui"],
      ogg: ["Ogg", "ui-serif"],
      antro: ["Antro Vectra", "ui-serif"],
      cormorant: ["Cormorant", "ui-serif"],
    },
    extend: {
      colors: {
        transparent: "#000000",
        black: "#000000",
        white: "#ffffff",
        "bridal-heath": {
          "50": "#fffffe",
          "100": "#fffefe",
          "200": "#fffefc",
          "300": "#fffdfa",
          "400": "#fefbf7",
          "500": "#fef9f3",
          "600": "#e5e0db",
          "700": "#bfbbb6",
          "800": "#989592",
          "900": "#7c7a77",
        },
        linen: {
          "50": "#fffefe",
          "100": "#fefdfc",
          "200": "#fdfbf8",
          "300": "#fcf9f4",
          "400": "#faf4eb",
          "500": "#f8efe3",
          "600": "#dfd7cc",
          "700": "#bab3aa",
          "800": "#958f88",
          "900": "#726d67",
        },
        "peach-schnapps": {
          "50": "#fefdfd",
          "100": "#fefbfa",
          "200": "#fcf4f3",
          "300": "#faeeec",
          "400": "#f7e1dd",
          "500": "#f3d4cf",
          "600": "#dbbfba",
          "700": "#b69f9b",
          "800": "#927f7c",
          "900": "#776865",
        },
        "gold-sand": {
          "50": "#fefbf9",
          "100": "#fdf8f4",
          "200": "#f9ede2",
          "300": "#f5e3d1",
          "400": "#eecdaf",
          "500": "#e7b88c",
          "600": "#d0a67e",
          "700": "#ad8a69",
          "800": "#8b6e54",
          "900": "#634c37",
        },
        tuna: {
          "50": "#f5f5f5",
          "100": "#ebeaeb",
          "200": "#cdccce",
          "300": "#afadb0",
          "400": "#726f74",
          "500": "#363139",
          "600": "#312c33",
          "700": "#29252b",
          "800": "#201d22",
          "900": "#1a181c",
        },
      },
    },
  },
  plugins: [
    // ...
    require("windicss/plugin/forms"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-mask-t-0": {
          "-webkit-mask-image":
            "linear-gradient(to top, rgba(0, 0, 0, 0.4) 60%, transparent 100%)",
          maskImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.4) 60%, transparent 100%)",
        },
        ".bg-mask-b-0": {
          "-webkit-mask-image":
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 60%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 60%, transparent 100%)",
        },
      });
    }),
  ],
});
