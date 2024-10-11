import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import { media } from "../../utils/mediaquery"
import { StaticImage } from "gatsby-plugin-image"

const NavbarInfo = styled.div`
  padding: 0 0;
  background-color: ${props => props.bgColor || props.theme.color.sec9};
  height: 500px;
  margin-bottom: -400px;

  ${media.lessThan("small")`
    display: none;
  `}

  p {
    margin-top: -0px;
    text-align: center;
    font-family: ${theme.font.special};
    z-index: 10;
    position: absolute;
    color: ${theme.color.white};
    text-align: center;
    left: 0;
    right: 0;
    top: 30px;
    font-size: 34px;
  }
`

const NavbarHeader = props => {
  return (
    <NavbarInfo>
      <p>Przedszkole sióstr serafitek w Żywcu</p>
      <StaticImage src="../../assets/images/chmury-navbar.svg" alt="Cloud" />
    </NavbarInfo>
  )
}
export default NavbarHeader
