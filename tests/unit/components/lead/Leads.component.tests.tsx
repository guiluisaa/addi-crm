import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Leads from '@/components/lead/Leads.component';
import { leads as leadsDto } from '@/mock/data/leads.mock';
import { LeadModel } from '@/models/Lead.model';

const leads: LeadModel[] = leadsDto.map((leadDto, index) => ({
  id: `${index}`,
  ...leadDto,
}));

describe('<Leads />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Leads leads={leads} />);
    expect(wrapper).toMatchSnapshot();
  });
});
