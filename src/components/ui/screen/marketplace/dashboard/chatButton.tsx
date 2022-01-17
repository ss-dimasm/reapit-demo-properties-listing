import { FlexContainer } from '@reapit/elements'
import React from 'react'
import { BsChatRightDots } from 'react-icons/bs'

const ChatButton = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '1rem',
        right: '5rem',
        height: '4rem',
        width: '4rem',
        backgroundColor: 'var(--color-blue-dark2)',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-blue-dark)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-blue-dark2)'
      }}
    >
      <FlexContainer
        isFlexJustifyCenter
        isFlexAlignCenter
        style={{ height: '100%' }}
      >
        <BsChatRightDots size="1.5rem" color="var(--color-white)" />
      </FlexContainer>
    </div>
  )
}

export default ChatButton
