import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import LeadsSection from '@/components/lead/LeadsSection.component';

jest.mock('@/io/redux/lead/useLeads', () =>
  jest.fn(() => ({
    leads: [],
    getLeads: jest.fn(),
  }))
);

describe('<LeadsSection />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<LeadsSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
