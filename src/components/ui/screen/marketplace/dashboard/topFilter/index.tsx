import React, { FC, ReactElement } from 'react'

import { FlexContainer, InputGroup, Label, Select } from '@reapit/elements'
import {
  MarketingModeFilterType,
  SortByFilterType,
} from '../../../../../../interfaces/marketplace'
import { positionSticky } from './index.style'

interface TopFilterComponentType {
  changeMarketingMode: (marketingMode) => void
  changeAddressProperty: (marketingMode) => void
  changeSortBy: (marketingMode) => void
}

const TopFilterComponent: FC<TopFilterComponentType> = (
  props
): ReactElement => {
  const { changeMarketingMode, changeAddressProperty, changeSortBy } = props

  // marketing mode handler
  const setMarketingMode = (marketingMode: MarketingModeFilterType): void =>
    changeMarketingMode(marketingMode)

  // address change handler
  const setAddressLocation = (addressLocation: string): void =>
    changeAddressProperty(addressLocation)

  // address change handler
  const setSortByFilter = (sortByType: SortByFilterType): void =>
    changeSortBy(sortByType)

  return (
    <FlexContainer
      isFlexJustifyBetween
      isFlexAlignCenter
      className={positionSticky}
    >
      <FlexContainer>
        <Select
          onChange={(e) =>
            setMarketingMode(e.currentTarget.value as MarketingModeFilterType)
          }
        >
          <option value="sellingAndLetting">Rent/Buy</option>
          <option value="letting">Rent</option>
          <option value="selling">Buy</option>
        </Select>
        <InputGroup
          type="text"
          icon="searchSystem"
          placeholder="Search by Address"
          onKeyUp={(e) => setAddressLocation(e.currentTarget.value as string)}
        />
      </FlexContainer>
      <div>
        <Label>Sort By</Label>
        <Select
          onChange={(e) =>
            setSortByFilter(e.currentTarget.value as SortByFilterType)
          }
        >
          <option value="created">Latest</option>
          <option value="bedrooms">Bedrooms</option>
          <option value="price">Price</option>
        </Select>
      </div>
    </FlexContainer>
  )
}

export default TopFilterComponent
