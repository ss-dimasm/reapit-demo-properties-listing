// eslint-disable-next-line
import { BodyText, FlexContainer, InputGroup, Subtitle } from '@reapit/elements'
import React from 'react'

import {
  wrapperDiv,
  wrapperBackgroundColor,
  imageWrapper,
  whiteColorText,
  horizontalLine,
  getInTouchWrapper,
  getIntTouchText,
} from './__style__/agentSection.style'

const AgentSection = () => {
  return (
    <div className={wrapperDiv}>
      <div className={wrapperBackgroundColor}>
        <div>
          <img
            className={imageWrapper}
            src="https://www.biowritingservice.com/wp-content/themes/tuborg/images/Executive%20Bio%20Sample%20Photo.png"
          />
        </div>
        <FlexContainer isFlexColumn isFlexAlignCenter className="el-mb6 el-mt3">
          <BodyText className={whiteColorText} hasNoMargin>
            Dimas M
          </BodyText>
          <BodyText className={whiteColorText} hasNoMargin>
            SoftwareSeni
          </BodyText>
        </FlexContainer>
        <div>
          <InputGroup
            icon="phoneSystem"
            type="text"
            defaultValue="62-123-456-789"
            disabled
            className="el-my3"
          />
          <InputGroup
            icon="emailSystem"
            type="email"
            defaultValue="dimas.m@softwareseni.com"
            disabled
            className="el-my3"
          />
        </div>
        <hr className={horizontalLine} />
        <div className={getInTouchWrapper}>
          <div>
            <Subtitle hasNoMargin className={getIntTouchText}>
              Get In Touch
            </Subtitle>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentSection
