import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => `${theme.breakpoint.xl}px`}) {
    max-width: 1250px;
  }
`;

export default Container;
