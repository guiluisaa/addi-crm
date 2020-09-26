import React from 'react';
import { shallow } from 'enzyme';

import AddiLogo from '@/components/logo/AddiLogo.component';

describe('<AddiLogo />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<AddiLogo />);
    expect(wrapper).toMatchSnapshot();
  });
});
