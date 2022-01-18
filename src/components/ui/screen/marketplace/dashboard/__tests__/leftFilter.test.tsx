import React from 'react'
// eslint-disable-next-line
import { shallow } from 'enzyme'
// eslint-disable-next-line
import LeftDashboardMarketPlace from '../leftDashboard'

jest.mock('../leftDashboard')

describe('Left bar', () => {
  it('should render <LeftDashboard/>', () => {
    const wrapper = shallow(
      <LeftDashboardMarketPlace
        selectedPropertyType={'Apartment'}
        marketingMode={'letting'}
        priceType={'letting'}
        changePropertyType={jest.fn()}
        changeLocalityType={jest.fn()}
        changePriceType={jest.fn()}
        changePriceRange={jest.fn()}
        changeTotalBedRoom={jest.fn()}
        clickedSearchButton={jest.fn()}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
