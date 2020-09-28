import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ScoreCell from '@/components/score-cell/ScoreCell.component';

describe('<ScoreCell />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<ScoreCell score={60} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the score number', () => {
    const wrapper = shallow(<ScoreCell score={60} />);
    expect(wrapper.text()).toContain('60');
  });
});
