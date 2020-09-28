import React, { FC, useState } from 'react';

import { ProspectorModel } from '@/models/Prospector.model';
import RegistryCell from '@/components/registry-cell/RegistryCell.component';
import JudicialRecordsCell from '@/components/judicial-records/JudicialRecordsCell.component';
import ScoreCell from '../score-cell/ScoreCell.component';

type ProspectorProps = {
  prospector: ProspectorModel;
};

const Prospector: FC<ProspectorProps> = ({ prospector }) => {
  const [isLoading] = useState(false);

  return (
    <tr>
      <td style={{ textAlign: 'right' }}>{prospector.id}</td>
      <td>{`${prospector.firstName} ${prospector.lastName}`}</td>
      <td>{prospector.nationalIdNumber}</td>
      <td>{prospector.birthdate}</td>
      <td>{prospector.email}</td>
      <td style={{ textAlign: 'center' }}>
        <RegistryCell
          isLoading={isLoading}
          existsInRegisty={prospector.existsInRegisty}
          matchWithRegisty={prospector.matchWithRegisty}
        />
      </td>
      <td style={{ textAlign: 'center' }}>
        <JudicialRecordsCell
          isLoading={isLoading}
          hasJudicialRecord={prospector.hasJudicialRecord}
        />
      </td>
      <td style={{ textAlign: 'center' }}>
        <ScoreCell isLoading={isLoading} score={prospector.score} />
      </td>
    </tr>
  );
};

export default Prospector;
