import React from "react"
import styled from "styled-components"
import { media } from "../../utils/mediaquery"
import { theme } from "../../utils/theme"

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  button {
    display: flex;
    gap: 10px;
    margin: 0 0.5rem;
    padding: 0.8rem 1.5rem;
    //height: 48px;
    border: none;
    border-radius: 12px;
    background-color: ${theme.color.base};

    cursor: pointer;
    p {
      color: white;
      font-weight: 500;
      margin: 0;
      text-transform: uppercase;
      //margin-top: -4px;
      //margin-bottom: 1px;
      line-height: 0;
      justify-self: center;
      align-self: center;
    }

    &:disabled {
      background-color: ${theme.color.baseLight};
      cursor: default;
    }

    &:hover:not(:disabled) {
      background-color: ${theme.color.baseDark};
    }

    svg {
      justify-self: center;
      align-self: center;
      margin: 0;
      height: ${theme.font.size.p.xs};
      width: auto;
    }
  }

  span {
    margin: 0 1rem;
    font-weight: bold;
  }

  ${media.lessThan("small")`
  margin: 1rem 0;
  button {
     padding: 16px 15px; 
  }

  svg {
      display: none;
  }
  
  p {
      font-size: 15px;
  }
  span {
    margin: 0 .5rem;
    font-size: 15px;
    font-weight: bold;
  }
  `}
`

const Paginacja = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <PaginationWrapper>
      <button onClick={onPrevious} disabled={currentPage === 0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="8 6 8 12"
          fill="currentColor"
        >
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
        <p>Poprzednia</p>
      </button>
      <span>
        {currentPage + 1} / {totalPages}
      </span>
      <button onClick={onNext} disabled={currentPage === totalPages - 1}>
        <p>Następna</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="8 6 8 12"
          fill="currentColor"
        >
          <path d="M10 6l-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </PaginationWrapper>
  )
}

export default Paginacja
