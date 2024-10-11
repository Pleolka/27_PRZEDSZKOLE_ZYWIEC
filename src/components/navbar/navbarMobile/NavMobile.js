import React from "react"
import styled from "styled-components"
import { media } from "../../../utils/mediaquery"
import LogoMobile from "./LogoMobile"

const ItemWrapper = styled.div`
  position: fixed;
  top: ${props => props.top || "-100vh"};
  opacity: ${props => props.opacity || 0};
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 100;
  transition: all 0.3s ease-in-out;

  ${media.greaterThan("medium")`
    display: none;
  `}

  a {
    color: ${({ theme }) => theme.color.font};
    text-align: left;
    font-size: 20px;
    padding: 1rem 1rem 1rem 1rem;
    transition: all 0.5s;
    border-style: none;

    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.color.baseLight};
      color: ${({ theme }) => theme.color.font};
    }
  }
`

const NavMobile = props => {
  return (
    <ItemWrapper top={props.top} opacity={props.opacity}>
      {props.children}
    </ItemWrapper>
  )
}
export default NavMobile
