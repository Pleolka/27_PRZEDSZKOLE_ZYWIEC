import * as React from "react"
import { Container, Heading } from "../utils/utils"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
//STYLING
import { styled } from "styled-components"
import { theme } from "../utils/theme"

const GaleriaWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(${props => props.xl || 4}, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
`

const GaleriaCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid ${theme.color.base};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  h5 {
    text-align: center;
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: ${theme.color.baseLight};
  }
`

export default function Galeria({ data }) {
  return (
    <Container>
      <Heading>
        <h1>Galeria</h1>
        <p>Zawsze najnowsze zdjęcia naszych przedszkolaków</p>
      </Heading>
      <GaleriaWrapper>
        {data.allContentfulGaleria.nodes.map(galeria => (
          <GaleriaCard href={galeria.linkDoGalerii}>
            <h5>{galeria.tytul}</h5>
            <GatsbyImage
              image={galeria.zdjecie.gatsbyImageData}
              alt={galeria.tytul}
              objectFit="contain"
            />
          </GaleriaCard>
        ))}
      </GaleriaWrapper>
    </Container>
  )
}

export const query = graphql`
  query GaleriaPageQuery {
    allContentfulGaleria(sort: { data: DESC }) {
      nodes {
        tytul
        linkDoGalerii
        zdjecie {
          gatsbyImageData(
            aspectRatio: 1
            backgroundColor: "white"
            quality: 100
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
`
