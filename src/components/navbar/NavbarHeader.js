import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import { media } from "../../utils/mediaquery"
import { StaticImage } from "gatsby-plugin-image"

const NavbarInfo = styled.div`
  position: relative;
  margin-bottom: 0px;

  p {
    text-align: center;
    font-family: ${theme.font.special};
    z-index: 10;
    position: absolute;
    color: ${theme.color.white};
    text-align: center;
    left: 0;
    right: 0;
    top: 20px;
    font-size: 34px;
  }

  ${media.lessThan("medium")`
        display: none;
     
  `}
`

const NavbarHeader = () => {
  return (
    <NavbarInfo>
      <p>Przedszkole sióstr serafitek w Żywcu</p>
      <StaticImage
        src="../../assets/images/chmury-navbar.svg"
        alt="Cloud"
        layout="fullWidth"
        quality={100}
        placeholder="blurred"
      />
    </NavbarInfo>
  )
}
export default NavbarHeader
