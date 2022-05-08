import { Button } from '@kiwanoswap/uikit'

import { useTranslation } from 'contexts/Localization'

const StakeVaultButton = (props) => {
  const { t } = useTranslation()

  return (
    <Button {...props} disabled>
      {t('Stake WANO in IFO pool')}
    </Button>
  )
}

export default StakeVaultButton
