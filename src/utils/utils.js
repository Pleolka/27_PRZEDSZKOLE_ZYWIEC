import styled from "styled-components"
import { media } from "./mediaquery"
import { theme } from "./theme"

export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.xl || 7}, 1fr);

  ${media.lessThan("large")`
    grid-template-columns: repeat(${props => props.l || 4}, 1fr);
    > div:nth-of-type(2),
    > div:nth-of-type(7),
    > div:nth-of-type(6) {
      display: none;
    }
    `}

  ${media.lessThan("medium")`
    grid-template-columns: repeat(${props => props.s || 3}, 1fr);
    > div:nth-of-type(4) {
      display: none;
    }
    `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(${props => props.xs || 2}, 1fr);
    > div:nth-of-type(5) {
      display: none;
    }
    `}
`

export const ContainerMob = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1600px;
  position: relative;
  z-index: 10;
  margin-top: ${props => props.mt || "0rem"};
  margin-bottom: ${props => props.mb || "0rem"};

  ${media.lessThan("huge")`
    max-width: 1200px;
  `}

  ${media.lessThan("large")`
    max-width: 960px;
  `}

  ${media.lessThan("medium")`
    margin-top: ${props => props.mtMobile || "0rem"};
    max-width: 720px;
    padding-right: 1rem;
    padding-left: 1rem;
  `}

  ${media.lessThan("small")`
    margin-top: ${props => props.mtMobile || "0rem"};
    max-width: 540px;
    padding-right: 1rem;
    padding-left: 1rem;
  `}
`

export const Container = styled(ContainerMob)``

export const CardWrapperMob = styled(ContainerMob)`
  display: grid;
  column-gap: ${props => props.colGap || "0"};
  row-gap: ${props => props.rowGap || "0"};
  margin-top: ${props => props.mt || "0rem"};
  margin-bottom: ${props => props.mb || "0rem"};
  padding-top: ${props => props.pt || "0"};
  padding-bottom: ${props => props.pb || "0"};
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(${props => props.xl || 5}, 1fr);

  ${media.lessThan("large")`
    grid-template-columns: repeat(${props => props.l || 4}, 1fr);
  `}

  ${media.lessThan("medium")`
    grid-template-columns: repeat(${props => props.m || 3}, 1fr);
  `}

  ${media.lessThan("small")`
    grid-template-columns: repeat(${props => props.s || 2}, 1fr);
  `}
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: ${props => props.mb || "0rem"};

  h1,
  p {
    text-align: center;
  }
  h1 {
    font-family: ${theme.font.special};
    font-weight: 300;
  }
  p {
    margin-top: 0.5rem;
    font-weight: 100;
    max-width: 500px;
    //font-size: 18px;
  }

  ${media.lessThan("large")`
  //margin-top: 340px;
  `}

  ${media.lessThan("medium")`
  margin-top: 80px;
  `}

  ${media.lessThan("small")`
  margin-top: 50px;
  `}
`

export const TabWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;

  ${media.lessThan("medium")`
  grid-template-columns: 150px 1fr;
  `}

  ${media.lessThan("small")`
  grid-template-columns: 100px 1fr;
  `}
`

export const TabMenu = styled.div`
  border-right: 1px solid ${theme.color.base};
  transition: all 0.5s ease-in-out;

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    list-style-type: none;
    list-style-position: outside;
    margin-left: 0;
    height: 60px;
    transition: all 0.5s ease-in-out;
    color: ${theme.color.lightgrey};
    padding-right: 1rem;

    &.active,
    &:hover {
      font-weight: 700;
      border-right: 6px solid ${theme.color.base};
      color: ${theme.color.base};
    }
  }
`

export const Tab = styled.div`
  padding-left: 2rem;
  padding-top: 1rem;

  P {
    white-space: pre-wrap;
  }

  ul {
    margin-bottom: 2rem;
  }

  li {
    list-style-position: outside;
    margin-inline-start: 2rem;
    margin-inline-end: 0px;
    padding-inline-start: 2rem;
    margin-bottom: 0.2rem;
  }
`

export const TabIntro = styled.div`
  margin-bottom: 3rem;
`
