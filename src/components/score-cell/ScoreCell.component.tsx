import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import { IconWrapper } from '@/components/icons/Icon.component';

type NumberProps = {
  styleType?: 'success' | 'danger';
};

const Number = styled.span<NumberProps>`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: 24px;
  line-height: 30px;

  color: ${({ theme, styleType }) =>
    styleType ? theme.color[styleType] : 'rgba(0,0,0,0.24)'};
`;

type ScoreCellProps = {
  isLoading?: boolean;
  score: number;
};

const ScoreCell: FC<ScoreCellProps> = ({ isLoading, score }) => {
  const wasFetch = useMemo(() => score > 0, [score]);

  const styleType = useMemo(() => {
    if (score < 60 && score > 0) return 'danger';
    if (score >= 60) return 'success';

    return undefined;
  }, [score]);

  return (
    <IconWrapper isLoading={isLoading && !wasFetch}>
      <Number styleType={styleType}>{score < 10 ? `0${score}` : score}</Number>
    </IconWrapper>
  );
};

export default ScoreCell;
