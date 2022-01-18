import axios from 'axios'
import { useQuery } from 'react-query'

import { ReapitConnectSession } from '@reapit/connect-session'
import { PropertyImageModelPagedResult } from '@reapit/foundations-ts-definitions'

import { BASE_HEADERS, URLS } from '../../constants/api'

const getPropertyImageData = async (
  connectSession: ReapitConnectSession,
  propertyId: string
): Promise<PropertyImageModelPagedResult | undefined> => {
  if (!connectSession) return

  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.PROPERTIES_IMAGE.PAGED}?propertyId=${propertyId}`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${connectSession.accessToken}`,
      },
    }
  )

  return data
}
const useGetPropertyImageData = (
  connectSession: ReapitConnectSession,
  propertyId: string
) => {
  return useQuery(
    ['Property Image Data Id', propertyId],
    () => getPropertyImageData(connectSession, propertyId),
    {
      enabled: !!connectSession,
    }
  )
}

export default useGetPropertyImageData
