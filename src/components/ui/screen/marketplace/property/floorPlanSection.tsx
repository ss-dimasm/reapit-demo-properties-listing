import React from 'react'
import { BodyText, Title } from '@reapit/elements'
import { FiExternalLink } from 'react-icons/fi'

import {
  floorPlanWrapper,
  floorPlanText,
} from './__style__/floorPlanSection.style'
const FloorPlanSection = () => {
  return (
    <>
      <Title>Floor Plan</Title>
      <div className={floorPlanWrapper}>
        <BodyText hasNoMargin className={floorPlanText}>
          Open Floor Plan
        </BodyText>
        <FiExternalLink color="var(--color-grey-dark)" />
      </div>
    </>
  )
}

export default FloorPlanSection
