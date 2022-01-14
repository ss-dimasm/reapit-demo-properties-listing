import React, { FC } from 'react'
import { FlexContainer } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { rentFrequentlyFormatter } from '../../../../../utils'

interface RentFrequentlyType {
  propertyData: PropertyModel
  currentMarketingMode: boolean
}
const RentFrequently: FC<RentFrequentlyType> = (props) => {
  const { propertyData, currentMarketingMode } = props

  // rent frequency
  const rentFrequency = rentFrequentlyFormatter(
    propertyData?.letting?.rentFrequency!
  )

  if (
    currentMarketingMode &&
    propertyData?.marketingMode === 'sellingAndLetting'
  )
    return <div></div>

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
