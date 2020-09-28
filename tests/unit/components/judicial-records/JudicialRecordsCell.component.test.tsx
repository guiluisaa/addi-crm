import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Icon from '@/components/icons/Icon.component';
import JudicialRecordsCell from '@/components/judicial-records/JudicialRecordsCell.component';

describe('<JudicialRecordsCell />', () => {
  it('should match snapchat', () => {
    const wrapper = shallow(<JudicialRecordsCell hasJudicialRecord={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the gavel icon', () => {
    const wrapper = shallow(<JudicialRecordsCell hasJudicialRecord={true} />);
    expect(wrapper.find(Icon)).toHaveLength(1);
  });
});
