export const site = {
  name: "LRE",
  tagline: "Site coming soon",
  description: "LRE — a new website. Content and branding coming soon.",
} as const;

export const navLinks = [
  { key: "home", label: "Home", href: "/" },
] as const;

export type NavKey = (typeof navLinks)[number]["key"];
