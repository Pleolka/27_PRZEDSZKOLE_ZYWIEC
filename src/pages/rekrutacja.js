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

export default function Rekrutacja({ data }) {
  const rekrutacje = data.allContentfulRekrutacja.nodes

  // Ustawienie stanu aktywnej zakładki
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Container>
      <Heading mb="3rem">
        <h1>Rekrutacja</h1>
        <p>Zapraszamy wszystkie dzieci</p>
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
              {rekrutacje[activeTab].doPobrania.map((plik, idx) => (
                <DoPobrania name={plik.title} url={plik.url} key={idx} />
              ))}
            </div>
          )}
        </Tab>
      </TabWrapper>

      <div></div>
    </Container>
  )
}

export const query = graphql`
  query RekrutacjaPageQuery {
    allContentfulRekrutacja(sort: { kolejnosc: ASC }) {
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
