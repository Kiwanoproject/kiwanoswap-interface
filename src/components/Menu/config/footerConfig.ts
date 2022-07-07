import { FooterLinkType } from '@KiwanoSwap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.KiwanoSwap.io/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Blog'),
        href: 'https://blog.kiwanoproject.com',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.KiwanoSwap.io/contact-us/customer-support',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: t('Audits'),
        href: 'https://docs.KiwanoSwap.io/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
    ],
  },
]
