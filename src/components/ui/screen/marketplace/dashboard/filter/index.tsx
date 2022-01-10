import React, { FC } from 'react'

import { Button, FlexContainer } from '@reapit/elements'

import FacilityPropertyTypeFilter from './facilityPropertyTypeFilter'
import LocalityPropertyTypeFilter from './localityPropertyTypeFilter'
import PriceRangePropertyTypeFilter from './priceRangePropertyTypeFilter'
import PropertyTypeFilter from './propertyTypeFilter'
import { FilterComponentType } from '../../../../../../interfaces/marketplace'

const FilterComponent: FC<FilterComponentType> = (props) => {
  const {
    selectedPropertyType,
    changePropertyType,
    changeLocalityType,
    changePriceRange,
    changeTotalBedRoom,
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
          <PriceRangePropertyTypeFilter changePriceRange={changePriceRange} />
        </div>
        <div className="el-my6">
          <FacilityPropertyTypeFilter changeTotalBedRoom={changeTotalBedRoom} />
        </div>
        <FlexContainer isFlexJustifyBetween className="el-mt8">
          <Button>reset</Button>
          <Button intent="critical" chevronRight>
            Search
          </Button>
        </FlexContainer>
      </div>
    </>
  )
}

export default FilterComponent
