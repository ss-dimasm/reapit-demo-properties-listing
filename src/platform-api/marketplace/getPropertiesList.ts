import axios from 'axios'
import { ReapitConnectSession } from '@reapit/connect-session'
import { useQuery } from 'react-query'

import { PagedResultPropertyModel } from '../../generated/graphql'
import { BASE_HEADERS, URLS } from '../../constants/api'

import {
  SelectedLocalityType,
  SelectedPropertyTypeType,
} from '../../interfaces/marketplace'

export interface PropertiesMarketPlaceListQuery {
  propertyType: SelectedPropertyTypeType
  locality: SelectedLocalityType
  priceRange: {
    min: number | undefined
    max: number | undefined
  }
  bedRoom: {
    min: number | undefined
    max: number | undefined
  }
}
const getPropertiesList = async (
  session: ReapitConnectSession,
  query: PropertiesMarketPlaceListQuery
): Promise<PagedResultPropertyModel[] | undefined> => {
  if (!session) return
  const { propertyType, locality, priceRange, bedRoom } = query
  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.PROPERTIES.PAGED}?pageSize=50&propertyType=${propertyType}&locality=${locality}&priceFrom=${priceRange.min}&priceTo=${priceRange.max}&bedroomsFrom=${bedRoom.min}&bedroomsTo=${bedRoom.max}`,
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
