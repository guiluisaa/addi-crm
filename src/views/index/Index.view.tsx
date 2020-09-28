import React, { FC } from 'react';

import LeadsSection from '@/components/lead/LeadsSection.component';
import ProspectorsSection from '@/components/prospector/ProspectorsSection.component';

const IndexView: FC = () => (
  <>
    <LeadsSection />

    <ProspectorsSection />
  </>
);

export default IndexView;
