import React from "react"
import styled from "styled-components"
import { media } from "../../../utils/mediaquery"
import { Arrow, Close } from "../../../assets/images/svg-icons/icons"

const Icon = styled.button`
  position: fixed;
  right: 0.5rem;
  top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 36px;
  width: 36px;

  font-size: 20px;
  color: ${({ theme }) => theme.color.base1};

  background-color: rgba(255, 255, 255, 0);
  border: 1px solid white;
  border-radius: 10px;
  padding: 0.2rem 0.2rem;
  z-index: 200;
  cursor: pointer;

  :hover {
    background-color: rgba(2, 2, 2, 0);
    color: ${({ theme }) => theme.color.grey5};
  }

  :focus {
    border: 1px solid white;
  }

  ${media.lessThan("medium")`
    display: none;
  `}
`

const HamburgerMenuIcon = props => {
  return (
    <Icon onClick={props.onClick}>{props.clicked ? <Close /> : <Arrow />}</Icon>
  )
}
export default HamburgerMenuIcon
