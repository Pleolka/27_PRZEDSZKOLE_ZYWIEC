import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Heading } from "../utils/utils"
import { theme } from "../utils/theme"
import Seo from "../components/seo/Seo"
import Layout from "../layout/layout"
import Paginacja from "../components/paginacja/Paginacja"

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

export default function Aktualnosci({ data }) {
  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = React.useState(0)

  const totalItems = data.allContentfulAktualnosc.nodes.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const currentItems = data.allContentfulAktualnosc.nodes.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <Seo title="Aktualności" slug="/aktualnosci" />
      <Layout>
        <Container>
          <Heading>
            <h1>Aktualności</h1>
            <p>Najnowsze informacje o wydarzeniach z naszego przedszkola</p>
          </Heading>

          {currentItems.map(aktualnosc => (
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
            </Aktualnosc>
          ))}

          <Paginacja
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query AktualnosciPageQuery {
    allContentfulAktualnosc(sort: { dataDodania: DESC }) {
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
