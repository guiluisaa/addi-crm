import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Lead from '@/components/lead/Lead.component';

jest.mock('@/io/redux/lead/useLead', () =>
  jest.fn(() => ({
    isLoading: false,
    isRefused: false,
    wasFeched: false,
    validateLead: jest.fn(),
  }))
);

const lead = {
  id: '1',
  firstName: 'Ashlyn',
  lastName: 'Reeve',
  nationalIdNumber: '70143939017',
  birthdate: '1990-07-03',
  email: 'ashlynreeve@gmail.com',

  existsInRegisty: null,
  matchWithRegisty: null,
  hasJudicialRecord: null,
  score: 0,
};

describe('<Lead />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Lead lead={lead} />);
    expect(wrapper).toMatchSnapshot();
  });
});
