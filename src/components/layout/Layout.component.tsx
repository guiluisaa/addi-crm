import React, { FC } from 'react';
import styled from 'styled-components';

import Container from './Container.component';
import Header from '@/components/header/Header.component';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100vh;

  padding-bottom: 30px;
`;

const Layout: FC = ({ children }) => (
  <Wrapper>
    <Header />
    <Container>{children}</Container>
  </Wrapper>
);

export default Layout;
