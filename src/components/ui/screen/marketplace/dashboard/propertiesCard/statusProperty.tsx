import React, { FC } from 'react'

import { CardListItemTextSecondary, StatusIndicator } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { definedPropertyStatus } from '../../../../../utils'

interface StatusPropertyType {
  propertyData: PropertyModel
  currentMarketingMode: boolean
}
const StatusProperty: FC<StatusPropertyType> = (props) => {
  const { propertyData, currentMarketingMode } = props

  const propertyStatus = definedPropertyStatus(
    propertyData?.marketingMode,
    propertyData?.letting?.status!,
    propertyData?.selling?.status!,
    currentMarketingMode!
  )

  return (
    <div>
      <CardListItemTextSecondary className="el-pt1">
        <StatusIndicator
          intent={propertyStatus.color ?? 'neutral'}
          className="el-pr3"
          style={{ width: '0.5rem', height: '0.5rem' }}
        />
        {propertyStatus.name}
      </CardListItemTextSecondary>
    </div>
  )
}

export default StatusProperty
