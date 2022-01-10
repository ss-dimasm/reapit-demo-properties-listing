/* eslint-disable  */
import React, { FC, ReactElement, useState } from 'react'
import { FlexContainer } from '@reapit/elements'

import { leftSide, rightSide } from './__styles__/styles'

import LeftDashboardMarketPlace from '../ui/screen/marketplace/dashboard/leftDashboard'
import RightDashboardMarketPlace from '../ui/screen/marketplace/dashboard/rightDashboard'

import {
  BedRoomTotalType,
  PriceRangeTotalType,
  SelectedLocalityType,
  SelectedPropertyTypeType,
} from '../../interfaces/marketplace'

const MarketPlace: FC<{}> = (): ReactElement => {
  const [selectedPropertyTypeFilter, setSelectedPropertyTypeFilter] =
    useState<SelectedPropertyTypeType>('House')
  const [selectedLocalityFilter, setSelectedLocalityFilter] =
    useState<SelectedLocalityType>(undefined)
  const [decidedPriceRange, setDecidedPriceRange] = useState<
    PriceRangeTotalType | undefined
  >()
  const [decidedTotalBedRooms, setDecidedTotalBedRooms] = useState<
    BedRoomTotalType | undefined
  >()

  // change property type function
  const changePropertyType = (propertyType: SelectedPropertyTypeType) =>
    setSelectedPropertyTypeFilter(propertyType)

  const changeLocalityType = (localityType: SelectedLocalityType) =>
    setSelectedLocalityFilter(localityType)

  const changePriceRange = (priceRange: PriceRangeTotalType) =>
    setDecidedPriceRange(priceRange)

  const changeTotalBedRoom = (bedRoom: BedRoomTotalType) =>
    setDecidedTotalBedRooms(bedRoom)

  console.log(selectedPropertyTypeFilter)
  console.log(selectedLocalityFilter)
  console.log(decidedPriceRange)
  console.log(decidedTotalBedRooms)

  /**
   * @todo print search to JSON dummy data
   */
  return (
    <>
      <FlexContainer isFlexJustifyBetween>
        <div className={leftSide}>
          <LeftDashboardMarketPlace
            selectedPropertyType={selectedPropertyTypeFilter}
            changePropertyType={changePropertyType}
            changeLocalityType={changeLocalityType}
            changePriceRange={changePriceRange}
            changeTotalBedRoom={changeTotalBedRoom}
          />
        </div>
        <div className={rightSide}>
          <RightDashboardMarketPlace />
        </div>
      </FlexContainer>
    </>
  )
}

export default MarketPlace
