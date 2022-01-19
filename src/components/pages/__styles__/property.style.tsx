import { css } from '@linaria/core'

export const sideBar = css`
  width: 20%;
`

export const centerBar = css`
  width: 58%;
`

export const mainContentLeft = css`
  width: 70%;
`

export const mainContentRight = css`
  width: 29%;
`

export const titleHeader = css`
  font-size: 3rem;
`

export const mainPropertyImage = css`
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 500px;
`

export const sidePropertyWrapper = css`
  position: relative;
  height: 500px;
`

export const sidePropertyColor = css`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`

export const sidePropertyChevron = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const sideLeftPropertyChevron = css`
  justify-content: right;
`

export const sideRightPropertyChevron = css`
  justify-content: left;
`

export const sideLeftPropertyImage = css`
  width: 100%;
  object-fit: cover;
  object-position: right;
  height: 100%;
  filter: blur(2px);
`

export const sideRightPropertyImage = css`
  width: 100%;
  object-fit: cover;
  object-position: left;
  height: 100%;
  filter: blur(2px);
`
