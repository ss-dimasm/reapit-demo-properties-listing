import React, { FC } from 'react'
import { SecondaryNav } from '@reapit/elements'

import FilterComponent from './leftFilter'
import { FilterComponentType } from '../../../../../interfaces/marketplace'

const LeftDashboardMarketPlace: FC<FilterComponentType> = (props) => {
  const {
    selectedPropertyType,
    changePropertyType,
    changeLocalityType,
    changePriceRange,
    changeTotalBedRoom,
    clickedSearchButton,
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
          clickedSearchButton={clickedSearchButton}
        />
      </SecondaryNav>
    </>
  )
}

export default LeftDashboardMarketPlace
