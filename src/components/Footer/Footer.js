import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:+923126065261'>+923126065261</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:um337757@gmail.com'>mailto:um337757@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/Usman245'>
      <AiFillGithub size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/muhammad-usman-b32723228/'>
      <AiFillLinkedin size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://instagram.com'>
      <AiFillInstagram size='3rem'/>
    </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
