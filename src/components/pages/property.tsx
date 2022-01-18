import React, { FC, ReactElement, useEffect } from 'react'

import { useReapitConnect } from '@reapit/connect-session'
import { useParams } from 'react-router'

import { reapitConnectBrowserSession } from '../../core/connect-session'

import LoadingIndicator from '../ui/loadingIndicator'
import TitleSection from '../ui/screen/marketplace/property/titleSection'
import ImageSection from '../ui/screen/marketplace/property/imageSection'

import useGetPropertyData from '../../platform-api/property/getPropertyData'

// Declare type of useParams
interface ParamsType {
  propertyId: string
}

const Property: FC<{}> = (): ReactElement => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])

  const { propertyId } = useParams<ParamsType>()

  const { isLoading, data } = useGetPropertyData(connectSession!, propertyId)

  if (isLoading || !data) return <LoadingIndicator />

  return (
    <>
      <main>
        <TitleSection propertyData={data} />
        <ImageSection propertyData={data} />
      </main>
    </>
  )
}

export default Property
