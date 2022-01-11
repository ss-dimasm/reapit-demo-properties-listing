/* eslint-disable  */
import React, { FC, ReactElement, useEffect, useState } from 'react'
import { FlexContainer } from '@reapit/elements'

import { leftSide, rightSide } from './__styles__/styles'

import LeftDashboardMarketPlace from '../ui/screen/marketplace/dashboard/leftDashboard'
import RightDashboardMarketPlace from '../ui/screen/marketplace/dashboard/rightDashboard'

import {
  BedRoomTotalType,
  PriceRangeTotalType,
  SelectedLocalityType,
  SelectedPropertyTypeType,
  MarketingModeFilterType,
  SortByFilterType,
  PropertiesMarketPlaceListQuery,
} from '../../interfaces/marketplace'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import useGetPropertiesList from '../../platform-api/marketplace/getPropertiesList'

const MarketPlace: FC<{}> = (): ReactElement => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])

  // left filter
  const [selectedPropertyTypeFilter, setSelectedPropertyTypeFilter] =
    useState<SelectedPropertyTypeType>('House')
  const [selectedLocalityFilter, setSelectedLocalityFilter] =
    useState<SelectedLocalityType>('')
  const [decidedPriceRange, setDecidedPriceRange] =
    useState<PriceRangeTotalType>({ min: 0, max: 15000000 })
  const [decidedTotalBedRooms, setDecidedTotalBedRooms] =
    useState<BedRoomTotalType>({ min: 0, max: 15 })

  // top filter
  const [selectedMarketingModeFilter, setSelectedMarketingModeFilter] =
    useState<MarketingModeFilterType>('letting')
  const [decidedAddressPropertyFilter, setDecidedAddressPropertyFilter] =
    useState<string>('')
  const [selectedSortByFilter, setSelectedSortByFilter] =
    useState<SortByFilterType>('-created')

  // format filter
  const [formattedQuery, setFormattedQuery] = useState<
    PropertiesMarketPlaceListQuery | undefined
  >()

  // useEffect here (onClick Button, and OnChange in )

  // change property type function
  const changePropertyType = (propertyType: SelectedPropertyTypeType): void =>
    setSelectedPropertyTypeFilter(propertyType)

  // change locality type
  const changeLocalityType = (localityType: SelectedLocalityType): void =>
    setSelectedLocalityFilter(localityType)

  // change price range
  const changePriceRange = (priceRange: PriceRangeTotalType): void =>
    setDecidedPriceRange(priceRange)

  // change total bedroom
  const changeTotalBedRoom = (bedRoom: BedRoomTotalType): void =>
    setDecidedTotalBedRooms(bedRoom)

  // change marketingMode
  const changeMarketingMode = (marketingMode: MarketingModeFilterType): void =>
    setSelectedMarketingModeFilter(marketingMode)

  // change address
  const changeAddressProperty = (currentAddress: string): void =>
    setDecidedAddressPropertyFilter(currentAddress)

  // change sortBy
  const changeSortBy = (sortByType: SortByFilterType): void =>
    setSelectedSortByFilter(sortByType)

  // handle button
  const clickedSearchButton = (): void => {
    const filter: PropertiesMarketPlaceListQuery = {
      propertyType: selectedPropertyTypeFilter,
      locality: selectedLocalityFilter,
      priceRange: decidedPriceRange,
      bedRoom: decidedTotalBedRooms,
      marketingMode: selectedMarketingModeFilter,
      address: decidedAddressPropertyFilter,
      sortBy: selectedSortByFilter,
    }
    setFormattedQuery(filter)
  }
  const { data } = useGetPropertiesList(connectSession!, formattedQuery!)
  console.log(data)

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
            clickedSearchButton={clickedSearchButton}
          />
        </div>
        <div className={rightSide}>
          <RightDashboardMarketPlace
            changeAddressProperty={changeAddressProperty}
            changeMarketingMode={changeMarketingMode}
            changeSortBy={changeSortBy}
          />
        </div>
      </FlexContainer>
    </>
  )
}

export default MarketPlace
