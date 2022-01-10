import React, { FC, useEffect, useState } from 'react'

import {
  Input,
  InputAddOn,
  InputGroup,
  Label,
  Subtitle,
} from '@reapit/elements'
import { whiteColor } from '../__styles__'

interface PriceRangePropertyTypeFilterType {
  changePriceRange: (price) => void
}
const PriceRangePropertyTypeFilter: FC<PriceRangePropertyTypeFilterType> = (
  props
) => {
  const { changePriceRange } = props

  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)

  useEffect(() => {
    changePriceRange({
      min: minPrice,
      max: maxPrice,
    })
  }, [minPrice, maxPrice])

  return (
    <>
      <Subtitle hasNoMargin className={whiteColor}>
        Price Range
      </Subtitle>
      <div className="el-mt3">
        <InputGroup className="el-my3">
          <Label
            style={{
              backgroundColor: 'transparent',
              fontWeight: '500',
              padding: '0',
            }}
            className={whiteColor}
          >
            Min Price
          </Label>
          <InputAddOn className="el-pl4" style={{ order: '1' }}>
            $
          </InputAddOn>
          <Input
            type="num"
            min={0}
            style={{ width: '60%' }}
            placeholder="Minimum Price"
            onKeyDown={(e) => setMinPrice(parseInt(e.currentTarget.value))}
          />
        </InputGroup>
        <InputGroup className="el-my3">
          <Label
            style={{
              backgroundColor: 'transparent',
              fontWeight: '500',
              padding: '0',
            }}
            className={whiteColor}
          >
            Max Price
          </Label>
          <InputAddOn className="el-pl4" style={{ order: '1' }}>
            $
          </InputAddOn>
          <Input
            type="num"
            min={0}
            style={{ width: '60%' }}
            placeholder="Maximum Price"
            onKeyDown={(e) => setMaxPrice(parseInt(e.currentTarget.value))}
          />
        </InputGroup>
      </div>
    </>
  )
}

export default PriceRangePropertyTypeFilter
