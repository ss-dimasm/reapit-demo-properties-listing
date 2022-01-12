/* eslint-disable */
import React, { FC, ReactElement } from 'react'

import { FlexContainer } from '@reapit/elements'
import { UseQueryResult } from 'react-query'

import PropertiesCardComponent from './propertiesCard'
import TopFilterComponent from './topFilter'

import { PagedResultPropertyModel } from '../../../../../generated/graphql'
import LoadingIndicator from '../../../loadingIndicator'
import {
  PropertyModel,
  PropertyModelPagedResult,
} from '@reapit/foundations-ts-definitions'

interface RightDashboardMarketPlaceType {
  changeMarketingMode: (marketingMode) => void
  changeAddressProperty: (marketingMode) => void
  changeSortBy: (marketingMode) => void
  queryData: UseQueryResult<PagedResultPropertyModel[] | undefined, unknown>
}

const RightDashboardMarketPlace: FC<RightDashboardMarketPlaceType> = (
  props
): ReactElement => {
  const {
    changeAddressProperty,
    changeSortBy,
    changeMarketingMode,
    queryData,
  } = props

  const { isLoading } = queryData
  if (isLoading || !queryData.data) {
    return (
      <>
        <TopFilterComponent
          changeAddressProperty={changeAddressProperty}
          changeMarketingMode={changeMarketingMode}
          changeSortBy={changeSortBy}
        />
        <LoadingIndicator />
      </>
    )
  }

  const data = queryData.data as PropertyModelPagedResult

  return (
    <>
      <TopFilterComponent
        changeAddressProperty={changeAddressProperty}
        changeMarketingMode={changeMarketingMode}
        changeSortBy={changeSortBy}
      />
      <FlexContainer isFlexJustifyBetween isFlexWrap>
        {data._embedded !== undefined &&
          data._embedded.map((property: PropertyModel) => {
            return (
              <PropertiesCardComponent
                propertyData={property}
                key={property.id}
              />
            )
          })}
      </FlexContainer>
    </>
  )
}

export default RightDashboardMarketPlace
