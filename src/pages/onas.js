import React, { useState, useMemo } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { theme } from "../utils/theme"
import { media } from "../utils/mediaquery"
//COMPONENTS
import { Container, Heading, Tab, TabMenu, TabWrapper } from "../utils/utils"

// Stylowanie dla personelu
const PersonelWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(1, 1fr);
  `}
`

const PersonelCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${theme.color.base};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  &:hover {
    background-color: ${theme.color.baseLight};
  }
`

const PersonalCardHeader = styled.div`
  padding-top: 2rem;
  height: 120px;
  margin-bottom: 1rem;
  h5,
  p {
    text-align: center;
  }
`

// Stylowanie dla zajęć dodatkowych
const ZajeciaDodatkoweWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  ${media.lessThan("medium")`
    grid-template-columns: repeat(1, 1fr);
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(1, 1fr);
  `}
`

const ZajeciaDodatkowe = styled.div`
  p:nth-of-type(1),
  h5,
  li {
    text-align: center;
  }

  ul {
    margin-top: 1rem;
    li {
      list-style-type: none;
    }
  }
`

export default function Onas({ data }) {
  const plan = data.allContentfulPlanDnia.nodes[0].opis.childMarkdownRemark.html
  const zajecia = data.allContentfulZajecieDodatkowe.nodes
  const personel = data.allContentfulPersonel.nodes

  // Stan do zarządzania aktywną zakładką
  const [activeTab, setActiveTab] = useState(0)

  // Pre-renderowanie zawartości w celu optymalizacji
  const renderPlan = useMemo(() => {
    return <div dangerouslySetInnerHTML={{ __html: plan }}></div>
  }, [plan])

  const renderZajecia = useMemo(() => {
    return zajecia.map(zajecie => (
      <ZajeciaDodatkowe key={zajecie.tytul}>
        <h5>{zajecie.tytul}</h5>
        <p>{zajecie.prowadzcy}</p>
        <ul>
          {zajecie.godzinyIGrupy.map(godzina => (
            <li key={godzina}>{godzina}</li>
          ))}
        </ul>
      </ZajeciaDodatkowe>
    ))
  }, [zajecia])

  const renderPersonel = useMemo(() => {
    return personel.map(osoba => (
      <PersonelCard key={osoba.imie}>
        <PersonalCardHeader>
          <h5>{osoba.imie}</h5>
          <p>{osoba.stanowisko}</p>
        </PersonalCardHeader>

        <GatsbyImage
          image={osoba.zdjecie.gatsbyImageData}
          alt={osoba.imie}
          objectFit="contain"
        />
      </PersonelCard>
    ))
  }, [personel])

  return (
    <Container>
      <Heading mb="3rem">
        <h1>O nas</h1>
        <p>Garść informacji o personelu i historii</p>
      </Heading>
      <TabWrapper>
        {/* Menu zakładek */}
        <TabMenu>
          <li
            onClick={() => setActiveTab(0)}
            className={activeTab === 0 ? "active" : ""}
          >
            Plan dnia
          </li>
          <li
            onClick={() => setActiveTab(1)}
            className={activeTab === 1 ? "active" : ""}
          >
            Zajęcia dodatkowe
          </li>
          <li
            onClick={() => setActiveTab(2)}
            className={activeTab === 2 ? "active" : ""}
          >
            Personel
          </li>
        </TabMenu>
        {/* Zawartość wybranej zakładki */}
        <Tab>
          {activeTab === 0 && renderPlan}

          {activeTab === 1 && (
            <ZajeciaDodatkoweWrapper>{renderZajecia}</ZajeciaDodatkoweWrapper>
          )}

          {activeTab === 2 && (
            <PersonelWrapper>{renderPersonel}</PersonelWrapper>
          )}
        </Tab>
      </TabWrapper>
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
