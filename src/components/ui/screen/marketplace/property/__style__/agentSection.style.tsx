import { css } from '@linaria/core'

export const wrapperDiv = css`
  padding: 1rem 0 1rem 1rem;
  position: sticky;
  top: 50px;
`
export const wrapperBackgroundColor = css`
  background-color: var(--color-blue-dark);
  padding: 2rem 0 1rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const imageWrapper = css`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
`

export const whiteColorText = css`
  color: var(--color-white);
`

export const horizontalLine = css`
  width: 100%;
  border: none;
  border-bottom: 0.2px solid var(--color-grey-medium);
`

export const getInTouchWrapper = css`
  cursor: pointer;
  background-color: var(--intent-critical);
  width: 80%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
`
export const getIntTouchText = css`
  font-size: 1.1rem;
  font-weight: 600;
`
