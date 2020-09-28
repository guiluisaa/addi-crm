import React, { FC, useEffect } from 'react';

import Section from '@/components/section/Section.component';
import Leads from './Leads.component';
import useLead from '@/io/redux/lead/useLead';

const LeadsSection: FC = () => {
  const { leads, getLeads } = useLead();

  useEffect(() => {
    getLeads();
  }, []);

  return (
    <Section title="Leads">
      <Leads leads={leads} />
    </Section>
  );
};

export default LeadsSection;
