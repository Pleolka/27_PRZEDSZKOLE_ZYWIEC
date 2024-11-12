import React, { useState, useMemo } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
//STYLOWANIE
import styled from "styled-components"
import { theme } from "../utils/theme"
import { media } from "../utils/mediaquery"
//COMPONENTS
import { Container, Heading, Tab, TabMenu, TabWrapper } from "../utils/utils"
import Seo from "../components/seo/Seo"

export default function Grupabiedronek({ data }) {
  const dydaktyka = data.allContentfulDydaktyka.nodes

  return (
    <Container>
      <Heading>
        <h1>Grupa Biedronek</h1>
      </Heading>

      {/* Mapowanie kart dla każdego miesiąca */}
      <CardsWrapper>
        {dydaktyka.map((item, index) => (
          <DydaktykaCard key={index} item={item} />
        ))}
      </CardsWrapper>
    </Container>
  )
}

// Stylowanie komponentów
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`

const CardWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid ${theme.color.base};
  padding: 2rem;
`

const CardHeader = styled.div`
  margin-bottom: 2rem;
  p {
    color: ${theme.color.base};
  }
  h2 {
    margin-bottom: -0.5rem;
  }
`

// Komponent Karty dla danego miesiąca
const DydaktykaCard = ({ item }) => {
  const [activeTab, setActiveTab] = useState("tematyka")

  return (
    <>
      <Seo title="Grupa Biedronki" slug="/grupabiedronki" />
      <CardWrapper>
        <TabWrapper>
          <TabMenu>
            <CardHeader>
              <h2>{item.miesic}</h2>
              <p>{item.data}</p>
            </CardHeader>
            <li
              className={activeTab === "tematyka" ? "active" : ""}
              onClick={() => setActiveTab("tematyka")}
            >
              Tematyka
            </li>
            <li
              className={activeTab === "dydaktyka" ? "active" : ""}
              onClick={() => setActiveTab("dydaktyka")}
            >
              Dydaktyka
            </li>
            {item.piosenka && (
              <li
                className={activeTab === "piosenka" ? "active" : ""}
                onClick={() => setActiveTab("piosenka")}
              >
                Piosenka
              </li>
            )}
            {item.wiersz && (
              <li
                className={activeTab === "wiersz" ? "active" : ""}
                onClick={() => setActiveTab("wiersz")}
              >
                Wiersz
              </li>
            )}
            {item.katecheza && (
              <li
                className={activeTab === "katecheza" ? "active" : ""}
                onClick={() => setActiveTab("katecheza")}
              >
                Katecheza
              </li>
            )}
          </TabMenu>

          <Tab>
            {activeTab === "tematyka" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: item.tematyka.childMarkdownRemark.html,
                }}
              ></div>
            )}
            {activeTab === "dydaktyka" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: item.dydaktyka.childMarkdownRemark.html,
                }}
              ></div>
            )}
            {activeTab === "piosenka" && item.piosenka && (
              <div
                dangerouslySetInnerHTML={{
                  __html: item.piosenka.childMarkdownRemark.html,
                }}
              ></div>
            )}
            {activeTab === "wiersz" && item.wiersz && (
              <div
                dangerouslySetInnerHTML={{
                  __html: item.wiersz.childMarkdownRemark.html,
                }}
              ></div>
            )}
            {activeTab === "katecheza" && item.katecheza && (
              <div
                dangerouslySetInnerHTML={{
                  __html: item.katecheza.childMarkdownRemark.html,
                }}
              ></div>
            )}
          </Tab>
        </TabWrapper>
      </CardWrapper>
    </>
  )
}

// Zapytanie GraphQL

export const query = graphql`
  query BiedronkiPageQuery {
    allContentfulDydaktyka(
      filter: { grupa: { eq: "Biedronki" } }
      sort: { data: DESC }
      limit: 12
    ) {
      nodes {
        data(formatString: "YYYY", locale: "PL")
        miesic
        grupa
        tematyka {
          childMarkdownRemark {
            html
          }
        }
        dydaktyka {
          childMarkdownRemark {
            html
          }
        }
        piosenka {
          childMarkdownRemark {
            html
          }
        }
        wiersz {
          childMarkdownRemark {
            html
          }
        }
        katecheza {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
