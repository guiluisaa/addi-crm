import React from 'react';
import { shallow } from 'enzyme';

import IndexView from '@/views/index/Index.view';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('<IndexView />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<IndexView />);
    expect(wrapper).toMatchSnapshot();
  });
});
