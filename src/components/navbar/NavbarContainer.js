import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { media } from "../../utils/mediaquery"
//DATA
import { list } from "../../assets/data/pageStructure"
//STYLED
import { Container, ContainerMob } from "../../utils/utils"
//COMPONENTS
import NavMobile from "./navbarMobile/NavMobile"
import HamburgerMenuIcon from "./navbarMobile/HamburgerMenuIcon"
import LogoMobile from "./navbarMobile/LogoMobile"

const navbarItemCount = Object.keys(list).length
const navbarHeight = 60
const navbarMobileHeight = 50

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 20;
  height: ${`${navbarHeight}px`};
  width: 100%;
  transition: all 0.2s;
  background-color: transparent;
  &.scroll {
  }

  &.top {
  }

  ${media.lessThan("medium")`
    display: none;
  `}
`

const NavbarWrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: calc(0.5 * ${`${navbarHeight}px`});
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

const NavbarMobileWrapper = styled.div`
  background-color: #8f6464;
  height: ${`${navbarMobileHeight}px`};
  border-bottom: 1px solid black;
  ${media.greaterThan("medium")`
    display: none;
  `}
`

const NavbarItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${navbarItemCount}, minmax(115px, 1fr));
  justify-self: center;
`

const NavbarItem = styled(Link)`
  text-align: center;
  padding: 0 1rem;
  display: grid;
  align-items: center;
  width: 100%;
  white-space: pre-wrap;
  background-color: transparent;
  font-size: 20px;
  font-family: "Ubuntu";
  font-weight: 400;
  line-height: 1.1;
  transition: all 0.5s ease-in-out;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.color.base1};
    font-weight: 500;

    ${media.lessThan("small")`
        border-bottom: none;
        color: ${({ theme }) => theme.color.base1} !important;
  `}
  }

  ${media.lessThan("small")`
    font-size: 16px !important;
    padding: 0 0.5rem;
    border-bottom: none;
  `}

  &.top {
  }

  &.scroll {
  }
`

const Logo = styled(Link)`
  padding: 0.7rem 0 0.7rem 0;
  display: flex;
  height: ${`${navbarHeight}px`};
  div {
    height: 100% !important;
  }
  p {
    line-height: ${`${navbarHeight}px`};
  }
`

function Navbar() {
  const [hasRan, setHasRan] = useState(false)
  const [click, setClick] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const handleClick = () => setClick(!click)

  const changeNavbar = () => {
    if (window.scrollY >= navbarHeight) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    if (!hasRan) {
      setHasRan(true)
      changeNavbar()
    }
    window.addEventListener("scroll", changeNavbar)
    return () => {
      window.removeEventListener("scroll", changeNavbar)
    }
  }, [navbar])

  const menu = list.map(item => (
    <>
      <NavbarItem
        className={navbar ? "scroll" : "top"}
        activeClassName="active"
        key={item.name}
        to={item.path}
        onClick={handleClick}
      >
        {item.name}
      </NavbarItem>
    </>
  ))

  return (
    <>
      {/*BELKA NAWIGACJI*/}

      <Nav
        className={navbar ? "scroll" : "top"}
        id="menu"
        role="navigation"
        aria-label="main navigation"
      >
        <ContainerMob>
          <NavbarWrapper>
            <Logo to="/">
              <StaticImage
                src="../../assets/images/logo/logo.png"
                alt="Logo"
                layout="constrained"
                objectFit="contain"
                placeholder="blurred"
                height={50}
              />
            </Logo>

            <NavbarItemWrapper>{menu}</NavbarItemWrapper>
          </NavbarWrapper>
        </ContainerMob>
      </Nav>

      <NavbarMobileWrapper>
        {/*LOGO MOBILNE*/}
        <LogoMobile click={click} />

        {/*MENU MOBILNE*/}
        {/* <motion.div
                animate={this.state.clicked ? "open" : "closed"}
                variants={variants}>

                <NavMobile>
                    {menu}
                </NavMobile>
            </motion.div> */}

        {click ? (
          <NavMobile top="0" opacity="1" clicked={click}>
            {menu}
          </NavMobile>
        ) : (
          <NavMobile></NavMobile>
        )}

        {/*IKONKA HAMBURGER MENU POJAWIAJĄCE SIĘ TYLKO NA MOBILNYCH*/}
        <HamburgerMenuIcon onClick={handleClick} clicked={click} />
      </NavbarMobileWrapper>
    </>
  )
}

export default Navbar
