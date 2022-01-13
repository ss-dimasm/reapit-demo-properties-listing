import React, { FC, useEffect } from 'react'
import { CardImageWrap, SmallText } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import {
  formatMarketingModeProperty,
  marketingModeColorTheme,
} from '../../../../../utils'
// eslint-disable-next-line max-len
// import useGetPropertiesImageEachProperty from '../../../../../../platform-api/marketplace/getPropertiesImageEachProperty'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../../../../../core/connect-session'

interface PropertyImageType {
  propertyData: PropertyModel
}
const PropertyImage: FC<PropertyImageType> = (props) => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])
  const { propertyData } = props

  const statusMarketing = formatMarketingModeProperty(
    propertyData?.marketingMode
  )

  const colorTheme = marketingModeColorTheme(propertyData?.marketingMode)
  // const { data } = useGetPropertiesImageEachProperty(connectSession!, {
  //   propertyId: propertyData.id!,
  // })

  // console.log(data)
  return (
    <CardImageWrap
      style={{
        width: '100%',
        height: '250px',
        position: 'relative',
        padding: '0',
        margin: '0',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '0',
          width: 'auto',
          padding: '0.3rem 1rem',
          backgroundColor: `${colorTheme}`,
        }}
      >
        <SmallText hasNoMargin style={{ color: 'var(--color-white)' }}>
          {statusMarketing}
        </SmallText>
      </div>
      <img
        src="https://i2.au.reastatic.net/800x600-format=webp/76e47144329624154fa05b5f0dfaad9ac1df6db68bd9e85fe8c04f3f50d28013/image.jpg"
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
          borderBottom: `0.4rem solid ${colorTheme}`,
        }}
      />
    </CardImageWrap>
  )
}

export default PropertyImage
