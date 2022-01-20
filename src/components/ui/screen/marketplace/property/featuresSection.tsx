import React from 'react'
import { FlexContainer, SmallText, Subtitle, Title } from '@reapit/elements'

import {
  MdOutlineHome,
  MdOutlineBed,
  MdOutlineBathtub,
  MdOutlineSquareFoot,
  MdOutlineLocalParking,
  MdOutlineCalendarToday,
} from 'react-icons/md'

import {
  featuresWrapper,
  featureText,
  propertyFeatureText,
  featureBoxWrapper,
  featureTypeTextWrapper,
} from './__style__/featuresSection.style'

const FeaturesSection = () => {
  return (
    <>
      <Title>Features</Title>
      <div>
        <FlexContainer className={featuresWrapper} isFlexWrap>
          <div className={featureBoxWrapper}>
            <FlexContainer isFlexAlignCenter>
              <FlexContainer className={featureTypeTextWrapper}>
                <MdOutlineHome
                  size="1.5rem"
                  color="var(--intent-primary)"
                  className="el-mr2"
                />
                <Subtitle hasNoMargin className={featureText}>
                  Type:
                </Subtitle>
              </FlexContainer>
              <div>
                <Subtitle hasNoMargin className={propertyFeatureText}>
                  House
                </Subtitle>
              </div>
            </FlexContainer>
          </div>
          <div className={featureBoxWrapper}>
            <FlexContainer isFlexAlignCenter>
              <FlexContainer className={featureTypeTextWrapper}>
                <MdOutlineBed
                  size="1.5rem"
                  color="var(--intent-primary)"
                  className="el-mr2"
                />
                <Subtitle hasNoMargin className={featureText}>
                  Bedroom:
                </Subtitle>
              </FlexContainer>
              <div>
                <Subtitle hasNoMargin className={propertyFeatureText}>
                  2
                </Subtitle>
              </div>
            </FlexContainer>
          </div>
          <div className={featureBoxWrapper}>
            <FlexContainer isFlexAlignCenter>
              <FlexContainer className={featureTypeTextWrapper}>
                <MdOutlineBathtub
                  size="1.5rem"
                  color="var(--intent-primary)"
                  className="el-mr2"
                />
                <Subtitle hasNoMargin className={featureText}>
                  Bathroom:
                </Subtitle>
              </FlexContainer>
              <div>
                <Subtitle hasNoMargin className={propertyFeatureText}>
                  1
                </Subtitle>
              </div>
            </FlexContainer>
          </div>
          <div className={featureBoxWrapper}>
            <FlexContainer isFlexAlignCenter>
              <FlexContainer className={featureTypeTextWrapper}>
                <MdOutlineSquareFoot
                  size="1.5rem"
                  color="var(--intent-primary)"
                  className="el-mr2"
                />
                <Subtitle hasNoMargin className={featureText}>
                  Square Foot:
                </Subtitle>
              </FlexContainer>
              <div>
                <Subtitle hasNoMargin className={propertyFeatureText}>
                  1000sqt
                </Subtitle>
              </div>
            </FlexContainer>
          </div>
          <div className={featureBoxWrapper}>
            <FlexContainer isFlexAlignCenter>
              <FlexContainer className={featureTypeTextWrapper}>
                <MdOutlineLocalParking
                  size="1.5rem"
                  color="var(--intent-primary)"
                  className="el-mr2"
                />
                <Subtitle hasNoMargin className={featureText}>
                  Parking:
                </Subtitle>
              </FlexContainer>
              <div>
                <Subtitle hasNoMargin className={propertyFeatureText}>
                  3 Garage
                </Subtitle>
              </div>
            </FlexContainer>
          </div>
          <div className={featureBoxWrapper}>
            <FlexContainer isFlexAlignCenter>
              <FlexContainer className={featureTypeTextWrapper}>
                <MdOutlineCalendarToday
                  size="1.5rem"
                  color="var(--intent-primary)"
                  className="el-mr2"
                />
                <Subtitle hasNoMargin className={featureText}>
                  Year built:
                </Subtitle>
              </FlexContainer>
              <div>
                <Subtitle hasNoMargin className={propertyFeatureText}>
                  2021
                </Subtitle>
              </div>
            </FlexContainer>
          </div>
        </FlexContainer>
      </div>
      <div className="el-mt6">
        <SmallText>*Accordion of Interior details will appear here</SmallText>
        <SmallText>
          *Accordion of Construction details will appear here
        </SmallText>
        <SmallText>*Accordion of Services details will appear here</SmallText>
      </div>
    </>
  )
}

export default FeaturesSection
