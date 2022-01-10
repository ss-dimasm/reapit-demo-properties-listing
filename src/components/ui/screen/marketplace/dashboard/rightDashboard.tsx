import { useReapitConnect } from '@reapit/connect-session'
import { FlexContainer, InputGroup, Label, Select } from '@reapit/elements'

import React, { ReactElement, useEffect } from 'react'
import { reapitConnectBrowserSession } from '../../../../../core/connect-session'
import useGetPropertiesList, {
  PropertiesMarketPlaceListQuery,
} from '../../../../../platform-api/marketplace/getPropertiesList'
import PropertiesCardComponent from './propertiesCard'

const RightDashboardMarketPlace = (): ReactElement => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])

  const filterData: PropertiesMarketPlaceListQuery = {
    propertyType: 'House',
    locality: 'rural',
    priceRange: {
      min: 600000,
      max: 650000,
    },
    bedRoom: {
      min: 5,
      max: 5,
    },
  }
  const { status } = useGetPropertiesList(connectSession!, filterData)
  console.log(status)
  return (
    <>
      <FlexContainer isFlexJustifyBetween isFlexAlignCenter>
        <FlexContainer>
          <Select>
            <option value="letting">Rent</option>
            <option value="selling">Buy</option>
          </Select>
          <InputGroup
            type="text"
            icon="searchSystem"
            placeholder="Search by Address"
          />
        </FlexContainer>
        <div>
          <Label>Sort By</Label>
          <Select>
            <option value="latest">Latest</option>
            <option value="bedrooms">Bedrooms</option>
            <option value="price">Price</option>
          </Select>
        </div>
      </FlexContainer>
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
