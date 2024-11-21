import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Heading } from "../utils/utils"
import { theme } from "../utils/theme"
import Seo from "../components/seo/Seo"
import Layout from "../layout/layout"

const Aktualnosc = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid ${theme.color.base};
  border-radius: 20px;
  transition: all 0.5s ease-in-out;

  h5 {
    text-align: center;
    margin-bottom: 2rem;
  }
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
`

const Info = styled.div`
  padding: 2rem;
`

const Tekst = styled.div`
  a {
    display: flex;
    flex-direction: column;
    color: ${theme.color.base};
    text-decoration: underline;
    transition: all 0.5s ease-in-out;

    &:hover {
      color: ${theme.color.baseDark};
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  height: 100%;

  img {
    object-fit: cover !important;
  }
`

const Title = styled.div`
  display: grid;
  margin-bottom: 3rem;

  p {
    text-transform: capitalize;
    opacity: 0.5;
  }
`

const Film = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default function Aktualnosci({ data }) {
  return (
    <>
      <Seo title="Aktualności" slug="/aktualnosci" />
      <Layout>
        <Container>
          <Heading>
            <h1>Aktualności</h1>
            <p>Najnowsze informacje o wydarzeniach z naszego przedszkola</p>
          </Heading>

          {data.allContentfulAktualnosc.nodes.map(aktualnosc => (
            <Aktualnosc key={aktualnosc.tytul}>
              <Main>
                <ImageWrapper>
                  {aktualnosc.miniaturka ? (
                    <GatsbyImage
                      image={aktualnosc.miniaturka.gatsbyImageData}
                      alt={aktualnosc.miniaturka.filename}
                      objectFit="contain"
                    />
                  ) : (
                    <StaticImage
                      src="../assets/images/placeholder.jpg"
                      alt="Placeholder"
                      aspectRatio={1}
                      quality={100}
                      placeholder="blurred"
                    />
                  )}
                </ImageWrapper>

                <Info>
                  <Title>
                    <h3>{aktualnosc.tytul}</h3>
                    <p>{aktualnosc.dataDodania}</p>
                  </Title>

                  <Tekst
                    dangerouslySetInnerHTML={{
                      __html: aktualnosc.tekst.childMarkdownRemark.html,
                    }}
                  ></Tekst>
                </Info>
              </Main>

              {aktualnosc.plakat && (
                <GatsbyImage
                  image={aktualnosc.plakat.gatsbyImageData}
                  alt={aktualnosc.plakat.filename}
                />
              )}

              {/* {aktualnosc.youTubeLink && (
                <Film>
                  <iframe
                    src={aktualnosc.youTubeLink.replace(
                      "https://youtu.be/",
                      "https://www.youtube.com/embed/"
                    )}
                    title={aktualnosc.tytul}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                  />
                </Film>
              )} */}
            </Aktualnosc>
          ))}
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query AktualnosciPageQuery {
    allContentfulAktualnosc(sort: { dataDodania: DESC }, limit: 30) {
      nodes {
        tekst {
          childMarkdownRemark {
            html
          }
        }
        dataDodania(formatString: "DD MMMM YYYY", locale: "pl")
        plakat {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [WEBP]
            quality: 80
          )
        }
        tytul

        miniaturka {
          gatsbyImageData(
            resizingBehavior: FILL
            quality: 30
            placeholder: BLURRED
            formats: WEBP
            cropFocus: CENTER
            aspectRatio: 1
          )
          filename
        }
      }
    }
  }
`
