import { ReapitConnectSession } from '@reapit/connect-session'
import { OfferModelPagedResult } from '@reapit/foundations-ts-definitions'
import axios from 'axios'
import { useQuery } from 'react-query'
import { BASE_HEADERS, URLS } from '../../constants/api'

export interface getPropertyOfferParams {
  propertyId: string
}
const getPropertyOffer = async (
  connectSession: ReapitConnectSession,
  queryParams?: getPropertyOfferParams
): Promise<OfferModelPagedResult | undefined> => {
  const { data } = await axios.get(
    `${window.reapit.config.platformApiUrl}${URLS.OFFERS.PAGED}?propertyId=${queryParams?.propertyId}`,
    {
      headers: {
        ...BASE_HEADERS,
        Authorization: `Bearer ${connectSession.accessToken}`,
      },
    }
  )
  return data
}

export const useGetPropertyOffer = (
  connectSession: ReapitConnectSession,
  queryParams?: getPropertyOfferParams
) => {
  return useQuery(
    ['Property Offer', queryParams?.propertyId],
    () => getPropertyOffer(connectSession, queryParams),
    {
      enabled: !!connectSession,
    }
  )
}
