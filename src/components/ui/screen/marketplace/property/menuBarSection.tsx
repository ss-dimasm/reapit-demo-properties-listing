import { FlexContainer, Tabs } from '@reapit/elements'
import React from 'react'

import {
  menuBarWrapper,
  menuBarInsideWrapper,
  menuBarSubWrapper,
} from './__style__/menuBarSection.style'

const MenuBar = () => {
  return (
    <>
      <FlexContainer isFlexJustifyCenter className={menuBarWrapper}>
        <div className={menuBarSubWrapper}>
          <Tabs
            name="my-cool-tabs-full-width"
            className={menuBarInsideWrapper}
            isFullWidth
            options={[
              {
                id: 'overview',
                value: 'overview',
                text: 'Overview',
                isChecked: true,
              },
              {
                id: 'features',
                value: 'features',
                text: 'Features',
                isChecked: false,
              },
              {
                id: 'floor-plan',
                value: 'floor-plan',
                text: 'Floor Plan',
                isChecked: false,
              },
              {
                id: 'price-history',
                value: 'price-history',
                text: 'Price History',
                isChecked: false,
              },
              {
                id: 'nearby',
                value: 'nearby',
                text: 'Nearby',
                isChecked: false,
              },
              {
                id: 'appointment',
                value: 'appointment',
                text: 'Appointment',
                isChecked: false,
              },
            ]}
          />
        </div>
      </FlexContainer>
    </>
  )
}

export default MenuBar
