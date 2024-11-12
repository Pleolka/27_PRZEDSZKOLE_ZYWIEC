import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Image = styled.div`
  display: none;
`

const SeoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Image>
      <StaticImage
        src="../../assets/images/SEO_image.png"
        alt={data.site.siteMetadata.title}
        formats={["png"]}
        layout="fullWidth"
        objectFit="cover"
        placeholder="blurred"
      />
    </Image>
  )
}

export default SeoImage
