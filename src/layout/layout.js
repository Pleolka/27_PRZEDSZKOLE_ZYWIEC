import React from "react"
import styled, { ThemeProvider } from "styled-components"
//STYLES
import { GlobalStyle } from "../utils/globalStye"
import { theme } from "../utils/theme"
import { media } from "../utils/mediaquery"
//DATA
import { info } from "../assets/data/kontakt"
//COOKIES
// import Cookie from "../components/cookie/Cookie"
//NAVBAR
import Navbar from "../components/navbar/NavbarContainer"
//FOOTER
import Footer from "../components/footer/footer/footer"
import FooterHeader from "../components/footer/footerHeader/FooterHeader"
import FooterIks from "../components/footer/footerIks/FooterIks"
import NavbarHeader from "../components/navbar/NavbarHeader"
import NavbarJezus from "../components/navbar/NavbarJezus"

const Children = styled.div`
  //margin-top: 600px;
  ${media.lessThan("huge")`
    //margin-top: 20px;
  `}

  ${media.lessThan("large")`
    //margin-top: 300px;
  `}

  ${media.lessThan("medium")`
    //margin-top: 200px;
  `}

  ${media.lessThan("small")`
    //margin-top: 100px;
  `}
`

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <NavbarHeader />
        <Navbar />
        {/* <NavbarJezus /> */}
        <Children>{props.children}</Children>
        {/* 
        
        <Cookie />
        
        */}
        <FooterHeader />
        <Footer
          tel={info.tel}
          email={info.mail}
          ulica={info.ulica}
          nrBud={info.nrBud}
          miasto={info.miasto}
          kod={info.kod}
          woj={info.woj}
          kraj={info.kraj}
          fb={info.fb}
          insta={info.insta}
        />
        <FooterIks />
      </div>
    </ThemeProvider>
  )
}
export default Layout
