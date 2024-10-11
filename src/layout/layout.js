import React from "react"
import { ThemeProvider } from "styled-components"
//STYLES
import { GlobalStyle } from "../utils/globalStye"
import { theme } from "../utils/theme"
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

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <NavbarHeader />
        <Navbar />
        <div>{props.children}</div>
        {/* 
        
        <Cookie />
        
        */}
        <FooterHeader
          heading={footer.heading}
          subHeading={footer.subHeading}
          bgColor={theme.color.sec8}
          hrOpacity="1"
        />
        <Footer
          bgColor={theme.color.sec8}
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
        <FooterIks bgColor={theme.color.sec8} />
      </div>
    </ThemeProvider>
  )
}
export default Layout

export const footer = {
  heading: "Rośliny dla Twojego ogrodu",
  subHeading: "Zapraszamy codziennie od 8:00 - 18:00!",
}
