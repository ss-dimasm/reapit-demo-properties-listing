/* eslint-disable  */
import React, { FC, useEffect } from 'react'
import { CardImageWrap, SmallText } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import {
  formatMarketingModeIsSellingAndLettingProperty,
  formatMarketingModeProperty,
  marketingModeColorTheme,
} from '../../../../../utils'

// import useGetPropertiesImageEachProperty from '../../../../../../platform-api/marketplace/getPropertiesImageEachProperty'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../../../../../core/connect-session'

import { HiSwitchHorizontal } from 'react-icons/hi'
import { MarketingModeFilterType } from '../../../../../../interfaces/marketplace'
interface PropertyImageType {
  propertyData: PropertyModel
  currentMarketingMode: boolean
  toggleMarketingMode: (marketingMode: boolean) => void
}

const PropertyImage: FC<PropertyImageType> = (props) => {
  const { toggleMarketingMode, currentMarketingMode, propertyData } = props

  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])

  const changeMarketingModeButton: React.MouseEventHandler<
    HTMLDivElement
  > = () => {
    toggleMarketingMode(!currentMarketingMode)
  }

  const statusMarketing = formatMarketingModeProperty(
    propertyData?.marketingMode as MarketingModeFilterType
  )

  const colorTheme = marketingModeColorTheme(
    propertyData?.marketingMode as MarketingModeFilterType
  )

  // const { data } = useGetPropertiesImageEachProperty(connectSession!, {
  //   propertyId: propertyData.id!,
  // })

  // console.log(data)

  let switchButton
  let switchNotification
  if (propertyData?.marketingMode === 'sellingAndLetting') {
    const currentMarketingModeText =
      formatMarketingModeIsSellingAndLettingProperty(currentMarketingMode)
    switchNotification = (
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0px',
          height: '1.5rem',
          width: 'auto',
          padding: '0.3rem 1.5rem 1.5rem 0.5rem',
          borderRadius: '0 30px 0 0',
          backgroundColor: `${colorTheme}`,
        }}
      >
        <SmallText
          hasNoMargin
          style={{
            fontSize: '0.85rem',
            color: 'var(--color-white)',
            paddingBottom: '10px',
          }}
        >
          {currentMarketingModeText}
        </SmallText>
      </div>
    )
    switchButton = (
      <>
        <div
          style={{
            backgroundColor: 'var(--intent-primary-light)',
            position: 'absolute',
            top: '0px',
            right: '5px',
            borderRadius: '0 0 50% 50%',
            height: '2rem',
            width: '2rem',
            cursor: 'pointer',
            userSelect: 'none',
          }}
          className="el-p4"
          onClick={changeMarketingModeButton}
        >
          <HiSwitchHorizontal />
        </div>
      </>
    )
  }
  return (
    <>
      <CardImageWrap
        style={{
          width: '100%',
          height: '250px',
          position: 'relative',
          padding: '0',
          margin: '0',
        }}
      >
        {switchNotification}
        {switchButton}
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
    </>
  )
}

export default PropertyImage
