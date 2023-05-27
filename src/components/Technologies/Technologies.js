import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
     <SectionDivider/>
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
      I have worked with a range of technologies inb web development world.
      from back-end to Design.
     </SectionText>
     <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Mongo Db
          </ListParagraph>
        </ListContainer>
      </ListItem>
     </List>
  </Section>
);

export default Technologies;
