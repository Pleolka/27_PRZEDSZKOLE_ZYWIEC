import * as React from "react"
import { Container, Heading } from "../utils/utils"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
//STYLING
import { styled } from "styled-components"
import { theme } from "../utils/theme"
import { media } from "../utils/mediaquery"
import Seo from "../components/seo/Seo"
import Layout from "../layout/layout"

const GaleriaWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(${props => props.xl || 4}, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  ${media.lessThan("large")`
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  `}

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(2, 1fr);
  `}
`

const GaleriaCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid ${theme.color.base};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  h5 {
    text-align: center;
    margin-bottom: 4rem;
  }

  &:hover {
    background-color: ${theme.color.baseLight};
  }
`
const MyImage = styled.div`
  margin: -2rem;
`

export default function Galeria({ data }) {
  return (
    <>
      <Seo title="Galeria" slug="/galeria" />
      <Layout>
        <Container>
          <Heading>
            <h1>Galeria</h1>
            <p>Zawsze najnowsze zdjęcia naszych przedszkolaków</p>
          </Heading>
          <GaleriaWrapper>
            {data.allContentfulGaleria.nodes.map(galeria => (
              <GaleriaCard
                key={galeria.tytul}
                href={galeria.linkDoGalerii}
                target="blank"
              >
                <h5>{galeria.tytul}</h5>
                <MyImage>
                  <GatsbyImage
                    image={galeria.zdjecie.gatsbyImageData}
                    alt={galeria.tytul}
                    objectFit="contain"
                  />
                </MyImage>
              </GaleriaCard>
            ))}
          </GaleriaWrapper>
        </Container>
      </Layout>
    </>
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
            resizingBehavior: FILL
            cropFocus: CENTER
            backgroundColor: "white"
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 20
            width: 700
          )
        }
      }
    }
  }
`
