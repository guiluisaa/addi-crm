import React, { FC, useEffect } from 'react';

import Section from '@/components/section/Section.component';
import Prospectors from './Prospectors.component';
import useProspector from '@/io/redux/prospector/useProspector';

const ProspectorsSection: FC = () => {
  const { prospectors, getProspectors } = useProspector();

  useEffect(() => {
    getProspectors();
  }, []);

  return (
    <Section title="Prospectors">
      <Prospectors prospectors={prospectors} />
    </Section>
  );
};

export default ProspectorsSection;
