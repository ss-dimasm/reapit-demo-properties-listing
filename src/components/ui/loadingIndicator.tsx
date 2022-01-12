import React from 'react'

import { FlexContainer, Loader } from '@reapit/elements'

const LoadingIndicator = () => {
  return (
    <FlexContainer isFlexJustifyCenter isFlexAlignCenter className="el-h10">
      <Loader label="Please wait..." />
    </FlexContainer>
  )
}

export default LoadingIndicator
