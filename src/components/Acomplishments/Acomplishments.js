import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: "500+", text: 'Linkdin Followers', },
  { number: 1000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Achievements
    </SectionTitle>
    <Boxes>
      {data.map((card,index) =>{
        return(
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        )
      })}
    </Boxes>
  </Section>
);
export default Acomplishments
