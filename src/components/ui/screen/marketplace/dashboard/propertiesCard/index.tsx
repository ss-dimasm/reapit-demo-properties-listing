/* eslint-disable */

import React, { FC } from 'react'

import { CardListSubHeading, FlexContainer, Title } from '@reapit/elements'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { getPropertyAddress } from '../../../../../utils'

import PropertyImage from './propertyImage'
import RentFrequently from './rentFrequently'
import AgentProperty from './agentProperty'
import FacilityProperty from './facilityProperty'
import TitleCardProperty from './titleCardProperty'

interface PropertiesCardComponentType {
  propertyData: PropertyModel
}

const PropertiesCardComponent: FC<PropertiesCardComponentType> = (props) => {
  const { propertyData } = props

  // card focus effect
  const cardOnHover: React.MouseEventHandler<HTMLDivElement> = (e) =>
    e.currentTarget.classList.add('el-card-focussed')
  const cardNotOnHover: React.MouseEventHandler<HTMLDivElement> = (e) =>
    e.currentTarget.classList.remove('el-card-focussed')

  return (
    <div style={{ width: '49%' }} className="el-my4">
      <div
        className="el-box-shadow"
        onMouseEnter={(e) => cardOnHover(e)}
        onMouseLeave={(e) => cardNotOnHover(e)}
      >
        <PropertyImage {...props} />
        <div className="el-pt2 el-pb4 el-px6">
          <FlexContainer isFlexJustifyBetween>
            <div className="el-py2">
              <TitleCardProperty {...props} />
            </div>
            <div style={{ width: '20%', position: 'relative' }}>
              <AgentProperty />
            </div>
          </FlexContainer>
          <FlexContainer>
            <FacilityProperty {...props} />
          </FlexContainer>
        </div>
      </div>
    </div>
  )
}

export default PropertiesCardComponent
