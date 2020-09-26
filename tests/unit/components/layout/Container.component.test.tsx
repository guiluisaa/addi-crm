import React from 'react';
import { shallow } from 'enzyme';

import Container from '@/components/layout/Container.component';
import theme from '@/theme';

describe('<Container />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Container theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
