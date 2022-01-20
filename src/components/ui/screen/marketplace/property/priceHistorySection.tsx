/* eslint-disable */
import React, { FC, ReactElement, useEffect, useState } from 'react'

import { Title } from '@reapit/elements'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { PropertyModel } from '@reapit/foundations-ts-definitions'
import { useGetPropertyOffer } from '../../../../../platform-api/property/getPropertyOfferData'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../../../../core/connect-session'
import LoadingIndicator from '../../../loadingIndicator'

interface SeriesType {
  name: string
  data: {
    x: string
    y: number
  }[]
}

interface PriceHistorySectionProps {
  propertyData: PropertyModel
}

/**
 * Currently data is mocked, its not ready for production
 */
const PriceHistorySection: FC<PriceHistorySectionProps> = (
  props
): ReactElement => {
  const { propertyData } = props

  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)

  // verify is user already login
  useEffect(() => {
    if (!connectSession) return
  }, [connectSession])

  const [series, setSeries] = useState<SeriesType[]>([
    {
      name: 'Property Price',
      data: [
        {
          x: '02-10-2017 GMT',
          y: 200000,
        },
        {
          x: '02-11-2017 GMT',
          y: 210000,
        },
        {
          x: '02-12-2017 GMT',
          y: 250000,
        },
        {
          x: '02-13-2017 GMT',
          y: 275000,
        },
        {
          x: '02-14-2017 GMT',
          y: 322000,
        },
        {
          x: '02-15-2017 GMT',
          y: 125000,
        },
        {
          x: '02-16-2017 GMT',
          y: 155000,
        },
        {
          x: '02-17-2017 GMT',
          y: 166000,
        },
        {
          x: '02-18-2017 GMT',
          y: 212500,
        },
        {
          x: '02-19-2017 GMT',
          y: 100000,
        },
        {
          x: '02-20-2017 GMT',
          y: 110000,
        },
        {
          x: '02-21-2017 GMT',
          y: 200000,
        },
        {
          x: '02-22-2017 GMT',
          y: 280000,
        },
      ],
    },
  ])
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 350,
      background: 'transparent',
      stacked: false,
      zoom: {
        enabled: true,
      },
      animations: {
        enabled: true,
        easing: 'linear',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 300,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 150,
        },
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: false,
        },
        autoSelected: 'zoom',
      },
    },
    xaxis: {
      type: 'datetime',
    },
    colors: ['var(--intent-secondary)'],
    dataLabels: {
      enabled: true,
      style: {
        colors: ['var(--color-blue-dark2)'],
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000000',
        opacity: 0.9,
        dropShadow: {
          enabled: false,
        },
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      width: 2,
      dashArray: 10,
    },
  })

  const { data, isLoading } = useGetPropertyOffer(connectSession!, {
    propertyId: propertyData.id!,
  })

  if (isLoading || !data) return <LoadingIndicator />

  return (
    <>
      <Title>Price history</Title>
      <ReactApexChart options={options} series={series} type="line" />
    </>
  )
}

export default PriceHistorySection
