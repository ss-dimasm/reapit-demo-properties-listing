import React from 'react'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import { NavResponsive } from '@reapit/elements'
import { useHistory } from 'react-router'

export const Nav: React.FC = () => {
  const { connectLogoutRedirect } = useReapitConnect(
    reapitConnectBrowserSession
  )

  const history = useHistory()
  return (
    <NavResponsive
      options={[
        {
          itemIndex: 0,
        },
        {
          itemIndex: 1,
          href: window.reapit.config.marketplaceUrl,
          iconId: 'appsMenu',
          text: 'Apps',
        },
        {
          itemIndex: 2,
          href: 'marketplace',
          iconId: 'marketplaceMenu',
          text: 'Home',
          callback: () => history.push('/marketplace'),
        },
        {
          itemIndex: 3,
          callback: connectLogoutRedirect,
          isSecondary: true,
          iconId: 'logoutMenu',
          text: 'Logout',
        },
      ]}
    />
  )
}

export default Nav
