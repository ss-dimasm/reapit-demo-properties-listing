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

export type SelectedLocalityType = 'rural' | 'village' | 'townCity' | undefined

export interface PriceRangeTotalType {
  min: number | undefined
  max: number | undefined
}

export interface BedRoomTotalType {
  min: number | undefined
  max: number | undefined
}

export interface FilterComponentType {
  changePropertyType: (property) => void
  selectedPropertyType: SelectedPropertyTypeType
  changeLocalityType: (property) => void
  changePriceRange: (property) => void
  changeTotalBedRoom: (property) => void
}
