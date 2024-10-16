import React from "react"
import styled from "styled-components"
import { theme } from "../../utils/theme"
import { media } from "../../utils/mediaquery"
import { StaticImage } from "gatsby-plugin-image"

const NavbarInfo = styled.div`
  display: flex;
  justify-content: center;

  > div {
    position: absolute;
    top: 140px;
    width: 400px;

    ${media.lessThan("huge")`
    //top: 140px;
    width: 250px;
  `}

    ${media.lessThan("large")`
    width: 180px;
  `}

  ${media.lessThan("medium")`
    display: none;
  `}

  ${media.lessThan("small")`
    display: none;
  `}
  }
`

const NavbarJezus = () => {
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
