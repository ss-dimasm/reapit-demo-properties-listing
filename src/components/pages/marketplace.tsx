import React, { FC, ReactElement, useEffect, useState } from 'react'

import { FlexContainer } from '@reapit/elements'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../core/connect-session'

import { centerSide, leftSide } from './__styles__/styles'

import LeftDashboardMarketPlace from '../ui/screen/marketplace/dashboard/leftDashboard'
import RightDashboardMarketPlace from '../ui/screen/marketplace/dashboard/rightDashboard'
import ChatButton from '../ui/screen/marketplace/dashboard/chatButton'

import type {
  BedRoomTotalType,
  PriceRangeTotalType,
  SelectedLocalityType,
  SelectedPropertyTypeType,
  MarketingModeFilterType,
  SortByFilterType,
  PropertiesMarketPlaceListQuery,
} from '../../interfaces/marketplace'
import useGetPropertiesList from '../../platform-api/marketplace/getPropertiesList'

type MarketPlaceType = {}
const MarketPlace: FC<MarketPlaceType> = (): ReactElement => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])

  // left filter
  const [selectedPropertyTypeFilter, setSelectedPropertyTypeFilter] =
    useState<SelectedPropertyTypeType>('House')
  const [selectedLocalityFilter, setSelectedLocalityFilter] =
    useState<SelectedLocalityType>('village')
  const [decidedPriceRange, setDecidedPriceRange] =
    useState<PriceRangeTotalType>({ min: 0, max: 150000000 })
  const [selectedPriceRangeType, setSelectedPriceRangeType] =
    useState<Exclude<MarketingModeFilterType, 'sellingAndLetting'>>('selling')
  const [decidedTotalBedRooms, setDecidedTotalBedRooms] =
    useState<BedRoomTotalType>({ min: 0, max: 100000 })

  // top filter
  const [selectedMarketingModeFilter, setSelectedMarketingModeFilter] =
    useState<MarketingModeFilterType>('sellingAndLetting')
  const [decidedAddressPropertyFilter, setDecidedAddressPropertyFilter] =
    useState<string>('')
  const [selectedSortByFilter, setSelectedSortByFilter] =
    useState<SortByFilterType>('-created')

  // filter query template
  const filter: PropertiesMarketPlaceListQuery = {
    propertyType: selectedPropertyTypeFilter,
    locality: selectedLocalityFilter,
    priceType: selectedPriceRangeType,
    priceRange: decidedPriceRange,
    bedRoom: decidedTotalBedRooms,
    marketingMode: selectedMarketingModeFilter,
    address: decidedAddressPropertyFilter,
    sortBy: selectedSortByFilter,
  }

  // useEffect here (onClick Button, and OnChange )

  // format filter
  const [formattedQuery, setFormattedQuery] =
    useState<PropertiesMarketPlaceListQuery>(filter)

  // change property type function
  const changePropertyType = (propertyType: SelectedPropertyTypeType): void =>
    setSelectedPropertyTypeFilter(propertyType)

  // change locality type
  const changeLocalityType = (localityType: SelectedLocalityType): void =>
    setSelectedLocalityFilter(localityType)

  // change price type
  const changePriceType = (
    priceType: Exclude<MarketingModeFilterType, 'sellingAndLetting'>
  ) => setSelectedPriceRangeType(priceType)

  // change price range
  const changePriceRange = (priceRange: PriceRangeTotalType): void =>
    setDecidedPriceRange(priceRange)

  // change total bedroom
  const changeTotalBedRoom = (bedRoom: BedRoomTotalType): void =>
    setDecidedTotalBedRooms(bedRoom)

  // change marketingMode
  const changeMarketingMode = (
    marketingMode: MarketingModeFilterType
  ): void => {
    setSelectedPriceRangeType('selling') // reset state
    setSelectedMarketingModeFilter(marketingMode)
  }

  // change address
  const changeAddressProperty = (currentAddress: string): void =>
    setDecidedAddressPropertyFilter(currentAddress)

  // change sortBy
  const changeSortBy = (sortByType: SortByFilterType): void =>
    setSelectedSortByFilter(sortByType)

  // handle button
  const clickedSearchButton = (): void => {
    setFormattedQuery(filter)
  }

  const data = useGetPropertiesList(connectSession!, formattedQuery!)

  return (
    <div>
      <FlexContainer isFlexJustifyBetween style={{ position: 'relative' }}>
        <div className={leftSide}>
          <LeftDashboardMarketPlace
            marketingMode={selectedMarketingModeFilter}
            selectedPropertyType={selectedPropertyTypeFilter}
            priceType={selectedPriceRangeType}
            changePropertyType={changePropertyType}
            changeLocalityType={changeLocalityType}
            changePriceType={changePriceType}
            changePriceRange={changePriceRange}
            changeTotalBedRoom={changeTotalBedRoom}
            clickedSearchButton={clickedSearchButton}
          />
        </div>
        <div className={centerSide}>
          <RightDashboardMarketPlace
            priceType={selectedPriceRangeType}
            queryData={data}
            changeAddressProperty={changeAddressProperty}
            changeMarketingMode={changeMarketingMode}
            changeSortBy={changeSortBy}
          />
        </div>
      </FlexContainer>
      <ChatButton />
    </div>
  )
}

export default MarketPlace
