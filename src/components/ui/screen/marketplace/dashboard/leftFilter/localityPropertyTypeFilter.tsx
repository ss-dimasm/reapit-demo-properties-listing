import { MultiSelectInput, Subtitle } from '@reapit/elements'
import React, { FC } from 'react'
import { whiteColor } from '../__styles__'
interface LocalityPropertyTypeFilterType {
  changeLocalityType: (locality) => void
}
const LocalityPropertyTypeFilter: FC<LocalityPropertyTypeFilterType> = (
  props
) => {
  const { changeLocalityType } = props

  return (
    <>
      <Subtitle hasNoMargin className={whiteColor}>
        Locality
      </Subtitle>
      <div className="el-mt3">
        <MultiSelectInput
          id="locality"
          onChange={(e) => changeLocalityType(e.currentTarget.value)}
          options={[
            {
              name: 'Rural',
              value: 'rural',
            },
            {
              name: 'Village',
              value: 'village',
            },
            {
              name: 'Town City',
              value: 'townCity',
            },
          ]}
          defaultValue={['village']}
        />
      </div>
    </>
  )
}

export default LocalityPropertyTypeFilter
