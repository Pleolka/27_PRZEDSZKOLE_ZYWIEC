import React from "react"
import { wrapRootElement as wrap } from "./root-wrapper"
import { ServerStyleSheet } from "styled-components"

export const wrapRootElement = wrap

export const onRenderBody = ({ setHeadComponents }) => {
  const sheet = new ServerStyleSheet()
  const styleTags = sheet.getStyleElement() // Pobiera style wygenerowane przez Styled Components

  setHeadComponents([
    // Preconnect do serwerów Google Fonts
    <link
      key="google-fonts-preconnect"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="google-fonts-preconnect-crossorigin"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    // Preload krytycznych czcionek
    <link
      key="google-fonts-preload"
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Afacad+Flux&family=Pacifico&family=Yaldevi&display=swap"
      as="style"
    />,
    // Styl czcionek Google Fonts
    <link
      key="google-fonts-stylesheet"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Afacad+Flux&family=Pacifico&family=Yaldevi&display=swap"
    />,
    // Wstrzyknięcie stylów Styled Components do <head>
    ...styleTags,
  ])
}
