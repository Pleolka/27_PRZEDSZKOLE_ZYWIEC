import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
//DATA
import { list } from "../../../assets/data/pageStructure"
//STYLES
import { media } from "../../../utils/mediaquery"
import { CardWrapperMob, ContainerMob } from "../../../utils/utils"
import { theme } from "../../../utils/theme"
//COMPONENTS

const Foot = styled.footer`
  background-color: ${theme.color.base};
`

const FooterWrapper = styled(ContainerMob)`
  margin: 0 auto;
  padding-top: 2rem;

  p,
  a {
    color: ${({ theme }) => theme.color.baseLight};
  }

  a {
    white-space: pre-wrap;
  }
`

const FooterAdres = styled.div`
  ${media.lessThan("small")`
    display: none;
  `}

  p {
    :first-child {
      font-weight: 700;
    }
  }
`

const FooterKontakt = styled.div`
  text-align: center;
  a {
    font-weight: 700;
    transition: all 0.4s ease-in-out;

    :hover {
      font-weight: 900;
      color: ${({ theme }) => theme.color.secondaryDark};
    }
  }
  div {
    margin-top: 2rem;
    a {
      font-size: 30px;
      margin: 0 1rem;
      span {
        display: none;
      }
    }
  }
`

const FooterLinki = styled.ul`
  text-align: right;
  list-style-type: none;
  line-height: 1;

  ${media.lessThan("small")`
    display: none;
  `}

  li {
    margin-bottom: 0.2rem;
  }
  a {
    font-weight: 400;
    line-height: 1;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    :hover {
      font-weight: 500;
      color: ${({ theme }) => theme.color.secondaryDark};
    }
  }
`

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
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
      `}
      render={data => {
        const info = data.allContentfulKontakt.nodes[0]

        return (
          <Foot id="footer">
            <FooterWrapper>
              <CardWrapperMob xl="3" l="3" m="3" s="1" mb="0" pb="2rem">
                <FooterAdres>
                  <p>Adres</p>
                  <p>{info.nazwa}</p>
                  <p>
                    ul. {info.ulica} {info.numer}
                  </p>
                  <p>
                    {info.kodPocztowy} {info.miasto}
                  </p>
                  <p>Województwo {info.woj}</p>
                </FooterAdres>

                <FooterKontakt>
                  <a href="/kontakt">Kontakt</a>
                  <p>{info.telefon1}</p>
                  <p>{info.email}</p>
                </FooterKontakt>

                <FooterLinki>
                  {list.map(item => (
                    <li key={item.name}>
                      <Link activeClassName="active" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </FooterLinki>
              </CardWrapperMob>
            </FooterWrapper>
          </Foot>
        )
      }}
    />
  )
}
