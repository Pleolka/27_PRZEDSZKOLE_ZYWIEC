import React, { useState, useMemo } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { theme } from "../utils/theme"
import { media } from "../utils/mediaquery"
//COMPONENTS
import { Container, Heading, Tab, TabMenu, TabWrapper } from "../utils/utils"
import Seo from "../components/seo/Seo"
import Layout from "../layout/layout"
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

  p:nth-of-type(1) {
    color: ${theme.color.secondary};
  }

  ul {
    margin-top: 1rem;
    li {
      list-style-type: none;
    }
  }
`

const OsiagnieciaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Pozwala na zawijanie zdjęć do nowych wierszy */
  gap: 1rem; /* Odstępy między zdjęciami */
  justify-content: space-between; /* Równe rozmieszczenie zdjęć */
  padding: 1rem; /* Opcjonalne wypełnienie */
`

const FotoWrapper = styled.div`
  flex: 0 0 auto; /* Dynamiczna szerokość zgodna z proporcjami */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    height: auto;
    max-height: 200px; /* Wysokość dostosowuje się do szerokości */
    width: 100%; /* Zdjęcie wypełnia szerokość kontenera */
    object-fit: contain; /* Zachowanie proporcji bez przycinania */
  }
`

export default function Onas({ data }) {
  const plan = data.allContentfulPlanDnia.nodes[0].opis.childMarkdownRemark.html
  const zajecia = data.allContentfulZajecieDodatkowe.nodes
  const personel = data.allContentfulPersonel.nodes
  const oPrzedszkolu = data.allContentfulOPrzedszkolu.nodes[0]
  const osiagniecia = data.allContentfulOsiagniecia.nodes[0]
  const czegoUczymy = data.allContentfulCzegoUczymy.nodes[0]

  // Stan do zarządzania aktywną zakładką
  const [activeTab, setActiveTab] = useState(0)

  // Pre-renderowanie zawartości w celu optymalizacji
  const processHtml = html => {
    return html.replace(/(.*?—)/g, "<strong>$1</strong>")
  }

  const renderPlan = useMemo(() => {
    // Przetworzenie HTML, aby pogrubić tekst do znaku "—"
    const processedPlan = processHtml(plan)
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: processedPlan,
        }}
      ></div>
    )
  }, [plan])

  const renderOPrzedszkolu = useMemo(() => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: oPrzedszkolu.opis.childMarkdownRemark.html,
        }}
      ></div>
    )
  }, [oPrzedszkolu])

  const renderCzegoUczymy = useMemo(() => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: czegoUczymy.opis.childMarkdownRemark.html,
        }}
      ></div>
    )
  }, [zajecia])

  const renderOsiagniecia = useMemo(() => {
    return osiagniecia.zdjecia.map((osiagniecie, index) => (
      <FotoWrapper key={index}>
        <GatsbyImage
          image={osiagniecie.gatsbyImageData}
          alt={`Zdjęcie osiągnięcia ${index + 1}`}
          imgStyle={{
            objectFit: "contain", // Zachowanie proporcji
            height: "auto",
            width: "auto",
          }}
        />
      </FotoWrapper>
    ))
  }, [osiagniecia])

  const renderZajecia = useMemo(() => {
    return zajecia.map(zajecie => (
      <ZajeciaDodatkowe key={zajecie.tytul}>
        <h5>{zajecie.tytul}</h5>
        <p>{zajecie.prowadzcy}</p>
        <ul>
          {zajecie.godzinyIGrupy.map(godzina => (
            <li key={godzina}>
              {godzina
                .split(":")
                .map((part, index) =>
                  index === 0 ? (
                    <strong key={index}>{part}:</strong>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                )}
            </li>
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
    <>
      <Seo title="O nas" slug="/onas" />
      <Layout>
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
                O przedszkolu
              </li>

              <li
                onClick={() => setActiveTab(1)}
                className={activeTab === 1 ? "active" : ""}
              >
                Plan dnia
              </li>
              <li
                onClick={() => setActiveTab(2)}
                className={activeTab === 2 ? "active" : ""}
              >
                Zajęcia dodatkowe
              </li>
              <li
                onClick={() => setActiveTab(3)}
                className={activeTab === 3 ? "active" : ""}
              >
                Personel
              </li>

              <li
                onClick={() => setActiveTab(4)}
                className={activeTab === 4 ? "active" : ""}
              >
                Czego uczymy
              </li>

              <li
                onClick={() => setActiveTab(5)}
                className={activeTab === 5 ? "active" : ""}
              >
                Osiągnięcia i sukcesy
              </li>
            </TabMenu>
            {/* Zawartość wybranej zakładki */}
            <Tab>
              {activeTab === 0 && renderOPrzedszkolu}

              {activeTab === 1 && renderPlan}

              {activeTab === 2 && (
                <ZajeciaDodatkoweWrapper>
                  {renderZajecia}
                </ZajeciaDodatkoweWrapper>
              )}

              {activeTab === 3 && (
                <PersonelWrapper>{renderPersonel}</PersonelWrapper>
              )}

              {activeTab === 4 && renderCzegoUczymy}

              {activeTab === 5 && (
                <OsiagnieciaWrapper>{renderOsiagniecia}</OsiagnieciaWrapper>
              )}
            </Tab>
          </TabWrapper>
        </Container>
      </Layout>
    </>
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
            aspectRatio: 1
            backgroundColor: "white"
            resizingBehavior: FILL
            cropFocus: CENTER
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 20
            width: 450
          )
        }
      }
    }
    allContentfulOPrzedszkolu {
      nodes {
        tytul
        opis {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulCzegoUczymy {
      nodes {
        tytul
        opis {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulOsiagniecia {
      nodes {
        tytul
        zdjecia {
          gatsbyImageData(
            backgroundColor: "white"
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 20
          )
        }
      }
    }
  }
`
