import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
//STYLES
import { styled } from "styled-components"
//COMPONENTS
import { Container, Heading } from "../utils/utils"
import { indexOf } from "lodash"

export default function Onas({ data }) {
  const plan = data.allContentfulPlanDnia.nodes[0].opis.childMarkdownRemark.html
  const zajecia = data.allContentfulZajecieDodatkowe.nodes
  const personel = data.allContentfulPersonel.nodes

  return (
    <Container>
      <Heading>
        <h1>O nas</h1>
        <p>Garść informacji o personelu i historii</p>
      </Heading>
      <p dangerouslySetInnerHTML={{ __html: plan }}></p>
      <h2>Zajęcia dodatkowe</h2>
      {zajecia.map(zajecie => (
        <div key={zajecia.indexOf(zajecie)}>
          <p>{zajecie.tytul}</p>
          <p>{zajecie.prowadzcy}</p>
          {zajecie.godzinyIGrupy.map(godzina => (
            <div>
              <li>{godzina}</li>
            </div>
          ))}
        </div>
      ))}
      <h2>Personel</h2>
      {personel.map(osoba => (
        <div key={personel.indexOf(osoba)}>
          <h6>{osoba.imie}</h6>
          <p>{osoba.stanowisko}</p>
          <GatsbyImage alt={osoba.imie} image={osoba.zdjecie.gatsbyImageData} />
        </div>
      ))}
    </Container>
  )
}

export const query = graphql`
  query OnasPageQuery {
    allContentfulPlanDnia {
      nodes {
        tytul
        opis {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulZajecieDodatkowe {
      nodes {
        tytul
        prowadzcy
        godzinyIGrupy
      }
    }
    allContentfulPersonel {
      nodes {
        imie
        stanowisko
        zdjecie {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [WEBP]
          )
        }
      }
    }
  }
`
