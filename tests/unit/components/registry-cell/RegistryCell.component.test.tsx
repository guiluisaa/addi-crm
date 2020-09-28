import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import RegistreyCell from '@/components/registry-cell/RegistryCell.component';
import Icon from '@/components/icons/Icon.component';

describe('<RegistreyCell />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(
      <RegistreyCell existsInRegisty={true} matchWithRegisty={true} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the id icon', () => {
    const wrapper = shallow(
      <RegistreyCell existsInRegisty={true} matchWithRegisty={true} />
    );
    expect(wrapper.find(Icon)).toHaveLength(1);
  });
});
