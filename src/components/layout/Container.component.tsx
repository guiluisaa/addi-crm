import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    max-width: 600px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    max-width: 900px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoint.xl}px`}) {
    max-width: 1150px;
  }
`;

export default Container;
