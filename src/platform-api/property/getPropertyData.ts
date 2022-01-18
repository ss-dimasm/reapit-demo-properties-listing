import axios from 'axios'
import { useQuery } from 'react-query'

import { ReapitConnectSession } from '@reapit/connect-session'
import { PropertyModel } from '@reapit/foundations-ts-definitions'

import { BASE_HEADERS, URLS } from '../../constants/api'

const getPropertyData = async (
  connectSession: ReapitConnectSession,
  propertyId: string
): Promise<PropertyModel | undefined> => {
  if (!connectSession) return

  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.PROPERTIES.SINGLE}${propertyId}`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${connectSession.accessToken}`,
      },
    }
  )

  return data
}
const useGetPropertyData = (
  connectSession: ReapitConnectSession,
  propertyId: string
) => {
  return useQuery(
    ['Property Data Id', propertyId],
    () => getPropertyData(connectSession, propertyId),
    {
      enabled: !!connectSession,
    }
  )
}

export default useGetPropertyData
