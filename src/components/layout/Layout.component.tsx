import React, { FC } from 'react';
import styled from 'styled-components';

import Container from './Container.component';
import Header from '@/components/header/Header.component';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 100vh;
`;

const Layout: FC = ({ children }) => (
  <Wrapper>
    <Header />
    <Container>{children}</Container>
  </Wrapper>
);

export default Layout;
