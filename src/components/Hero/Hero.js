import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
       <LeftSection>
        <SectionTitle main center>
          Welcome to <br/>
          My Profile
        </SectionTitle>
        <SectionText>
          I am frontend developer. I am offering web development services such as wordpress shopify html css javascript react node next js etc.
        </SectionText>
        <Button onCilick={() =>window.open("https://linkdin.com/in/muhammad-usman-b32723228/",'_blank')}>Contact Me</Button>
       </LeftSection>
  </Section>
);

export default Hero;