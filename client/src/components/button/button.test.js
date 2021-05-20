import { shallow } from 'enzyme';
import React from 'react';
import Button from './button';

it('expect a rendered Button component', () => {
    expect(shallow(<Button />)).toMatchSnapshot();
});
