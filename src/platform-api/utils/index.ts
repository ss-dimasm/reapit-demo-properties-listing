import {
  MarketingModeFilterType,
  PriceRangeTotalType,
} from '../../interfaces/marketplace'

/**
 * Separate Locality Filter for Paged Properties
 * @param locality
 * @returns string
 */
export const separateLocality = (locality): string => {
  if (!locality) return ''
  const localityArray: string[] = locality.split(',')
  if (localityArray.length >= 1) {
    let template: string = ''
    localityArray.forEach((arr) => {
      template += `&locality=${arr}`
    })
    return template
  } else {
    return ''
  }
}

/**
 * Considering the price range value to marketing mode
 * @param marketingMode
 * @param priceRange
 * @returns string
 */
export const considerPriceMarketingMode = (
  marketingMode: MarketingModeFilterType,
  priceRange: PriceRangeTotalType,
  priceType?: Exclude<MarketingModeFilterType, 'sellingAndLetting'>
): string => {
  switch (marketingMode) {
    case 'selling':
      return `&priceFrom=${priceRange.min}&priceTo=${priceRange.max}`
    case 'letting':
      return `&rentFrom=${priceRange.min}&rentFromTo=${priceRange.max}`
    default:
      if (priceType === 'letting') {
        return `&rentFrom=${priceRange.min}&rentFromTo=${priceRange.max}`
      } else {
        return `&priceFrom=${priceRange.min}&priceTo=${priceRange.max}`
      }
  }
}
