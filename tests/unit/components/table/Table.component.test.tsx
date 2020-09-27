import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Table from '@/components/table/Table.component';
import theme from '@/theme';

describe('<Table />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<Table theme={theme}>Some Table</Table>);
    expect(wrapper).toMatchSnapshot();
  });
});
