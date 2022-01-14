import React, { FC, useEffect, useState } from 'react'

import {
  Input,
  InputAddOn,
  InputGroup,
  Label,
  Subtitle,
} from '@reapit/elements'
import { Range } from 'rc-slider'

import { whiteColor } from '../__styles__'
import 'rc-slider/assets/index.css'

interface PriceRangePropertyTypeFilterType {
  changePriceRange: (price) => void
}

const PriceRangePropertyTypeFilter: FC<PriceRangePropertyTypeFilterType> = (
  props
) => {
  const { changePriceRange } = props

  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(150000000)

  useEffect(() => {
    changePriceRange({
      min: minPrice,
      max: maxPrice,
    })
  }, [minPrice, maxPrice])

  const setPriceRange = (
    type: 'setMin' | 'setMax',
    currentVal: number
  ): void => {
    switch (type) {
      case 'setMin':
        setMinPrice(currentVal)
        break
      case 'setMax':
        setMaxPrice(currentVal)
        break
    }
  }

  return (
    <>
      <Subtitle hasNoMargin className={whiteColor}>
        Price Range
      </Subtitle>
      <div className="el-mt3">
        <Range
          allowCross={true}
          defaultValue={[30, 70]}
          onChange={(value) => console.log(value)}
        />
      </div>
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
            onKeyUp={(e) =>
              setPriceRange('setMin', parseInt(e.currentTarget.value))
            }
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
            onKeyUp={(e) =>
              setPriceRange('setMax', parseInt(e.currentTarget.value))
            }
          />
        </InputGroup>
      </div>
    </>
  )
}

export default PriceRangePropertyTypeFilter
