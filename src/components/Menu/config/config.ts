import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  /* EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon, */
  MoreIcon,
} from '@kiwanoswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
// import { nftsBaseUrl } from 'views/Nft/market/constants'
// import { perpLangMap } from 'utils/getPerpetualLanguageCode'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        label: t('Blog'),
        href: 'https://blog.kiwanoproject.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.KiwanoSwap.io',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
