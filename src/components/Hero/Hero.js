import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this page is to help developers build better more modern appicaltions for users and clients
      </SectionText>
      <Button onClick={() => window.location = 'http://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;