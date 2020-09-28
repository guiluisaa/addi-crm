import React, { FC } from 'react';
import styled from 'styled-components';

import { Paragraph as SharedParagraph } from '@/components/typograph/typograph.component';

const Paragraph = styled(SharedParagraph).attrs(() => ({
  color: 'secondary',
}))`
  font-size: 12px;
  line-height: 16px;
`;

type LeadFeedbackCellProps = {
  existsInRegisty: boolean;
  matchWithRegisty: boolean;
  hasJudicialRecord: boolean;
  score: number;
};

const LeadFeedbackCell: FC<LeadFeedbackCellProps> = ({
  existsInRegisty,
  matchWithRegisty,
  hasJudicialRecord,
  score,
}) => (
  <>
    {!existsInRegisty && <Paragraph>- Don't exist in the registry</Paragraph>}
    {existsInRegisty && !matchWithRegisty && (
      <Paragraph>- The information doesn't match</Paragraph>
    )}
    {hasJudicialRecord && <Paragraph>- Has Judicial Record</Paragraph>}
    {score < 60 && <Paragraph>- Low score</Paragraph>}
  </>
);

export default LeadFeedbackCell;
