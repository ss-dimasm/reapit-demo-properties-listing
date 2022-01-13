import React, { FC } from 'react'
import { FlexContainer } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { rentFrequentlyFormatter } from '../../../../../utils'

interface RentFrequentlyType {
  propertyData: PropertyModel
}
const RentFrequently: FC<RentFrequentlyType> = (props) => {
  const { propertyData } = props

  // rent frequency
  const rentFrequency = rentFrequentlyFormatter(
    propertyData?.letting?.rentFrequency!
  )
  return (
    <FlexContainer className="el-mb6">
      <div
        style={{ backgroundColor: 'var(--intent-critical-light)' }}
        className="el-px3 el-py1 el-mr1"
      >
        {rentFrequency}
      </div>
    </FlexContainer>
  )
}

export default RentFrequently
