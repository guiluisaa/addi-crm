import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import LeadFeedbackCell from '@/components/lead/LeadFeedbackCell.component';

const lead = {
  existsInRegisty: true,
  matchWithRegisty: true,
  hasJudicialRecord: true,
  score: 0,
};

describe('<LeadFeedbackCell />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<LeadFeedbackCell {...lead} />);
    expect(wrapper).toMatchSnapshot();
  });
});
