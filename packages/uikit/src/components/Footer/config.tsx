import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "mailto:contact@kiwanoproject.com",
      },
      {
        label: "Blog",
        href: "https://blog.kiwanoproject.com/",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "mailto:contact@kiwanoproject.com",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Audits",
        href: "https://docs.kiwanoproject.com/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/projectkiwano",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/kiwanoproject",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://blog.kiwanoproject.com/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
