import React, { FC, useState } from 'react';

import { LeadModel } from '@/models/Lead.model';
import Button from '@/components/button/Button.component';
import RegistryCell from '@/components/registry-cell/RegistryCell.component';
import JudicialRecordsCell from '@/components/judicial-records/JudicialRecordsCell.component';
import ScoreCell from '../score-cell/ScoreCell.component';
import { Paragraph } from '@/components/typograph/typograph.component';

type LeadProps = {
  lead: LeadModel;
};

const Lead: FC<LeadProps> = ({ lead }) => {
  const [isLoading] = useState(false);

  return (
    <tr>
      <td style={{ textAlign: 'right' }}>{lead.id}</td>
      <td>{`${lead.firstName} ${lead.lastName}`}</td>
      <td>{lead.nationalIdNumber}</td>
      <td>{lead.birthdate}</td>
      <td>{lead.email}</td>
      <td style={{ textAlign: 'center' }}>
        <RegistryCell
          isLoading={isLoading}
          existsInRegisty={lead.existsInRegisty}
          matchWithRegisty={lead.matchWithRegisty}
        />
      </td>
      <td style={{ textAlign: 'center' }}>
        <JudicialRecordsCell
          isLoading={isLoading}
          hasJudicialRecord={lead.hasJudicialRecord}
        />
      </td>
      <td style={{ textAlign: 'center' }}>
        <ScoreCell isLoading={isLoading} score={lead.score} />
      </td>
      <td style={{ textAlign: 'center' }}>
        {isLoading ? (
          <Paragraph color="secondary">Processing...</Paragraph>
        ) : (
          <Button>Validate</Button>
        )}
      </td>
    </tr>
  );
};

export default Lead;
