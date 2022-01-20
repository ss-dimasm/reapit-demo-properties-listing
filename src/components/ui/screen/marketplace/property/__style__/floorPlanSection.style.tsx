import { css } from '@linaria/core'

export const floorPlanWrapper = css`
  border: 1.5px solid var(--color-grey-medium);
  border-radius: 10px;
  width: fit-content;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const floorPlanText = css`
  margin-right: 0.5rem;
`

export const floorPlanImage = css`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 50px;
`
