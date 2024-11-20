import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  Container,
  Heading,
  Tab,
  TabMenu,
  TabWrapper,
  TabIntro,
} from "../utils/utils"
import DoPobrania from "../components/doPobrania/DoPobrania"
import Seo from "../components/seo/Seo"
import Layout from "../layout/layout"

export default function DlaRodzicow({ data }) {
  const rekrutacje = data.allContentfulDlaRodzicow.nodes

  // Ustawienie stanu aktywnej zakładki
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <Seo title="Dla rodziców" slug="/dlarodzicow" />
      <Layout>
        <Container>
          <Heading mb="3rem">
            <h1>Dla Rodziców</h1>
            <p>Dawka podstawowych informacji i plików do pobrania</p>
          </Heading>

          <TabWrapper>
            {/* Renderowanie przycisków dla każdej zakładki */}
            <TabMenu>
              {rekrutacje.map((button, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(index)} // Ustawiamy aktywną zakładkę
                  className={activeTab === index && "active"}
                >
                  {button.tytul}
                </li>
              ))}
            </TabMenu>
            {/* Renderowanie zawartości wybranej zakładki */}
            <Tab>
              {/* <h2>{rekrutacje[activeTab].tytul}</h2> */}
              <TabIntro
                dangerouslySetInnerHTML={{
                  __html: rekrutacje[activeTab].opis.childMarkdownRemark.html,
                }}
              ></TabIntro>

              {rekrutacje[activeTab].doPobrania && (
                <div>
                  <DoPobrania
                    name={rekrutacje[activeTab].doPobrania.title}
                    url={rekrutacje[activeTab].doPobrania.url}
                  />
                </div>
              )}
            </Tab>
          </TabWrapper>

          <div></div>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query DlaRodzicowPageQuery {
    allContentfulDlaRodzicow(sort: { kolejnosc: ASC }) {
      nodes {
        tytul
        doPobrania {
          title
          filename
          url
        }
        opis {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
