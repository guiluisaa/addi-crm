import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconProps = {
  styleType?: 'success' | 'warning' | 'danger';
};

const Icon = styled(FontAwesomeIcon)<IconProps>`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.24);

  ${({ theme, styleType }) =>
    styleType &&
    css`
      color: ${theme.color[styleType]};
    `};
`;

type IconWrapperProps = {
  isLoading?: boolean;
};

export const IconWrapper = styled.div<IconWrapperProps>`
  display: inline-block;
  position: relative;

  ${({ theme, isLoading }) =>
    isLoading &&
    css`
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 0;
        right: -5px;

        width: 10px;
        height: 10px;
        border-radius: 50%;
        border-top: solid 2px ${theme.color.primary};
        border-right: solid 2px transparent;
        animation: spinner 0.7s linear infinite;

        vertical-align: middle;
      }

      @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
      }
    `}
`;

export default Icon;
