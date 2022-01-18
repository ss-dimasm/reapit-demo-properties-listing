import React, { FC, ReactElement, useEffect } from 'react'

import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../../../../core/connect-session'

import { FlexContainer } from '@reapit/elements'
import LoadingIndicator from '../../../loadingIndicator'

import useGetPropertyImageData from '../../../../../platform-api/property/getPropertyImageData'

import { centerBar } from '../../../../pages/__styles__/property.style'

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
        <FlexContainer isFlexJustifyCenter className="el-my6">
          <div className={centerBar}>No Images found</div>
        </FlexContainer>
      </>
    )

  return (
    <FlexContainer className="el-my6">
      <div className={centerBar}>Images</div>
    </FlexContainer>
  )
}

export default ImageSection
