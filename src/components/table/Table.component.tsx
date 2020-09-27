import styled from 'styled-components';

import BoxShadow from '@/shared-styles/BoxShadow.css';

const Table = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  ${BoxShadow};

  tr {
    &:not(:first-child) {
      border-top: solid 1px ${({ theme }) => theme.color.border};
    }
  }

  th {
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.font.color.secondary};
    text-align: left;
    font-size: 14px;
    line-height: 14px;
    padding: 10px;
  }

  td {
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.font.color.primary};
    padding: 20px 10px;

    font-size: 16px;
    line-height: 19px;
  }
`;

export default Table;
