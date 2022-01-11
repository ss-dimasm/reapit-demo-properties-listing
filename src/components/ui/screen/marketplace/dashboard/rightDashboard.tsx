import React, { FC, ReactElement } from 'react'

import { FlexContainer } from '@reapit/elements'

import PropertiesCardComponent from './propertiesCard'
import TopFilterComponent from './topFilter'

interface RightDashboardMarketPlaceType {
  changeMarketingMode: (marketingMode) => void
  changeAddressProperty: (marketingMode) => void
  changeSortBy: (marketingMode) => void
}
const RightDashboardMarketPlace: FC<RightDashboardMarketPlaceType> = (
  props
): ReactElement => {
  const { changeAddressProperty, changeSortBy, changeMarketingMode } = props
  return (
    <>
      <TopFilterComponent
        changeAddressProperty={changeAddressProperty}
        changeMarketingMode={changeMarketingMode}
        changeSortBy={changeSortBy}
      />
      <FlexContainer isFlexJustifyBetween isFlexWrap>
        <PropertiesCardComponent />
        <PropertiesCardComponent />
        <PropertiesCardComponent />
        <PropertiesCardComponent />
        <PropertiesCardComponent />
        <PropertiesCardComponent />
        <PropertiesCardComponent />
        <PropertiesCardComponent />
      </FlexContainer>
    </>
  )
}

export default RightDashboardMarketPlace
