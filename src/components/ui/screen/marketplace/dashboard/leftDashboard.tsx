import React from 'react'
import {
  BodyText,
  Button,
  FlexContainer,
  Icon,
  Input,
  InputAddOn,
  InputGroup,
  Label,
  MultiSelectInput,
  SecondaryNav,
  Subtitle,
  Title,
} from '@reapit/elements'

import {
  typeTextDescription,
  whiteColor,
  transparentBackground,
} from './__styles__'

const LeftDashboardMarketPlace = () => {
  return (
    <>
      <SecondaryNav>
        <Title className={whiteColor}>Filter</Title>
        <div>
          <Subtitle className={whiteColor}>Property Types</Subtitle>
          <div>
            <InputGroup>
              <Label
                className={`${whiteColor}`}
                style={{ backgroundColor: 'transparent', paddingLeft: '0' }}
              >
                <Icon
                  icon="flatInfographic"
                  iconSize="medium"
                  className={transparentBackground}
                />
                <Input type="checkbox" />
                House
              </Label>
            </InputGroup>
          </div>
        </div>
        <div className="el-my6">
          <Subtitle hasNoMargin className={whiteColor}>
            Locality
          </Subtitle>
          <div className="el-mt3">
            <MultiSelectInput
              id="locality"
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
                  value: 'town-city',
                },
              ]}
              defaultValues={['rural']}
            />
          </div>
        </div>
        <div className="el-my6">
          <Subtitle hasNoMargin className={whiteColor}>
            Price Range
          </Subtitle>
          <div className="el-mt3">
            <InputGroup className="el-my3">
              <Label
                style={{
                  backgroundColor: 'transparent',
                  fontWeight: '500',
                  padding: '0',
                }}
                className={whiteColor}
              >
                Min Price
              </Label>
              <InputAddOn className="el-pl4" style={{ order: '1' }}>
                $
              </InputAddOn>
              <Input
                type="num"
                min={0}
                style={{ width: '60%' }}
                placeholder="Minimum Price"
              />
            </InputGroup>
            <InputGroup className="el-my3">
              <Label
                style={{
                  backgroundColor: 'transparent',
                  fontWeight: '500',
                  padding: '0',
                }}
                className={whiteColor}
              >
                Max Price
              </Label>
              <InputAddOn className="el-pl4" style={{ order: '1' }}>
                $
              </InputAddOn>
              <Input
                type="num"
                min={0}
                style={{ width: '60%' }}
                placeholder="Maximum Price"
              />
            </InputGroup>
          </div>
        </div>
        <div className="el-my6">
          <Subtitle hasNoMargin className={whiteColor}>
            Facility
          </Subtitle>
          <div className="el-mt3">
            <FlexContainer isFlexJustifyBetween isFlexColumn>
              <div>
                <BodyText hasNoMargin className={typeTextDescription}>
                  Bedroom
                </BodyText>
              </div>
              <FlexContainer isFlexJustifyBetween className="el-mt4">
                <InputGroup style={{ width: '48%' }}>
                  <Label
                    style={{
                      backgroundColor: 'transparent',
                      fontWeight: '500',
                      padding: '0',
                    }}
                    className={whiteColor}
                  >
                    Min
                  </Label>
                  <Input
                    type="num"
                    min={0}
                    style={{ width: '100%' }}
                    placeholder="Min"
                  />
                </InputGroup>
                <InputGroup style={{ width: '48%' }}>
                  <Label
                    style={{
                      backgroundColor: 'transparent',
                      fontWeight: '500',
                      padding: '0',
                    }}
                    className={whiteColor}
                  >
                    Max
                  </Label>
                  <Input
                    type="num"
                    min={0}
                    style={{ width: '100%' }}
                    placeholder="Max"
                  />
                </InputGroup>
              </FlexContainer>
            </FlexContainer>
          </div>
        </div>
        <FlexContainer isFlexJustifyBetween className="el-mt8">
          <Button>reset</Button>
          <Button intent="critical" chevronRight>
            Search
          </Button>
        </FlexContainer>
      </SecondaryNav>
    </>
  )
}

export default LeftDashboardMarketPlace
