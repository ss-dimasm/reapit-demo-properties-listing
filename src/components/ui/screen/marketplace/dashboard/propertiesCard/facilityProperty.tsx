import React, { FC, ReactElement } from 'react'

import {
  CardListItem,
  CardListItemTextPrimary,
  CardListItemTextSecondary,
  CardListItemTextWrap,
} from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { squareFeetFormatter } from '../../../../../utils'

interface FacilityPropertyType {
  propertyData: PropertyModel
}
const FacilityProperty: FC<FacilityPropertyType> = (props): ReactElement => {
  const { propertyData } = props

  const squareFeet = squareFeetFormatter(propertyData.internalArea!)
  return (
    <>
      <CardListItem className="el-pr4">
        <CardListItemTextWrap>
          <CardListItemTextPrimary>Bedroom</CardListItemTextPrimary>
          <CardListItemTextSecondary>
            {propertyData?.bedrooms}
          </CardListItemTextSecondary>
        </CardListItemTextWrap>
      </CardListItem>
      <CardListItem className="el-px4">
        <CardListItemTextWrap>
          <CardListItemTextPrimary>Bathroom</CardListItemTextPrimary>
          <CardListItemTextSecondary>
            {propertyData?.bathrooms}
          </CardListItemTextSecondary>
        </CardListItemTextWrap>
      </CardListItem>
      <CardListItem className="el-px4">
        <CardListItemTextWrap>
          <CardListItemTextPrimary>Square Feet</CardListItemTextPrimary>
          <CardListItemTextSecondary>{squareFeet}</CardListItemTextSecondary>
        </CardListItemTextWrap>
      </CardListItem>
    </>
  )
}

export default FacilityProperty
