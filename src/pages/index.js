import * as React from "react"
import { graphql } from "gatsby"
//STYLING
import styled from "styled-components"
import { media } from "../utils/mediaquery"
//COMPONENTS
import { Container, Heading } from "../utils/utils"
import Card from "../components/card/Card"
import Seo from "../components/seo/Seo"
import Layout from "../layout/layout"

const CardWrapper = styled.div`
  margin-top: 3rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(${props => props.grupyCount || 1}, 300px);
  column-gap: 3rem;
  row-gap: 2rem;
  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 250px);
    column-gap: 1rem;
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(1, 250px);
  `}
`

export default function Home({ data }) {
  return (
    <div>
      <Seo title="Przedszkole" slug="/" />
      <Layout>
        <Container>
          <Heading>
            <h1>Nasze grupy</h1>
            <p>
              Zapraszamy do zapoznania się z informacjami o naszych grupach
              przedszkolnych
            </p>
          </Heading>
          <CardWrapper grupyCount={data.allContentfulGrupy.nodes.length}>
            {data.allContentfulGrupy.nodes.map(grupa => (
              <Card
                key={grupa.nazwa}
                name={grupa.nazwa}
                wiek={grupa.wiek}
                image={grupa.obraz.gatsbyImageData}
                alt={grupa.obraz.filename}
                to={`/${grupa.adres}`}
              />
            ))}
          </CardWrapper>
        </Container>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allContentfulGrupy {
      nodes {
        nazwa
        wiek
        adres
        obraz {
          filename
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 20
            width: 300
          )
        }
      }
    }
  }
`
