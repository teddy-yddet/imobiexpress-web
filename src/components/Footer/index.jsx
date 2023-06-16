import React, { Fragment } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/logo.png";
import { Container, Copy, Item } from "./styles";

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src={LogoImg} alt="" />
          <p>
            Avenida Doutor Ênio Pires de Camargo, 2971 - Bairro Ribeirão -
            Capivari - SP - CEP: 13365-010
          </p>
          <nav>
            <li>
              <span>
                <FaFacebook size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaInstagram size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp size={32} />
              </span>
            </li>
          </nav>
        </Item>
        <Item>
          <h3>Our Services</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>Aluno: Sidnei M. Mitani - CV3016447</p>
        <ul>
          <li>
            <span>ADS</span>
          </li>
          <li>
            <span>Desenvolvimento de sistemas WEB</span>
          </li>
          <li>
            <span>5º semestre</span>
          </li>
        </ul>
      </Copy>
    </Fragment>
  );
};

export default Footer;
