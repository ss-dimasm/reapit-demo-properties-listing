import React, { FC, ReactElement } from 'react'
import { FlexContainer } from '@reapit/elements'

import { leftSide, rightSide } from './__styles__/styles'
import LeftDashboardMarketPlace from '../ui/screen/marketplace/dashboard/leftDashboard'
import RightDashboardMarketPlace from '../ui/screen/marketplace/dashboard/rightDashboard'

const MarketPlace: FC<{}> = (): ReactElement => {
  return (
    <>
      <FlexContainer isFlexJustifyBetween>
        <div className={leftSide}>
          <LeftDashboardMarketPlace />
        </div>
        <div className={rightSide}>
          <RightDashboardMarketPlace />
        </div>
      </FlexContainer>
    </>
  )
}

export default MarketPlace
