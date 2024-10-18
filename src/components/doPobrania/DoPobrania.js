import * as React from "react"
//STYLING
import styled from "styled-components"
import { theme } from "../../utils/theme"

const Wrapper = styled.a`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  column-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  p {
    transition: all 0.5s ease-in-out;
    text-decoration: underline;
  }

  svg {
    fill: none;
    width: 40px;
    height: auto;
    stroke: ${theme.color.base};
    stroke-width: 30;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-dasharray: none;
    stroke-opacity: 1;
  }

  &:hover {
    p {
      color: ${theme.color.base};
    }
  }
`

export default function DoPobrania({ name, url }) {
  return (
    <Wrapper href={url}>
      <svg
        version="1.1"
        id="svg567"
        xmlSpace="preserve"
        width="682.66669"
        height="682.66669"
        viewBox="0 0 682.66669 682.66669"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs571">
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath581">
            <path d="M 0,512 H 512 V 0 H 0 Z" id="path579" />
          </clipPath>
        </defs>
        <g id="g573" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
          <g id="g575">
            <g id="g577" clipPath="url(#clipPath581)">
              <g id="g583" transform="translate(467,15)">
                <path
                  d="m 0,0 h -422 c -16.568,0 -30,13.431 -30,30 V 302 H 30 V 30 C 30,13.431 16.568,0 0,0 Z"
                  id="path585"
                />
              </g>
              <g id="g587" transform="translate(497,317)">
                <path
                  d="m 0,0 v 90 c 0,16.569 -13.432,30 -30,30 h -271 c 0,33.137 -26.863,60 -60,60 h -91 c -16.568,0 -30,-13.431 -30,-30 V 0"
                  id="path589"
                />
              </g>
              <g id="g591" transform="translate(75,317)">
                <path d="M 0,0 V 60 H 362 V 0" id="path593" />
              </g>
              <g id="g595" transform="translate(196,196)">
                <path d="M 0,0 60,-60 120,0" id="path597" />
              </g>
              <g id="g599" transform="translate(256,256)">
                <path d="M 0,0 V -120" id="path601" />
              </g>
              <g id="g603" transform="translate(346,106)">
                <path d="M 0,0 V -30 H -180 V 0" id="path605" />
              </g>
            </g>
          </g>
        </g>
      </svg>

      <p>{name}</p>
    </Wrapper>
  )
}
