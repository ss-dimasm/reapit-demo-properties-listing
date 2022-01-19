import React, { FC, ReactElement, useEffect } from 'react'

import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../../../../core/connect-session'

import { FlexContainer } from '@reapit/elements'
import LoadingIndicator from '../../../loadingIndicator'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

import useGetPropertyImageData from '../../../../../platform-api/property/getPropertyImageData'

import {
  sideBar,
  centerBar,
  mainPropertyImage,
  sideLeftPropertyImage,
  sideRightPropertyImage,
  sidePropertyWrapper,
  sidePropertyColor,
  sidePropertyChevron,
  sideLeftPropertyChevron,
  sideRightPropertyChevron,
} from '../../../../pages/__styles__/property.style'

interface ImageSectionType {
  propertyData: PropertyModel
}
const ImageSection: FC<ImageSectionType> = (props): ReactElement => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  const { propertyData } = props

  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])

  const { isLoading, data } = useGetPropertyImageData(
    connectSession!,
    propertyData.id!
  )

  // while status is loading or data still not available, return this
  if (isLoading || !data) return <LoadingIndicator />

  // while data is empty (not 'available'), return this
  if (data.totalCount === 0)
    return (
      <>
        <FlexContainer isFlexJustifyCenter className="el-mt8">
          <div className={sideBar}>
            <div className={'el-mr6 ' + sidePropertyWrapper}>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__480.jpg"
                className={sideLeftPropertyImage}
              />
              <div className={sidePropertyColor}></div>
              <div
                className={sidePropertyChevron + ' ' + sideLeftPropertyChevron}
              >
                <IoChevronBack size="5rem" color="var(--intent-critical)" />
              </div>
            </div>
          </div>
          <div className={centerBar}>
            <img
              src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Modern-House-In-Twilight-AdobeStock-368976934-copy.jpg"
              className={mainPropertyImage}
            />
          </div>
          <div className={sideBar}>
            <div className={'el-ml6 ' + sidePropertyWrapper}>
              <img
                src="https://www.theglobeandmail.com/resizer/3ldjOwTLi52ILd9KXXjjv79Kwh8=/arc-anglerfish-tgam-prod-tgam/public/2ZVVSMN2AFHINMPJLA6YVM22PM.JPG"
                className={sideRightPropertyImage}
              />
              <div className={sidePropertyColor}></div>
              <div
                className={sidePropertyChevron + ' ' + sideRightPropertyChevron}
              >
                <IoChevronForward size="5rem" color="var(--intent-critical)" />
              </div>
            </div>
          </div>
        </FlexContainer>
      </>
    )

  return (
    <FlexContainer className="el-my8">
      <div className={centerBar}>Images</div>
    </FlexContainer>
  )
}

export default ImageSection
