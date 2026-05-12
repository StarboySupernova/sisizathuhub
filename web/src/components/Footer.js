import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          "Sisizathu Hub is a technology powerhouse dedicated to bridging the
          digital gap for SMMEs. By providing managed cybersecurity, bespoke
          software solutions, and robust hosting infrastructure, we ensure your
          business is secure, scalable, and ready for the future"
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          39 Rivier Street, Bothaville, 9660, Free State, South Africa
        </ParagraphText>
        <ParagraphText className="copyright">
          © Sisizathu Hub (Pvt) Ltd | EST. 2014 |{" "}
          {new Date().getFullYear()} | All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
