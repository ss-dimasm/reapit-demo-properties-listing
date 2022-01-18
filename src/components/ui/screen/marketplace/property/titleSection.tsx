import React, { FC, ReactElement } from 'react'

import { FlexContainer, Title } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'

import { centerBar } from '../../../../pages/__styles__/property.style'

interface TitleSectionType {
  propertyData: PropertyModel
}
const TitleSection: FC<TitleSectionType> = (props): ReactElement => {
  const { propertyData } = props
  return (
    <FlexContainer isFlexJustifyCenter className="el-my2">
      <div className={centerBar}>
        <Title>
          {propertyData.address?.line2} - {propertyData.address?.line3}
        </Title>
        <FlexContainer className="el-mt4">
          <div
            className="el-py2 el-px4 el-mr2"
            style={{ border: '1px solid var(--intent-critical)' }}
          >
            {propertyData?.age}
          </div>
          <div
            className="el-py2 el-px4"
            style={{ border: '1px solid var(--intent-critical)' }}
          >
            {propertyData?.type}
          </div>
        </FlexContainer>
      </div>
    </FlexContainer>
  )
}

export default TitleSection
