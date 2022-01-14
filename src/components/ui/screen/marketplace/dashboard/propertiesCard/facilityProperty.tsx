import React, { FC, ReactElement } from 'react'

import { CardListItemTextSecondary, FlexContainer } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import {
  MdOutlineBathtub,
  MdOutlineBed,
  MdOutlineSquareFoot,
} from 'react-icons/md'

import { squareFeetFormatter } from '../../../../../utils'

interface FacilityPropertyType {
  propertyData: PropertyModel
}
const FacilityProperty: FC<FacilityPropertyType> = (props): ReactElement => {
  const { propertyData } = props

  const squareFeet = squareFeetFormatter(propertyData.internalArea!)
  return (
    <>
      <FlexContainer>
        <div className="el-pr4">
          <FlexContainer isFlexJustifyBetween>
            <MdOutlineBed
              size="1.5rem"
              className="el-mr2"
              color="var(--color-grey-dark)"
            />
            <CardListItemTextSecondary className="el-pt1">
              {propertyData?.bedrooms}
            </CardListItemTextSecondary>
          </FlexContainer>
        </div>
        <div className="el-px4">
          <FlexContainer isFlexJustifyBetween>
            <MdOutlineBathtub
              size="1.5rem"
              className="el-mr2"
              color="var(--color-grey-dark)"
            />
            <CardListItemTextSecondary className="el-pt1">
              {propertyData?.bathrooms}
            </CardListItemTextSecondary>
          </FlexContainer>
        </div>
        <div className="el-px4">
          <FlexContainer>
            <MdOutlineSquareFoot
              size="1.5rem"
              className="el-mr2"
              color="var(--color-grey-dark)"
            />
            <CardListItemTextSecondary className="el-pt1">
              {squareFeet}
            </CardListItemTextSecondary>
          </FlexContainer>
        </div>
      </FlexContainer>
    </>
  )
}

export default FacilityProperty
