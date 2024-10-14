import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "../../../utils/utils"
import { theme } from "../../../utils/theme"

const FooterHeaderWrapper = styled.div`
  margin-top: 3rem;
  background: rgb(51, 165, 179);
  background: linear-gradient(
    180deg,
    rgba(51, 165, 179, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
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
