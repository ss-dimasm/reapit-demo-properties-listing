import {
  PropertyModel,
  PropertyModeLetting,
  PropertyModelInternalArea,
  PropertyModelSelling,
} from '../../generated/graphql'
import {
  DefinedPropertyStatusType,
  MarketingModeFilterType,
  PriceRangeTotalType,
} from '../../interfaces/marketplace'

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
  marketingMode: MarketingModeFilterType
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
 * Only used when marketingMode from PropertyModel is sellingAndLetting
 * Used for changing between rent and sell mode
 * @param isCurrentlySelling
 * @returns
 */
export const formatMarketingModeIsSellingAndLettingProperty = (
  isCurrentlySelling: boolean
): string => {
  if (isCurrentlySelling) return 'Selling Mode'

  return 'Renting Mode'
}
/**
 * Choosing Color based marketing mode in properties
 * @param marketingMode
 * @returns
 */
export const marketingModeColorTheme = (
  marketingMode: MarketingModeFilterType
): string => {
  switch (marketingMode) {
    case 'selling':
      return 'var(--color-blue-dark2)'
    case 'letting':
      return 'var(--color-blue-dark2)'
    default:
      return 'var(--color-blue-dark2)'
  }
}

/**
 * Formatted Selling Status
 * @param sellingStatus
 * @returns string
 */
export const formatSellingStatus = (
  sellingStatus: PropertyModelSelling['status']
): DefinedPropertyStatusType => {
  switch (sellingStatus) {
    case 'preAppraisal':
      return { name: 'Pre Appraisal', color: 'low' }
    case 'valuation':
      return { name: 'Valuation', color: 'low' }
    case 'paidValuation':
      return { name: 'Paid Valuation', color: 'low' }
    case 'forSale':
      return { name: 'For Sale', color: 'success' }
    case 'underOffer':
      return { name: 'Under Offer', color: 'low' }
    case 'reserved':
      return { name: 'Reserved', color: 'low' }
    case 'exchanged':
      return { name: 'Exchanged', color: 'low' }
    case 'completed':
      return { name: 'Completed', color: 'low' }
    case 'soldExternally':
      return { name: 'Sold Externally', color: 'low' }
    case 'withdrawn':
      return { name: 'Withdrawn', color: 'danger' }
    default:
      return { name: 'Unavailable', color: 'low' }
  }
}

/**
 * Formatted Letting Status
 * @param lettingStatus
 * @returns string
 */

export const formatLettingStatus = (
  lettingStatus: PropertyModeLetting['status']
): DefinedPropertyStatusType => {
  switch (lettingStatus) {
    case 'valuation':
      return { name: 'Valuation', color: 'low' }
    case 'toLet':
      return { name: 'To Let', color: 'success' }
    case 'toLetUnavailable':
      return { name: 'To Let is Unavailable', color: 'low' }
    case 'underOffer':
      return { name: 'Under Offer', color: 'low' }
    case 'arrangingTenancy':
      return { name: 'Arranging Tenancy', color: 'low' }
    case 'tenancyCurrent':
      return { name: 'Current Tenancy', color: 'low' }
    case 'tenancyFinished':
      return { name: 'Tenancy Finished', color: 'success' }
    case 'tenancyCancelled':
      return { name: 'Tenancy Cancelled', color: 'low' }
    case 'sold':
      return { name: 'Sold', color: 'danger' }
    case 'letByOtherAgent':
      return { name: 'Let By Other Agent', color: 'low' }
    case 'letPrivately':
      return { name: 'Let Privately', color: 'low' }
    case 'provisional':
      return { name: 'Provisional', color: 'low' }
    case 'withdrawn':
      return { name: 'Withdrawn', color: 'danger' }
    default:
      return { name: 'Unavailable', color: 'danger' }
  }
}

export const definedPropertyStatus = (
  marketingMode: MarketingModeFilterType,
  propertyLettingStatus: string,
  propertySellingStatus: string,
  isSelling?: boolean
): DefinedPropertyStatusType => {
  switch (marketingMode) {
    case 'selling':
      return formatSellingStatus(propertySellingStatus)
    case 'letting':
      return formatLettingStatus(propertyLettingStatus)
    default:
      if (isSelling) return formatSellingStatus(propertySellingStatus)
      return formatLettingStatus(propertyLettingStatus)
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

/**
 * Return Square Feet formatter from subfield of PropertyModelInternalArea
 * @param internalArea
 * @returns string
 */
export const squareFeetFormatter = (
  internalArea: PropertyModelInternalArea
): string => {
  if (!internalArea || !internalArea.min || !internalArea.max)
    return 'Unprovided Data'

  const { min, max } = internalArea

  return `${min} - ${max}`
}

/**
 * Set up min and max value in Price Range Filter Feature
 * @param marketingMode
 * @returns PriceRangeTotalType
 */
export const setPriceRangeValue = (
  marketingMode: MarketingModeFilterType
): PriceRangeTotalType => {
  switch (marketingMode) {
    case 'letting':
      return { min: 0, max: 2500 }
    default:
      return { min: 0, max: 550000 }
  }
}
