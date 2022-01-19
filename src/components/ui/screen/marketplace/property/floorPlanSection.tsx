import React from 'react'
import { Title } from '@reapit/elements'
import { floorPlanImage } from './__style__/floorPlanSection.style'

const FloorPlanSection = () => {
  return (
    <>
      <Title>Floor Plan</Title>
      <img
        className={floorPlanImage}
        src="https://images.homify.com/image/upload/a_0,c_fit,f_auto,q_auto,w_1108/v1539503219/p/photo/image/2748239/3D_Floor_Plan_Rendering_Sample.jpg"
      />
    </>
  )
}

export default FloorPlanSection
