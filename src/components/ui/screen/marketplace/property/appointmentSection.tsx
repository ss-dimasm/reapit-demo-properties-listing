import { BodyText, FlexContainer, Title } from '@reapit/elements'
import React from 'react'
import { centerBar } from '../../../../pages/__styles__/property.style'

const AppointmentSection = () => {
  return (
    <>
      <FlexContainer isFlexJustifyCenter>
        <div className={centerBar}>
          <Title>Appointment</Title>
          <div
            style={{
              backgroundColor: 'var(--color-grey-light)',
              padding: '2rem',
            }}
          >
            <BodyText>
              Will display Form to make Appointment with Agent
            </BodyText>
          </div>
        </div>
      </FlexContainer>
    </>
  )
}

export default AppointmentSection
