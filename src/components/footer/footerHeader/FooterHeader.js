import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "../../../utils/utils"

const FooterHeaderWrapper = styled.div`
  background: ${props => props.bgColor || props.theme.color.sec1};
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3,
  p {
    color: ${props => props.theme.color.font};
  }
`

const FooterHeader = ({ heading, subHeading, bgColor, hrOpacity }) => {
  return (
    <>
      <FooterHeaderWrapper bgColor={bgColor}>
        <Container>
          <h3>{heading}</h3>
          <p>{subHeading}</p>
        </Container>
      </FooterHeaderWrapper>
    </>
  )
}
export default FooterHeader
