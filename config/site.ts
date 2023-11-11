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
    github: "https://github.com/Naitone1/my-boutique",
    docs: "https://ui.shadcn.com",
  },
}
