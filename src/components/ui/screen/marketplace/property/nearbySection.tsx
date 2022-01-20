import React, { FC, ReactElement } from 'react'
import { FlexContainer, Title } from '@reapit/elements'

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from 'react-leaflet'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { centerBar } from '../../../../pages/__styles__/property.style'

import { fullScreenButtonWrapper } from './__style__/nearbySection.style'
import { MdFullscreen } from 'react-icons/md'
interface NearbySectionProps {
  propertyData: PropertyModel
}
const NearbySection: FC<NearbySectionProps> = (props): ReactElement => {
  const { propertyData } = props

  const { latitude, longitude } = propertyData.address?.geolocation!

  const redOptions = { color: 'var(--intent-critical)' }
  return (
    <>
      <FlexContainer isFlexJustifyCenter>
        <div className={centerBar}>
          <Title>Nearby</Title>
        </div>
      </FlexContainer>
      <MapContainer
        center={[latitude!, longitude!]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '800px', position: 'relative' }}
      >
        <div className={fullScreenButtonWrapper}>
          <MdFullscreen size="2rem" />
        </div>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[latitude!, longitude!]}
          pathOptions={redOptions}
          radius={200}
        >
          <Marker position={[latitude!, longitude!]}>
            <Popup>Dummy</Popup>
          </Marker>
        </CircleMarker>
      </MapContainer>
    </>
  )
}

export default NearbySection
