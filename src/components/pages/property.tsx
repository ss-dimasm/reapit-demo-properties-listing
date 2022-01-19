import React, { FC, ReactElement, useEffect } from 'react'

import { useReapitConnect } from '@reapit/connect-session'
import { useParams, useHistory } from 'react-router'

import { reapitConnectBrowserSession } from '../../core/connect-session'

import LoadingIndicator from '../ui/loadingIndicator'
import TitleSection from '../ui/screen/marketplace/property/titleSection'
import ImageSection from '../ui/screen/marketplace/property/imageSection'

import useGetPropertyData from '../../platform-api/property/getPropertyData'
import { Button, FlexContainer } from '@reapit/elements'
import MenuBar from '../ui/screen/marketplace/property/menuBarSection'
import {
  centerBar,
  mainContentLeft,
  mainContentRight,
} from './__styles__/property.style'
import OverviewSection from '../ui/screen/marketplace/property/overviewSection'
import FeaturesSection from '../ui/screen/marketplace/property/featuresSection'
import FloorPlanSection from '../ui/screen/marketplace/property/floorPlanSection'
import AppointmentSection from '../ui/screen/marketplace/property/appointmentSection'
import NearbySection from '../ui/screen/marketplace/property/nearbySection'
import YouMayLikeSection from '../ui/screen/marketplace/property/youMayLikeSection'
import AgentSection from '../ui/screen/marketplace/property/agentSection'
import PriceHistorySection from '../ui/screen/marketplace/property/priceHistorySection'

// Declare type of useParams
interface ParamsType {
  propertyId: string
}

type PropertyProps = {}
const Property: FC<PropertyProps> = (): ReactElement => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])

  // get propertyId path from params
  const { propertyId } = useParams<ParamsType>()
  const history = useHistory()

  // query property data based property id
  const { isLoading, data } = useGetPropertyData(connectSession!, propertyId)

  // while is loading or data still not exits, return this
  if (isLoading || !data) return <LoadingIndicator />

  return (
    <>
      <div>
        <Button intent="critical" chevronLeft onClick={() => history.goBack()}>
          Back
        </Button>
      </div>
      <div>
        <TitleSection propertyData={data} />
        <ImageSection propertyData={data} />
        <MenuBar />
        <FlexContainer isFlexJustifyCenter>
          <div className={centerBar}>
            <FlexContainer isFlexJustifyBetween>
              <div className={mainContentLeft}>
                <OverviewSection />
                <FeaturesSection />
                <FloorPlanSection />
                <PriceHistorySection />
              </div>
              <aside className={mainContentRight}>
                <AgentSection />
              </aside>
            </FlexContainer>
          </div>
        </FlexContainer>
        <NearbySection />
        <AppointmentSection />
        <YouMayLikeSection />
      </div>
    </>
  )
}

export default Property
