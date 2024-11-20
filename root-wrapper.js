import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./src/utils/globalStye"
import { theme } from "./src/utils/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
    {/* <Layout {...props}></Layout> */}
  </ThemeProvider>
)
