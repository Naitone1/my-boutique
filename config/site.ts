export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Naitone",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Galerie",
      href: "/galerie",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Boutique",
      href: "/boutique",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
