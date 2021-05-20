import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
// });

it('expect a rendered Button component', () => {
    expect(shallow(<App />)).toMatchSnapshot();
});
