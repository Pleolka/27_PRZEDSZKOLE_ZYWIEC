import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  title,
  slug,
  description,
  pageDescription,
  titleMedia,
  imageFb,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          siteUrl
        }
      }
    }
  `)

  const defaultInfo = {
    description:
      "Przedszkole Sióstr Serafitek w Żywcu to miejsce, gdzie dzieci rozwijają się w duchu wartości chrześcijańskich. Oferujemy bezpieczne i pełne miłości środowisko, w którym każde dziecko jest wyjątkowe.",
    keyWords: [
      "przedszkole Żywiec",
      "Serafitki",
      "przedszkole katolickie",
      "edukacja chrześcijańska",
      "przedszkole niepubliczne",
    ],
    titleMedia: "Przedszkole Sióstr Serafitek w Żywcu - Edukacja z wartościami",
    imageFb:
      "https://images.unsplash.com/photo-1609618992870-f519a360482e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Upewnij się, że ten obrazek istnieje na Twoim serwerze
    twitterCreator: "@SerafitkiZywiec",
    twitterUrl: "https://twitter.com/SerafitkiZywiec",
  }

  const {
    description: defaultDescription,
    keyWords,
    titleMedia: defaultTitleMedia,
    imageFb: defaultImageFb,
    twitterCreator,
    twitterUrl,
  } = defaultInfo

  const siteTitle = site.siteMetadata.title
  const siteAuthor = site.siteMetadata.author
  const siteUrl = site.siteMetadata.siteUrl

  return (
    <Helmet>
      <html lang="pl" />
      <meta charSet="utf-8" />
      <title>{title ?? siteTitle}</title>
      <meta name="description" content={description ?? defaultDescription} />
      <meta name="keywords" content={keyWords.join(", ")} />
      <meta name="author" content={siteAuthor} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* GOOGLE Verification */}
      <meta
        name="google-site-verification"
        content="qKaAGxTlh8WiSmAjdjfwk93DJrWrnWZrZSubs4ACW_s"
      />

      {/* FACEBOOK Meta Tags */}
      <meta property="og:url" content={`${siteUrl}${slug ?? ""}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? siteTitle} />
      <meta
        property="og:description"
        content={pageDescription ?? defaultDescription}
      />
      <meta property="og:image" content={imageFb ?? defaultImageFb} />
      <meta property="og:locale" content="pl_PL" />

      {/* TWITTER Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:site" content={twitterUrl} />
      <meta name="twitter:title" content={titleMedia ?? defaultTitleMedia} />
      <meta
        name="twitter:description"
        content={description ?? defaultDescription}
      />
      <meta name="twitter:image" content={imageFb ?? defaultImageFb} />
    </Helmet>
  )
}

export default Seo
