import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import { media } from "../../utils/mediaquery"
import { StaticImage } from "gatsby-plugin-image"

const NavbarInfo = styled.div`
  position: relative;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;

  > div {
    width: 250px;
    margin-top: -90px;

    ${media.lessThan("huge")`
    width: 250px;
    margin-top: -290px;
  `}

    ${media.lessThan("large")`
    width: 180px;
    margin-top: -180px;
  `}

  ${media.lessThan("medium")`
    display: none;
  `}

  ${media.lessThan("small")`
    display: none;
  `}
  }

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
`

const NavbarJezus = props => {
  return (
    <NavbarInfo>
      <StaticImage
        src="../../assets/images/logo/logo.png"
        alt="Cloud"
        layout="fullWidth"
        quality={100}
        placeholder="blurred"
      />
    </NavbarInfo>
  )
}
export default NavbarJezus
