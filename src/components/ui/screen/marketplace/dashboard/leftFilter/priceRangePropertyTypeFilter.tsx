import React, { FC, ReactElement, useEffect, useState } from 'react'

import { FlexContainer, Label, Select, Subtitle } from '@reapit/elements'
import { Range } from 'rc-slider'

import { whiteColor } from '../__styles__'
import 'rc-slider/assets/index.css'
import { priceFormatting, setPriceRangeValue } from '../../../../../utils'

import type {
  MarketingModeFilterType,
  PriceRangeTotalType,
} from '../../../../../../interfaces/marketplace'
interface PriceRangePropertyTypeFilterType {
  marketingMode: MarketingModeFilterType
  changePriceRange: (price: PriceRangeTotalType) => void
  priceType: Exclude<MarketingModeFilterType, 'sellingAndLetting'>
  changePriceType: (
    priceType: PriceRangePropertyTypeFilterType['priceType']
  ) => void
}

const PriceRangePropertyTypeFilter: FC<PriceRangePropertyTypeFilterType> = (
  props
) => {
  const { marketingMode, changePriceRange, priceType, changePriceType } = props

  // set up default value of price range based marketing mode in each of property
  let priceRangeDefaultValue = setPriceRangeValue(marketingMode)

  const [minPrice, setMinPrice] = useState<number>(priceRangeDefaultValue.min)
  const [maxPrice, setMaxPrice] = useState<number>(priceRangeDefaultValue.max)

  const [minPercentage, setMinPercentage] = useState<number>(0)
  const [maxPercentage, setMaxPercentage] = useState<number>(100)

  if (marketingMode === 'sellingAndLetting') {
    priceRangeDefaultValue = setPriceRangeValue(priceType)
  } else {
    priceRangeDefaultValue = setPriceRangeValue(marketingMode)
  }

  // return default value to parent component
  useEffect(() => {
    changePriceRange({
      min: minPrice,
      max: maxPrice,
    })
  }, [minPrice, maxPrice])

  // handle default value of property price range bar if marketingMode switching
  useEffect(() => {
    if (marketingMode === 'sellingAndLetting') {
      priceRangeDefaultValue = setPriceRangeValue(priceType)
    } else {
      priceRangeDefaultValue = setPriceRangeValue(marketingMode)
    }

    setMinPrice((priceRangeDefaultValue.max * minPercentage) / 100)
    setMaxPrice((priceRangeDefaultValue.max * maxPercentage) / 100)
  }, [marketingMode, priceType])

  // set up price range value
  const setPriceRange = (currentVal: [number, number]): void => {
    setMinPrice((priceRangeDefaultValue.max * currentVal[0]) / 100)
    setMaxPrice((priceRangeDefaultValue.max * currentVal[1]) / 100)
    setMinPercentage(currentVal[0])
    setMaxPercentage(currentVal[1])
  }

  // component that will appear if sellingAndLetting marketingMode chooses
  let sellingAndLettingFilterBar: ReactElement | undefined
  if (marketingMode === 'sellingAndLetting') {
    sellingAndLettingFilterBar = (
      <>
        <div>
          <Select
            onChange={(e) =>
              changePriceType(
                e.currentTarget.value as Exclude<
                  MarketingModeFilterType,
                  'sellingAndLetting'
                >
              )
            }
          >
            <option value="selling">Buy Price</option>
            <option value="letting">Rent Price</option>
          </Select>
        </div>
      </>
    )
  }
  return (
    <>
      <FlexContainer isFlexJustifyBetween>
        <Subtitle hasNoMargin className={whiteColor}>
          Price Range
        </Subtitle>
        {sellingAndLettingFilterBar}
      </FlexContainer>
      <div className="el-mt3">
        <Label style={{ color: 'var(--color-white)' }}>
          ${priceFormatting(minPrice)} - ${priceFormatting(maxPrice)}
        </Label>
        <Range
          className="el-mt3"
          allowCross={false}
          defaultValue={[minPercentage, maxPercentage]}
          onChange={(value) => setPriceRange(value as [number, number])}
          trackStyle={[{ backgroundColor: 'var(--color-blue-light2)' }]}
          handleStyle={[
            { backgroundColor: 'var(--intent-critical)', border: '0' },
            { backgroundColor: 'var(--intent-critical)', border: '0' },
          ]}
          railStyle={{ backgroundColor: 'var(--color-grey-light)' }}
        />
      </div>
    </>
  )
}

export default PriceRangePropertyTypeFilter
