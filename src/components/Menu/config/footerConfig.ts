import { FooterLinkType } from '@kiwanoswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'mailto:contact@kiwanoproject.com',
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
        href: 'mailto:contact@kiwanoproject.com',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: t('Audits'),
        href: 'https://docs.kiwanoproject.com/',
      },
    ],
  },
]
