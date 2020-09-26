import React from 'react';
import { shallow } from 'enzyme';

import Redirect404View from '@/views/404/Redirect404.view';

describe('<Redirect404 />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Redirect404View />);
    expect(wrapper).toMatchSnapshot();
  });
});
