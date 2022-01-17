import { Intent } from '@reapit/elements'

export type SelectedPropertyTypeType =
  | 'House'
  | 'Bungalow'
  | 'Apartment'
  | 'Maisonette'
  | 'Land'
  | 'Farm'
  | 'Cottage'
  | 'Studio'
  | 'Town House'
  | 'Development Plot'

export type SelectedLocalityType = 'rural' | 'village' | 'townCity'

export interface PriceRangeTotalType {
  min: number
  max: number
}

export interface BedRoomTotalType {
  min: number
  max: number
}
/**
 * States Types of Marketing Mode in filter feature
 */
export type MarketingModeFilterType =
  | 'selling'
  | 'letting'
  | 'sellingAndLetting'

export type SortByFilterType = '-created' | '-price' | '-bedrooms'

export interface FilterComponentType {
  selectedPropertyType: SelectedPropertyTypeType
  marketingMode: MarketingModeFilterType
  priceType: Exclude<MarketingModeFilterType, 'sellingAndLetting'>
  changePropertyType: (property: SelectedPropertyTypeType) => void
  changeLocalityType: (property: SelectedLocalityType) => void
  changePriceType: (priceType: FilterComponentType['priceType']) => void
  changePriceRange: (property: PriceRangeTotalType) => void
  changeTotalBedRoom: (property: BedRoomTotalType) => void
  clickedSearchButton: () => void
}

export interface PropertiesMarketPlaceListQuery {
  propertyType: SelectedPropertyTypeType
  locality: SelectedLocalityType | SelectedLocalityType[]
  priceType: Exclude<MarketingModeFilterType, 'sellingAndLetting'>
  priceRange: PriceRangeTotalType
  bedRoom: BedRoomTotalType
  marketingMode: MarketingModeFilterType
  address: string
  sortBy: SortByFilterType
}

/**
 * Interface query in Marketplace first page
 * @description to get properties image each property
 */

export interface PropertiesImagesMarketPlaceQuery {
  propertyId: string
}

/**
 * Property Status Type
 * Formatting property status indicator
 */
export interface DefinedPropertyStatusType {
  name: string
  color: Intent | undefined
}
