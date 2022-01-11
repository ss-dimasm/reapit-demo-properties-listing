import React, { FC, ReactElement, useEffect, useState } from 'react'

import {
  FlexContainer,
  FloatingButton,
  InputGroup,
  Subtitle,
} from '@reapit/elements'
import { whiteColor } from '../__styles__'
import IconPropertyTypeFilter from './iconPropertyTypeFilter'

import { SelectedPropertyTypeType } from '../../../../../../interfaces/marketplace'

interface PropertyTypeFilterType {
  changePropertyType: (propertyType) => void
  selectedPropertyType: SelectedPropertyTypeType
}

const PropertyTypeFilter: FC<PropertyTypeFilterType> = (
  props
): ReactElement => {
  const { changePropertyType, selectedPropertyType } = props

  const [propertyPosition, setPropertyPosition] = useState<number>(1)

  useEffect(() => {
    defineSelectedPropertyType(propertyPosition)
  }, [propertyPosition])

  const nextButton = (): void => {
    setPropertyPosition(propertyPosition + 1)
  }
  const prevButton = (): void => {
    setPropertyPosition(propertyPosition - 1)
  }

  const defineSelectedPropertyType = (propertyPosition: number): void => {
    switch (propertyPosition) {
      case 1:
        changePropertyType('House')
        break
      case 2:
        changePropertyType('Bungalow')
        break
      case 3:
        changePropertyType('Apartment')
        break
      case 4:
        changePropertyType('Maisonette')
        break
      case 5:
        changePropertyType('Land')
        break
      case 6:
        changePropertyType('Farm')
        break
      case 7:
        changePropertyType('Cottage')
        break
      case 8:
        changePropertyType('Studio')
        break
      case 9:
        changePropertyType('Town House')
        break
      case 10:
        changePropertyType('Development Plot')
        break
    }
  }

  return (
    <>
      <Subtitle className={whiteColor}>Property Types</Subtitle>
      <FlexContainer isFlexJustifyBetween>
        <FloatingButton
          intent="critical"
          icon="arrowLeftSystem"
          style={{ height: '35px', width: '35px' }}
          onClick={prevButton}
          disabled={propertyPosition <= 1 ? true : false}
        />
        <InputGroup>
          <IconPropertyTypeFilter type={selectedPropertyType} />
        </InputGroup>
        <FloatingButton
          intent="critical"
          icon="arrowRightSystem"
          style={{ height: '35px', width: '35px' }}
          onClick={nextButton}
          disabled={propertyPosition >= 10 ? true : false}
        />
      </FlexContainer>
    </>
  )
}

export default PropertyTypeFilter
