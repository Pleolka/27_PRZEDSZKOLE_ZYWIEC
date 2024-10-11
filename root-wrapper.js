import React from "react"
import { ThemeProvider } from "styled-components"
import Layout from "./src/layout/layout"
import { GlobalStyle } from "./src/utils/globalStye"
import { theme } from "./src/utils/theme"

export const wrapRootElement = ({
  element,
  props
}) => (
   <ThemeProvider theme={theme}>
     <GlobalStyle />
     <Layout {...props}>{element}</Layout>
   </ThemeProvider>
)