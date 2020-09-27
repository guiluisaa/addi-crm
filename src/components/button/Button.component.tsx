import styled, { css } from 'styled-components';

type ButtonProps = {
  uppercase?: boolean;
  isLoading?: boolean;
};

const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  line-height: 40px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  color: ${({ theme }) => theme.color.white};
  border: solid 2px ${({ theme }) => theme.color.success};
  background-color: ${({ theme }) => theme.color.success};

  ${({ theme, isLoading }) =>
    isLoading &&
    css`
      &:before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border-top: solid 2px ${theme.color.white};
        border-right: solid 2px transparent;
        animation: spinner 0.7s linear infinite;

        vertical-align: middle;
        margin-right: 10px;
      }

      @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
      }
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.32;
  }
`;

export default Button;
