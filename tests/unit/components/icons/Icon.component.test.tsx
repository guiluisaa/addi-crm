import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Icon, { IconWrapper } from '@/components/icons/Icon.component';
import theme from '@/theme';

describe('<Icon />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Icon theme={theme} icon="id-card" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the deafult color', () => {
    const wrapper = shallow(<Icon theme={theme} icon="id-card" />);
    expect(wrapper).toHaveStyleRule('color', 'rgba(0,0,0,0.24)');
  });

  it('should have the success color when is set', () => {
    const wrapper = shallow(
      <Icon theme={theme} icon="id-card" styleType="success" />
    );
    expect(wrapper).toHaveStyleRule('color', theme.color.success);
  });

  it('should have the warning color when is set', () => {
    const wrapper = shallow(
      <Icon theme={theme} icon="id-card" styleType="warning" />
    );
    expect(wrapper).toHaveStyleRule('color', theme.color.warning);
  });

  it('should have the danger color when is set', () => {
    const wrapper = shallow(
      <Icon theme={theme} icon="id-card" styleType="danger" />
    );
    expect(wrapper).toHaveStyleRule('color', theme.color.danger);
  });
});

describe('<Paragraph />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<IconWrapper />);
    expect(wrapper).toMatchSnapshot();
  });
});
