import React from 'react'
import { FlexContainer, Title } from '@reapit/elements'
import { centerBar } from '../../../../pages/__styles__/property.style'

const YouMayLikeSection = () => {
  return (
    <>
      <FlexContainer isFlexJustifyCenter className="el-mt10">
        <div className={centerBar}>
          <Title>You may like</Title>
        </div>
      </FlexContainer>
    </>
  )
}

export default YouMayLikeSection
