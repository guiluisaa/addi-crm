import React, { FC, useEffect } from 'react';

import Section from '@/components/section/Section.component';
import Leads from './Leads.component';
import useLeads from '@/io/redux/lead/useLeads';

const LeadsSection: FC = () => {
  const { leads, getLeads } = useLeads();

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
