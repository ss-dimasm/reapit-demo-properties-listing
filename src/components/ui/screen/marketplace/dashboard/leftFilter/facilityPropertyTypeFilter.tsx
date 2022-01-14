/* eslint-disable  */
import React, { FC, useEffect, useState } from 'react'

import {
  BodyText,
  FlexContainer,
  Label,
  Select,
  Subtitle,
} from '@reapit/elements'

import { BedRoomTotalType } from '../../../../../../interfaces/marketplace'
import { typeTextDescription, whiteColor } from '../__styles__'

interface FacilityPropertyTypeFilterType {
  changeTotalBedRoom: (bedroom: BedRoomTotalType) => void
}
const FacilityPropertyTypeFilter: FC<FacilityPropertyTypeFilterType> = (
  props
) => {
  const { changeTotalBedRoom } = props

  const [minBedroom, setMinBedroom] = useState<number>(0)
  const [maxBedroom, setMaxBedroom] = useState<number>(100000)

  useEffect(() => {
    changeTotalBedRoom({
      min: minBedroom,
      max: maxBedroom,
    })
  }, [minBedroom, maxBedroom])

  const setBedRoomCapacity = (
    type: 'setMin' | 'setMax',
    currentVal: number
  ): void => {
    switch (type) {
      case 'setMin':
        setMinBedroom(currentVal)
        break
      case 'setMax':
        setMaxBedroom(currentVal)
        break
    }
  }

  return (
    <>
      <Subtitle hasNoMargin className={whiteColor}>
        Facility
      </Subtitle>
      <div className="el-mt3">
        <FlexContainer isFlexJustifyBetween isFlexColumn>
          <div>
            <BodyText hasNoMargin className={typeTextDescription}>
              Bedroom
            </BodyText>
          </div>
          <FlexContainer isFlexJustifyBetween className="el-mt4">
            <div style={{ width: '48%' }}>
              <Label style={{ color: 'var(--color-white)' }}>Min</Label>
              <Select style={{ width: '100%' }}>
                <option value="0">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </div>
            <div style={{ width: '48%' }}>
              <Label style={{ color: 'var(--color-white)' }}>Max</Label>
              <Select style={{ width: '100%' }}>
                <option value="9999999">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </Select>
            </div>
          </FlexContainer>
        </FlexContainer>
      </div>
    </>
  )
}

export default FacilityPropertyTypeFilter
