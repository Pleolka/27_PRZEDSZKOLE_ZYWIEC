import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
//DATA
import { list } from "../../../assets/data/pageStructure"
//STYLES
import { media } from "../../../utils/mediaquery"
import { CardWrapperMob, ContainerMob } from "../../../utils/utils"
import { theme } from "../../../utils/theme"
//COMPONENTS

const Foot = styled.footer`
  background-color: ${theme.color.base};
`

const FooterWrapper = styled(ContainerMob)`
  margin: 0 auto;
  padding-top: 2rem;

  p,
  a {
    color: ${({ theme }) => theme.color.baseLight};
  }

  a {
    white-space: pre-wrap;
  }
`

const FooterAdres = styled.div`
  ${media.lessThan("small")`
    display: none;
  `}

  p {
    :first-child {
      font-weight: 700;
    }
  }
`

const FooterKontakt = styled.div`
  text-align: center;
  a {
    font-weight: 700;
    transition: all 0.4s ease-in-out;

    :hover {
      font-weight: 900;
      color: ${({ theme }) => theme.color.secondaryDark};
    }
  }
  div {
    margin-top: 2rem;
    a {
      font-size: 30px;
      margin: 0 1rem;
      span {
        display: none;
      }
    }
  }
`

const FooterLinki = styled.ul`
  text-align: right;
  list-style-type: none;
  line-height: 1;

  ${media.lessThan("small")`
    display: none;
  `}

  li {
    margin-bottom: 0.2rem;
  }
  a {
    font-weight: 400;
    line-height: 1;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    :hover {
      font-weight: 500;
      color: ${({ theme }) => theme.color.secondaryDark};
    }
  }
`

const Footer = ({
  tel,
  email,
  ulica,
  nrBud,
  miasto,
  kod,
  woj,
  kraj,
  fb,
  insta,
}) => {
  const menu = list.map(item => (
    <li key={item.name}>
      <Link activeClassName="active" to={item.path}>
        {item.name}
      </Link>
    </li>
  ))

  return (
    <Foot id="footer">
      <FooterWrapper>
        <CardWrapperMob xl="3" l="3" m="3" s="1" mb="0" pb="2rem">
          <FooterAdres>
            <p>Adres</p>
            <p>
              ul. {ulica} {nrBud}
            </p>
            <p>
              {kod} {miasto}
            </p>
            <p>Województwo {woj}</p>
            <p>{kraj}</p>
          </FooterAdres>

          <FooterKontakt>
            <Link to="/kontakt">Kontakt</Link>
            <p>+48 {tel}</p>
            <p>{email}</p>
            {/* 
            <div>
              <a target="blank" href={fb}>
                <FontAwesomeIcon icon={faFacebook} />
                <span>facebook</span>
              </a>
              <a target="blank" href={insta}>
                <FontAwesomeIcon icon={faInstagram} />
                <span>instagram</span>
              </a>
            </div> */}
          </FooterKontakt>

          <FooterLinki>{menu}</FooterLinki>
        </CardWrapperMob>
      </FooterWrapper>
    </Foot>
  )
}
export default Footer
