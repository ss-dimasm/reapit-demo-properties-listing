import { Icon, IconNames, Label } from '@reapit/elements'
import React, { FC, ReactElement } from 'react'
import { SelectedPropertyTypeType } from '../../../../../../interfaces/marketplace'
import { transparentBackground, whiteColor } from '../__styles__'

interface IconPropertyTypeFilterType {
  type: SelectedPropertyTypeType
}
interface IconPropertyObjectType {
  name: string | undefined
  iconName: IconNames | undefined
}
const IconPropertyTypeFilter: FC<IconPropertyTypeFilterType> = (
  props
): ReactElement | any => {
  const { type } = props

  const iconObjectProps: IconPropertyObjectType = {
    name: undefined,
    iconName: undefined,
  }

  switch (type) {
    case 'House':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'houseInfographic'
      break
    case 'Bungalow':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'bungalowInfographic'
      break
    case 'Apartment':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'developmentInfographic'
      break
    case 'Maisonette':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'maisonetteInfographic'
      break
    case 'Land':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'landInfographic'
      break
    case 'Farm':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'farmInfographic'
      break
    case 'Cottage':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'cottageInfographic'
      break
    case 'Studio':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'houseInfographic'
      break
    case 'Development Plot':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'developmentInfographic'
      break
    case 'Town House':
      iconObjectProps['name'] = type
      iconObjectProps['iconName'] = 'officesMenu'
      break
  }
  return (
    <>
      <Label
        className={`${whiteColor}`}
        style={{ backgroundColor: 'transparent', paddingLeft: '0' }}
      >
        <Icon
          icon={`${iconObjectProps.iconName ?? 'homeSystem'}`}
          iconSize="medium"
          className={transparentBackground}
        />
        {iconObjectProps.name}
      </Label>
    </>
  )
}

export default IconPropertyTypeFilter
