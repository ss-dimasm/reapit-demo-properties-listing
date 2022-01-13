import {
  PropertyModel,
  PropertyModeLetting,
  PropertyModelInternalArea,
} from '../../generated/graphql'

/**
 * Compile address
 */
export const getPropertyAddress = (
  address: PropertyModel['address']
): string => {
  const fixedAddress = `${address?.buildingNumber} ${address?.line1}, ${address?.line3}`
  return fixedAddress
}

/**
 * Marketing Mode format
 */
export const formatMarketingModeProperty = (
  marketingMode: PropertyModel['marketingMode']
): string => {
  switch (marketingMode) {
    case 'selling':
      return 'Selling'
    case 'letting':
      return 'Renting'
    default:
      return 'Selling / Renting'
  }
}

/**
 * Choosing Color based marketing mode in properties
 * @param marketingMode
 * @returns
 */
export const marketingModeColorTheme = (
  marketingMode: PropertyModel['marketingMode']
): string => {
  switch (marketingMode) {
    case 'selling':
      return 'var(--intent-critical)'
    case 'letting':
      return 'var(--intent-secondary)'
    default:
      return 'var(--intent-success)'
  }
}

/**
 * Formatted Letting Status
 */
export const formatLettingStatus = (
  lettingStatus: PropertyModeLetting['status']
): string => {
  switch (lettingStatus) {
    case 'valuation':
      return 'Valuation'
    case 'toLet':
      return 'To Let'
    case 'toLetUnavailable':
      return 'To Let is Unavailable'
    case 'underOffer':
      return 'Under Offer'
    case 'underOfferUnavailable':
      return 'Under Offer is Unavailable'
    case 'arrangingTenancy':
      return 'Arranging Tenancy'
    case 'tenancyCurrent':
      return 'Current Tenancy'
    case 'tenancyFinished':
      return 'Tenancy Finished'
    case 'tenancyCancelled':
      return 'Tenancy Cancelled'
    case 'sold':
      return 'Sold'
    case 'letByOtherAgent':
      return 'Let By Other Agent'
    case 'letPrivately':
      return 'Let Privately'
    case 'provisional':
      return 'Provisional'
    case 'withdrawn':
      return 'Withdrawn'
    default:
      return 'Unavailable'
  }
}

/**
 * Price Formatting
 * Convert number to thousand digit with dot every 3
 * @param price
 */
export const priceFormatting = (price: number): string => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

/**
 * Rent Frequently Formatter
 * Defined Human language of query rent frequently from property model
 * @param rentFrequently
 * @returns
 */
export const rentFrequentlyFormatter = (
  rentFrequently: PropertyModeLetting['rentFrequency']
): string => {
  switch (rentFrequently) {
    case 'weekly':
      return 'Weekly'
    case 'monthly':
      return 'Monthly'
    default:
      return 'Annually'
  }
}

export const squareFeetFormatter = (
  internalArea: PropertyModelInternalArea
): string => {
  if (!internalArea || !internalArea.min || !internalArea.max)
    return 'Unprovided Data'
  const { min, max } = internalArea

  return `${min} - ${max}`
}
