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

export type MarketingModeFilterType = 'selling' | 'letting'

export type SortByFilterType = '-created' | '-price' | '-bedrooms'
export interface FilterComponentType {
  selectedPropertyType: SelectedPropertyTypeType
  changePropertyType: (property) => void
  changeLocalityType: (property) => void
  changePriceRange: (property) => void
  changeTotalBedRoom: (property) => void
  clickedSearchButton: () => void
}

export interface PropertiesMarketPlaceListQuery {
  propertyType: SelectedPropertyTypeType
  locality: SelectedLocalityType | SelectedLocalityType[]
  priceRange: PriceRangeTotalType
  bedRoom: BedRoomTotalType
  marketingMode: MarketingModeFilterType
  address: string
  sortBy: SortByFilterType
}
