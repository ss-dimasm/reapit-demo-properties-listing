import React from 'react'
import { SmallText } from '@reapit/elements'

const AgentProperty = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-40px',
        left: '15%',
      }}
    >
      <img
        src="https://www.biowritingservice.com/wp-content/themes/tuborg/images/Executive%20Bio%20Sample%20Photo.png"
        style={{
          width: '5rem',
          height: '5rem',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <SmallText hasCenteredText>Dimas M</SmallText>
    </div>
  )
}

export default AgentProperty
