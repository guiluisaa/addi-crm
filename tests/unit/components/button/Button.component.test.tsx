import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Button from '@/components/button/Button.component';
import theme from '@/theme';

describe('<Button />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Button theme={theme}>Some Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have text uppercase', () => {
    const wrapper = shallow(<Button theme={theme} uppercase />);
    expect(wrapper).toHaveStyleRule('text-transform', 'uppercase');
  });
});
