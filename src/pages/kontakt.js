import * as React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "../utils/utils"
import styled from "styled-components"
import { media } from "../utils/mediaquery"

const KontaktWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
  h5 {
    margin-bottom: 1rem;
  }
  > div {
    &:nth-of-type(2) {
      text-align: right;

      h5 {
        &:nth-of-type(2) {
          margin-top: 3rem;
        }
      }
    }
  }

  ${media.lessThan("small")`
    grid-template-columns:  1fr;
    text-align: center;
    margin-top: 2rem;
    > div {   
    &:nth-of-type(2) {
      margin-top: 2rem;
      text-align: center;
      h5 {
        &:nth-of-type(2) {
          margin-top: 2rem;
        }
      }
    }
  }
    `}
`

export default function Kontakt({ data }) {
  const info = data.allContentfulKontakt.nodes[0]
  return (
    <Container>
      <Heading>
        <h1>Kontakt</h1>
        <p>Zapraszamy do kontaktu!</p>
      </Heading>
      <KontaktWrapper>
        <div>
          <h5>{info.nazwa}</h5>
          <p>
            ul. {info.ulica} {info.numer}
          </p>
          <p>
            {info.kodPocztowy} {info.miasto}
          </p>
          <p>Województwo {info.woj}</p>
        </div>
        <div>
          <h5>{info.tytul1}</h5>
          <p>
            Tel. <b>{info.telefon1}</b>
          </p>
          <p>{info.email}</p>
          <h5>{info.tytul2}</h5>
          <p>
            Tel. <b>+48 {info.telefon2}</b>
          </p>
        </div>
      </KontaktWrapper>
    </Container>
  )
}

export const query = graphql`
  query KontaktPageQuery {
    allContentfulKontakt {
      nodes {
        nazwa
        ulica
        numer
        kodPocztowy
        miasto
        woj
        tytul1
        telefon1
        email
        tytul2
        telefon2
      }
    }
  }
`
