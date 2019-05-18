import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('incrementer component', () => {
  it('renderes an incrementer', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });

    
});
