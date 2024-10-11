import styled from "styled-components"
import { media } from "./mediaquery"

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
