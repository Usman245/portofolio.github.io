import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section  id="project">
    <SectionDivider/>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((item)=>{
          return(
            <BlogCard key={item.id}>
              <Img src={item.image}/>
              <TitleContent title>
                <HeaderThree>{item.title}</HeaderThree>
                <hr/>
                </TitleContent>
                <CardInfo>{item.description}</CardInfo>
                <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {item.tags.map((tag,i)=>{
                 return <Tag id={i}>{tag}</Tag>
                  })}
                </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href="#">Code</ExternalLinks>
                  <ExternalLinks href="#">Soure</ExternalLinks>
                </UtilityList>
            </BlogCard>
          )
        })}
      </GridContainer>

  </Section>
);

export default Projects;