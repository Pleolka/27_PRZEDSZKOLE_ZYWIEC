import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
//STYLING
import { styled } from "styled-components"

//COMPONENTS
import { Container, Heading } from "../utils/utils"
import { theme } from "../utils/theme"

const Aktualnosc = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid ${theme.color.base};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  h5 {
    text-align: center;
    margin-bottom: 2rem;
  }
`

const Tekst = styled.div`
  a {
    display: flex;
    flex-direction: column;
    color: ${theme.color.base};
  }
`

const Image = styled.div`
  display: flex;
  width: 200px;
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
    <Container>
      <Heading>
        <h1>Aktualności</h1>
        <p>Najnowsze informacje o wydarzeniach z naszego przedszkola</p>
      </Heading>

      {data.allContentfulAktualnosc.nodes.map(aktualnosc => (
        <Aktualnosc>
          {
            //TITLE
          }
          <h6>{aktualnosc.tytul}</h6>
          <p>{aktualnosc.dataDodania}</p>
          {
            //IMAGE
          }
          <Image>
            {aktualnosc.miniaturka ? (
              <GatsbyImage
                image={aktualnosc.miniaturka.gatsbyImageData}
                alt={aktualnosc.miniaturka.filename}
                objectFit="contain"
              />
            ) : (
              <StaticImage
                src="../assets/images/logo/logo.png"
                alt="Cloud"
                aspectRatio={1}
                quality={100}
                transformOptions={{ fit: "contain" }}
                placeholder="blurred"
                backgroundColor="white"
              />
            )}
          </Image>
          {
            //TEKST
          }
          <Tekst
            dangerouslySetInnerHTML={{
              __html: aktualnosc.tekst.childMarkdownRemark.html,
            }}
          ></Tekst>
          {
            //PLAKAT
          }
          {aktualnosc.plakat && (
            <GatsbyImage
              image={aktualnosc.plakat.gatsbyImageData}
              alt={aktualnosc.plakat.filename}
            />
          )}
          {
            //YOUTUBE
          }
          {aktualnosc.youTubeLink && (
            <Film>
              <iframe
                src={aktualnosc.youTubeLink.replace(
                  "https://youtu.be/",
                  "https://www.youtube.com/embed/"
                )}
                title={aktualnosc.tytul}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </Film>
          )}
        </Aktualnosc>
      ))}
    </Container>
  )
}

export const query = graphql`
  query AktualnosciPageQuery {
    allContentfulAktualnosc {
      nodes {
        tekst {
          childMarkdownRemark {
            html
          }
        }
        dataDodania
        plakat {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [WEBP]
          )
        }
        tytul
        youTubeLink
        miniaturka {
          gatsbyImageData(aspectRatio: 1, placeholder: BLURRED, formats: [WEBP])
          filename
        }
      }
    }
  }
`
