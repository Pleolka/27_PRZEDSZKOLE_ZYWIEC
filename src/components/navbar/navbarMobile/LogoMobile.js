import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { media } from "../../../utils/mediaquery"
import { property } from "lodash"

const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: ${props => props.position || "absolute"};
  height: 50px;
  z-index: 150;
  margin-bottom: 0;
  > div {
    margin: 0.5rem;
    margin-left: 1rem;
    height: 100%;
  }

  ${media.lessThan("small")`
    display: none;
  `}
`

const LogoMobile = props => {
  return (
    <Logo to="/" position={props.position}>
      {property.navbarScroll || props.click ? (
        <StaticImage
          src="../../../assets/images/logo/logo.png"
          alt="Logo="
          placeholder="blurred"
          layout="fixed"
          height={28}
        />
      ) : (
        <StaticImage
          src="../../../assets/images/logo/logo_white.png"
          alt="Logo="
          placeholder="blurred"
          layout="fixed"
          height={28}
        />
      )}
    </Logo>
  )
}
export default LogoMobile
