import axios from 'axios'
import { ReapitConnectSession } from '@reapit/connect-session'
import { useQuery } from 'react-query'

import { PagedResultPropertyImageModel } from '../../generated/graphql'
import { BASE_HEADERS, URLS } from '../../constants/api'
import { PropertiesImagesMarketPlaceQuery } from '../../interfaces/marketplace'

const getPropertiesImageEachProperty = async (
  session: ReapitConnectSession,
  query: PropertiesImagesMarketPlaceQuery
): Promise<PagedResultPropertyImageModel | undefined> => {
  if (!session) return
  const { propertyId } = query

  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.PROPERTIES_IMAGE.PAGED}?pageSize=1&propertyId=${propertyId}&sortBy=-created`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${session.accessToken}`,
      },
    }
  )
  return data
}

const useGetPropertiesImageEachProperty = (
  session: ReapitConnectSession,
  query: PropertiesImagesMarketPlaceQuery
) => {
  return useQuery(
    ['Property Image Dashboard', query],
    () => getPropertiesImageEachProperty(session, query),
    {
      enabled: !!session,
    }
  )
}

export default useGetPropertiesImageEachProperty
