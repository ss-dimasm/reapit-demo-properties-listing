import React, { FC } from 'react'

import { Button, FlexContainer } from '@reapit/elements'

import FacilityPropertyTypeFilter from './facilityPropertyTypeFilter'
import LocalityPropertyTypeFilter from './localityPropertyTypeFilter'
import PriceRangePropertyTypeFilter from './priceRangePropertyTypeFilter'
import PropertyTypeFilter from './propertyTypeFilter'
import { FilterComponentType } from '../../../../../../interfaces/marketplace'

const FilterComponent: FC<FilterComponentType> = (props) => {
  const {
    marketingMode,
    selectedPropertyType,
    priceType,
    changePropertyType,
    changeLocalityType,
    changePriceType,
    changePriceRange,
    changeTotalBedRoom,
    clickedSearchButton,
  } = props

  return (
    <>
      <div>
        <div>
          <PropertyTypeFilter
            changePropertyType={changePropertyType}
            selectedPropertyType={selectedPropertyType}
          />
        </div>
        <div className="el-my6">
          <LocalityPropertyTypeFilter changeLocalityType={changeLocalityType} />
        </div>
        <div className="el-my6">
          <PriceRangePropertyTypeFilter
            marketingMode={marketingMode}
            priceType={priceType}
            changePriceType={changePriceType}
            changePriceRange={changePriceRange}
          />
        </div>
        <div className="el-my6">
          <FacilityPropertyTypeFilter changeTotalBedRoom={changeTotalBedRoom} />
        </div>
        <FlexContainer isFlexJustifyBetween className="el-mt8">
          <Button>reset</Button>
          <Button intent="critical" chevronRight onClick={clickedSearchButton}>
            Search
          </Button>
        </FlexContainer>
      </div>
    </>
  )
}

export default FilterComponent
