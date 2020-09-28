import React, { FC } from 'react';
import styled from 'styled-components';

import { Title as SharedTitle } from '@/components/typograph/typograph.component';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Title = styled(SharedTitle)`
  margin-bottom: 20px;
`;

type SectionProps = {
  title: string;
};

const Section: FC<SectionProps> = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>

    {children}
  </Wrapper>
);

export default Section;
