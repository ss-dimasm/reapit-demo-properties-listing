import axios from 'axios'
import { ReapitConnectSession } from '@reapit/connect-session'
import { useQuery } from 'react-query'

import { PagedResultPropertyModel } from '../../generated/graphql'
import { BASE_HEADERS, URLS } from '../../constants/api'
import { PropertiesMarketPlaceListQuery } from '../../interfaces/marketplace'

import { considerPriceMarketingMode, separateLocality } from '../utils'

const getPropertiesList = async (
  session: ReapitConnectSession,
  query: PropertiesMarketPlaceListQuery
): Promise<PagedResultPropertyModel[] | undefined> => {
  if (!session) return
  const {
    propertyType,
    locality,
    priceType,
    priceRange,
    bedRoom,
    address,
    marketingMode,
    sortBy,
  } = query

  // locality filter
  const localityParams = separateLocality(locality)

  // price params
  const priceParams = considerPriceMarketingMode(
    marketingMode,
    priceRange,
    priceType
  )

  console.log(priceParams)
  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.PROPERTIES.PAGED}?pageSize=20&propertyType=${propertyType}${localityParams}${priceParams}&bedroomsFrom=${bedRoom.min}&bedroomsTo=${bedRoom.max}&address=${address}&marketingMode=${marketingMode}&sortBy=${sortBy}`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${session.accessToken}`,
      },
    }
  )
  return data
}

const useGetPropertiesList = (
  session: ReapitConnectSession,
  query: PropertiesMarketPlaceListQuery
) => {
  return useQuery(
    ['Properties Dashboard', query],
    () => getPropertiesList(session, query),
    {
      enabled: !!session,
    }
  )
}

export default useGetPropertiesList
