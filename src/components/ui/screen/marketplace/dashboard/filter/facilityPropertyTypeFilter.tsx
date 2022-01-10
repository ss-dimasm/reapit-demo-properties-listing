import {
  BodyText,
  FlexContainer,
  Input,
  InputGroup,
  Label,
  Subtitle,
} from '@reapit/elements'
import React, { FC, useEffect, useState } from 'react'
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
  const [maxBedroom, setMaxBedroom] = useState<number>(0)

  useEffect(() => {
    changeTotalBedRoom({
      min: minBedroom,
      max: maxBedroom,
    })
  }, [minBedroom, maxBedroom])
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
            <InputGroup style={{ width: '48%' }}>
              <Label
                style={{
                  backgroundColor: 'transparent',
                  fontWeight: '500',
                  padding: '0',
                }}
                className={whiteColor}
              >
                Min
              </Label>
              <Input
                type="num"
                min={0}
                style={{ width: '100%' }}
                placeholder="Min"
                onKeyDown={(e) =>
                  setMinBedroom(parseInt(e.currentTarget.value))
                }
              />
            </InputGroup>
            <InputGroup style={{ width: '48%' }}>
              <Label
                style={{
                  backgroundColor: 'transparent',
                  fontWeight: '500',
                  padding: '0',
                }}
                className={whiteColor}
              >
                Max
              </Label>
              <Input
                type="num"
                min={0}
                style={{ width: '100%' }}
                placeholder="Max"
                onKeyDown={(e) =>
                  setMaxBedroom(parseInt(e.currentTarget.value))
                }
              />
            </InputGroup>
          </FlexContainer>
        </FlexContainer>
      </div>
    </>
  )
}

export default FacilityPropertyTypeFilter
