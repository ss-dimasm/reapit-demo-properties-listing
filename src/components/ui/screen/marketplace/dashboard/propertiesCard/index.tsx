import React, { FC, useState } from 'react'

import { FlexContainer } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'

import PropertyImage from './propertyImage'
import AgentProperty from './agentProperty'
import FacilityProperty from './facilityProperty'
import TitleCardProperty from './titleCardProperty'
import StatusProperty from './statusProperty'

interface PropertiesCardComponentType {
  propertyData: PropertyModel
}

const PropertiesCardComponent: FC<PropertiesCardComponentType> = (props) => {
  /**
   * only used for switching letting and selling mode in property
   * which is have sellingAndLetting value in marketing mode
   */
  const [isMarketingModeEqualToSelling, setIsMarketingModeEqualToSelling] =
    useState<boolean>(true)

  const toggleMarketingMode = (mode: boolean): void =>
    setIsMarketingModeEqualToSelling(mode)

  // card focus effect
  const cardOnHover: React.MouseEventHandler<HTMLDivElement> = (e) =>
    (e.currentTarget.style.outline = '1px solid var(--color-blue-light2)')
  const cardNotOnHover: React.MouseEventHandler<HTMLDivElement> = (e) =>
    e.currentTarget.removeAttribute('style')

  return (
    <div style={{ width: '49%', cursor: 'pointer' }} className="el-my4">
      <div
        style={{ userSelect: 'none' }}
        className="el-box-shadow"
        onMouseEnter={(e) => cardOnHover(e)}
        onMouseLeave={(e) => cardNotOnHover(e)}
      >
        <PropertyImage
          {...props}
          toggleMarketingMode={toggleMarketingMode}
          currentMarketingMode={isMarketingModeEqualToSelling}
        />

        <div className="el-pt2 el-pb4 el-px6">
          <FlexContainer isFlexJustifyBetween>
            <div className="el-py2">
              <TitleCardProperty
                {...props}
                currentMarketingMode={isMarketingModeEqualToSelling}
              />
            </div>
            <div style={{ width: '20%', position: 'relative' }}>
              <AgentProperty />
            </div>
          </FlexContainer>
          <FlexContainer isFlexJustifyBetween>
            <FacilityProperty {...props} />
            <StatusProperty
              {...props}
              currentMarketingMode={isMarketingModeEqualToSelling}
            />
          </FlexContainer>
        </div>
      </div>
    </div>
  )
}

export default PropertiesCardComponent
