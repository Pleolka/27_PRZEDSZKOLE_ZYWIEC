import * as React from "react"
import { Container } from "../../utils/utils"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//STYLING
import styled from "styled-components"
import { theme } from "../../utils/theme"
import { Link } from "gatsby"

const Heading = styled.div`
  h4,
  p {
    text-align: center;
  }
  h3 {
    font-family: ${theme.font.special};
    font-weight: 100;
    text-align: center;
  }
  margin-bottom: 2rem;
`

const CardContainer = styled(Link)`
  padding: 2rem;
  border: 1px solid ${theme.color.base};
  border-radius: 20px;

  &.button {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: ${theme.color.baseLight};
    }
  }
`

export default function Card({ name, wiek, image, alt, to }) {
  return (
    <CardContainer to={to} className={to && "button"}>
      <Heading>
        <h3>{name}</h3>
        <p>{wiek}</p>
      </Heading>

      <GatsbyImage image={image} alt={alt} objectFit="contain" />
    </CardContainer>
  )
}
