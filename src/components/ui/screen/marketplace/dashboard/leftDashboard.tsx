import React, { FC } from 'react'
import { SecondaryNav } from '@reapit/elements'

import FilterComponent from './leftFilter'
import type { FilterComponentType } from '../../../../../interfaces/marketplace'

const LeftDashboardMarketPlace: FC<FilterComponentType> = (props) => {
  return (
    <>
      <SecondaryNav style={{ position: 'sticky', top: '0px' }}>
        <FilterComponent {...props} />
      </SecondaryNav>
    </>
  )
}

export default LeftDashboardMarketPlace
