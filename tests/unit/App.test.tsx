import React from 'react';
import { shallow } from 'enzyme';

import App from '@/App';

describe('<App />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
