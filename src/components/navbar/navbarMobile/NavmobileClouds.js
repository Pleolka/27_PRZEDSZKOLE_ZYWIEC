import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { media } from "../../../utils/mediaquery"
import { property } from "lodash"
import { theme } from "../../../utils/theme"

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(180deg);
  background: rgb(51, 165, 179);
  background: linear-gradient(
    0deg,
    rgba(51, 165, 179, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  ${media.greaterThan("medium")`
    display: none;
  `}
`

const NavmobileClouds = props => {
  return (
    <ImageWrapper>
      <StaticImage
        src="../../../assets/images/chmury-footer.svg"
        alt="Cloud"
        layout="fullWidth"
        quality={100}
        placeholder="blurred"
      />
    </ImageWrapper>
  )
}
export default NavmobileClouds
