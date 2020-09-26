import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import { Title, Paragraph } from '@/components/typograph/typograph.component';
import theme from '@/theme';

describe('<Title />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Title theme={theme}>Some Title</Title>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the primary color as default', () => {
    const wrapper = shallow(<Title theme={theme} />);
    expect(wrapper).toHaveStyleRule('color', '#424242');
  });

  it('should have the primary color when is set', () => {
    const wrapper = shallow(<Title theme={theme} color="primary" />);
    expect(wrapper).toHaveStyleRule('color', '#424242');
  });

  it('should have the secondary color when is set', () => {
    const wrapper = shallow(<Title theme={theme} color="secondary" />);
    expect(wrapper).toHaveStyleRule('color', '#969696');
  });
});

describe('<Paragraph />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Paragraph theme={theme}>Some Text</Paragraph>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the primary color when is set', () => {
    const wrapper = shallow(<Paragraph theme={theme} color="primary" />);
    expect(wrapper).toHaveStyleRule('color', '#424242');
  });

  it('should have the secondary when is set', () => {
    const wrapper = shallow(<Paragraph theme={theme} color="secondary" />);
    expect(wrapper).toHaveStyleRule('color', '#969696');
  });
});
