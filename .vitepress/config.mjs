import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Esor",
  description: "Documentation for the Esor JavaScript framework",
  lang: "en-US",
  head: [["link", { rel: "icon", type: "image/png", href: "/logo.png" }]],
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    es: {
      label: "Spanish",
      lang: "es",
      link: "/es/guide",
    },
  },

  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/introduction" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Why Esor", link: "/guide/introduction/why" },
          {
            text: "Getting Started",
            link: "/guide/introduction/getting-started",
          },
          { text: "Tutorial", link: "/guide/introduction/tutorial" },
        ],
      },
      {
        text: "Essentials",
        items: [
          { text: "Components", link: "/guide/essentials/components" },
          { text: "Hooks", link: "/guide/essentials/hooks" },
          { text: "Lyfecycle", link: "/guide/essentials/lifecycle" },
          { text: "Reactivity", link: "/guide/essentials/reactivity" },
          { text: "Templates", link: "/guide/essentials/templating" },
          { text: "Usando Stores", link: "/guide/essentials/stores" },
          { text: "Usando Router", link: "/guide/essentials/router" },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/esorjs/esor" },
      { icon: "x", link: "https://x.com/esor_js" },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/esorjs/esor/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/juancristobalgd1">Juan Cristobal</a>',
    },
  },
});
