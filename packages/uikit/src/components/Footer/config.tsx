import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.KiwanoSwap.io/contact-us",
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
        href: "Support https://docs.KiwanoSwap.io/contact-us/customer-support",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Audits",
        href: "https://docs.KiwanoSwap.io/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/pancakeswap",
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
