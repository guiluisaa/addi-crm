import React, { FC } from 'react';

import Table from '@/components/table/Table.component';
import { ProspectorModel } from '@/models/Prospector.model';
import Prospector from './Prospector.component';

type ProspectorsProps = {
  prospectors: ProspectorModel[];
};

const Prospectors: FC<ProspectorsProps> = ({ prospectors }) => (
  <Table>
    <thead>
      <tr>
        <th style={{ textAlign: 'right' }}>Code</th>
        <th>Full Name</th>
        <th>ID Number</th>
        <th>Birthdate</th>
        <th>E-mail</th>
        <th style={{ textAlign: 'center' }}>National Registry</th>
        <th style={{ textAlign: 'center' }}>Judicial Records</th>
        <th style={{ textAlign: 'center' }}>Credit Score</th>
      </tr>
    </thead>

    <tbody>
      {prospectors.map(prospector => (
        <Prospector prospector={prospector} />
      ))}
    </tbody>
  </Table>
);

export default Prospectors;
