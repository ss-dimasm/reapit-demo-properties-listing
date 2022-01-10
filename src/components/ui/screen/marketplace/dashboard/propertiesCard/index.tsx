import React from 'react'
import {
  CardBodyWrap,
  CardHeading,
  CardHeadingWrap,
  CardImageWrap,
  CardListHeading,
  CardListIcon,
  CardListItem,
  CardListItemTextPrimary,
  CardListItemTextSecondary,
  CardListItemTextWrap,
  CardListMainWrap,
  CardListSubHeading,
  CardMainWrap,
  CardMobileToggle,
  CardSubHeading,
  CardSubHeadingAdditional,
  CardWrap,
  Icon,
} from '@reapit/elements'
const PropertiesCardComponent = () => {
  return (
    <div style={{ width: '49%' }} className="el-my5">
      <CardWrap>
        <CardMainWrap>
          <CardImageWrap>
            <img src="https://via.placeholder.com/52x52.svg" />
          </CardImageWrap>
          <CardHeadingWrap>
            <CardHeading>Main Heading</CardHeading>
            <CardSubHeading>Sub Heading</CardSubHeading>
            <CardSubHeadingAdditional>
              Sub Heading Additional
            </CardSubHeadingAdditional>
          </CardHeadingWrap>
          <CardMobileToggle>
            <Icon icon="arrowUpSystem" />
          </CardMobileToggle>
        </CardMainWrap>
        <CardBodyWrap className="el-mb5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </CardBodyWrap>
        <CardListMainWrap>
          <CardListHeading>Secondary Heading</CardListHeading>
          <CardListSubHeading>Secondary Sub Heading</CardListSubHeading>
          <CardMobileToggle>
            <Icon icon="arrowUpSystem" />
          </CardMobileToggle>
        </CardListMainWrap>
        <CardListItem>
          <CardListIcon>
            <Icon icon="houseInfographic" />
          </CardListIcon>
          <CardListItemTextWrap>
            <CardListItemTextPrimary>Item Title</CardListItemTextPrimary>
            <CardListItemTextSecondary>Item Details</CardListItemTextSecondary>
          </CardListItemTextWrap>
        </CardListItem>
        <CardListItem>
          <CardListIcon>
            <Icon icon="applicantInfographic" />
          </CardListIcon>
          <CardListItemTextWrap>
            <CardListItemTextPrimary>Item Title</CardListItemTextPrimary>
            <CardListItemTextSecondary>Item Details</CardListItemTextSecondary>
          </CardListItemTextWrap>
        </CardListItem>
      </CardWrap>
    </div>
  )
}

export default PropertiesCardComponent
