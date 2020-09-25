import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import Flexbox from '@/shared-styles/Flexbox.css';
import BoxShadow from '@/shared-styles/BoxShadow.css';
import Container from '../layout/Container.component';
import AddiLogo from '../logo/AddiLogo.component';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.white};
  padding: 20px 0;

  ${BoxShadow}
`;

const Content = styled.div`
  ${Flexbox}
  justify-content: space-between;
  align-items: center;
`;

const HomeLink = styled(Link)`
  display: inline-block;
`;

const UserIcon = styled(FontAwesomeIcon).attrs(() => ({ icon: faUserCircle }))`
  font-size: 32px;
`;

const Header: FC = () => (
  <Wrapper>
    <Container>
      <Content>
        <HomeLink to="/">
          <AddiLogo />
        </HomeLink>

        <UserIcon />
      </Content>
    </Container>
  </Wrapper>
);

export default Header;
