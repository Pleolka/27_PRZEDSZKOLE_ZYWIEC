import * as React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "../utils/utils"

export default function Kontakt({ data }) {
  const info = data.allContentfulKontakt.nodes[0]
  return (
    <Container>
      <Heading>
        <h1>Kontakt</h1>
        <p>Zapraszamy do kontaktu!</p>
      </Heading>
      <h5>{info.nazwa}</h5>
      <p>
        ul. {info.ulica} {info.numer}
      </p>
      <p>
        {info.kodPocztowy} {info.miasto}
      </p>
      <p>Województwo {info.woj}</p>
      <h5>{info.tytul1}</h5>
      <p>{info.telefon1}</p>
      <p>{info.email}</p>
      <h5>{info.tytul2}</h5>
      <p>{info.telefon2}</p>
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
