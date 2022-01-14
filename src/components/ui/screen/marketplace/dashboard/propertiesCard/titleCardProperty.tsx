import React, { FC, ReactElement } from 'react'
import { CardListSubHeading, Title } from '@reapit/elements'
import RentFrequently from './rentFrequently'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { getPropertyAddress, priceFormatting } from '../../../../../utils'

interface TitleCardPropertyType {
  propertyData: PropertyModel
  currentMarketingMode: boolean
}
const TitleCardProperty: FC<TitleCardPropertyType> = (props): ReactElement => {
  const { propertyData, currentMarketingMode } = props

  // data
  const address = getPropertyAddress(propertyData.address)
  let formattedPrice
  if (propertyData?.marketingMode === 'letting') {
    formattedPrice = priceFormatting(propertyData.letting!.rent!)
  } else if (propertyData?.marketingMode === 'selling') {
    formattedPrice = priceFormatting(propertyData.selling!.price!)
  } else {
    if (currentMarketingMode) {
      formattedPrice = priceFormatting(propertyData.selling!.price!)
    } else {
      formattedPrice = priceFormatting(propertyData.letting!.rent!)
    }
  }

  return (
    <>
      {(propertyData?.marketingMode === 'letting' ||
        propertyData?.marketingMode === 'sellingAndLetting') && (
        <RentFrequently {...props} />
      )}
      <Title hasNoMargin className="el-pb2">
        $ {formattedPrice}
      </Title>
      <CardListSubHeading>{address}</CardListSubHeading>
    </>
  )
}

export default TitleCardProperty
