import React, { FC, ReactElement } from 'react'
import { CardListSubHeading, Title } from '@reapit/elements'
import RentFrequently from './rentFrequently'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { getPropertyAddress, priceFormatting } from '../../../../../utils'

interface TitleCardPropertyType {
  propertyData: PropertyModel
}
const TitleCardProperty: FC<TitleCardPropertyType> = (props): ReactElement => {
  const { propertyData } = props

  // data
  const address = getPropertyAddress(propertyData.address)
  let formattedPrice
  if (propertyData?.marketingMode === 'letting') {
    formattedPrice = priceFormatting(propertyData.letting!.rent!)
  } else {
    formattedPrice = priceFormatting(propertyData.selling!.price!)
  }

  return (
    <>
      {propertyData?.marketingMode === 'letting' && (
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
