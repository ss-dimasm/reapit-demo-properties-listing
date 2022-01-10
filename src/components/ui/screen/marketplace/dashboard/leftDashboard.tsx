import React, { FC } from 'react'
import { SecondaryNav } from '@reapit/elements'

import FilterComponent from './filter'
import { FilterComponentType } from '../../../../../interfaces/marketplace'

const LeftDashboardMarketPlace: FC<FilterComponentType> = (props) => {
  const {
    selectedPropertyType,
    changePropertyType,
    changeLocalityType,
    changePriceRange,
    changeTotalBedRoom,
  } = props

  return (
    <>
      <SecondaryNav style={{ position: 'sticky', top: '0px' }}>
        <FilterComponent
          changePropertyType={changePropertyType}
          selectedPropertyType={selectedPropertyType}
          changeLocalityType={changeLocalityType}
          changePriceRange={changePriceRange}
          changeTotalBedRoom={changeTotalBedRoom}
        />
      </SecondaryNav>
    </>
  )
}

export default LeftDashboardMarketPlace
