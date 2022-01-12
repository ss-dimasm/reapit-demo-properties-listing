import axios from 'axios'
import { ReapitConnectSession } from '@reapit/connect-session'
import { useQuery } from 'react-query'

import { PagedResultPropertyModel } from '../../generated/graphql'
import { BASE_HEADERS, URLS } from '../../constants/api'
import { PropertiesMarketPlaceListQuery } from '../../interfaces/marketplace'
import { separateLocality } from '../utils'

const getPropertiesList = async (
  session: ReapitConnectSession,
  query: PropertiesMarketPlaceListQuery
): Promise<PagedResultPropertyModel[] | undefined> => {
  if (!session) return
  const { propertyType, locality, priceRange, bedRoom, address } = query

  // locality filter
  const localityParams = separateLocality(locality)

  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.PROPERTIES.PAGED}?pageSize=50&propertyType=${propertyType}${localityParams}&priceFrom=${priceRange.min}&priceTo=${priceRange.max}&bedroomsFrom=${bedRoom.min}&bedroomsTo=${bedRoom.max}&address=${address}`,
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
