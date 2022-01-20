import React from 'react'
import { css } from '@linaria/core'

const sectionBreakStyle = css`
  border: none;
  border-top: 1px dashed var(--color-grey-medium);
  border-bottom: 1px dashed var(--color-grey-medium);
  margin: 1rem 0 1.5rem 0;
`
const SectionBreak = () => {
  return (
    <>
      <hr className={sectionBreakStyle} />
    </>
  )
}

export default SectionBreak
