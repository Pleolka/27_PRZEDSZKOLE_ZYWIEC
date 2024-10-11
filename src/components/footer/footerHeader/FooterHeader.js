import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "../../../utils/utils"
import { theme } from "../../../utils/theme"

const FooterHeaderWrapper = styled.div`
  margin-top: 20rem;
  background-color: ${theme.color.base};
  h3,
  p {
    color: ${props => props.theme.color.font};
  }
`

const FooterHeader = () => {
  return (
    <>
      <FooterHeaderWrapper>
        <StaticImage
          src="../../../assets/images/chmury-footer.svg"
          alt="Cloud"
          layout="fullWidth"
          quality={100}
        />
      </FooterHeaderWrapper>
    </>
  )
}
export default FooterHeader
