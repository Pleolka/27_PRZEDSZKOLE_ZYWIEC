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
  ${media.lessThan("small")`
    display: none;
  `}

  a {
    color: ${({ theme }) => theme.color.font};
    //background-color: ${({ theme }) => theme.color.baseLight};
    text-align: left;
    font-size: 20px;
    padding: 1rem 1rem 1rem 1rem;
    transition: all 0.5s;
    border-style: none;

    :hover,
    &.active {
      background-color: ${({ theme }) => theme.color.grey8};
      color: ${({ theme }) => theme.color.font};
    }

    :first-child {
      padding: 0;
      margin-bottom: 0;
    }
  }
`

const NavMobile = props => {
  return (
    <ItemWrapper top={props.top} opacity={props.opacity}>
      <LogoMobile position="relative" click />
      {props.children}
    </ItemWrapper>
  )
}
export default NavMobile
