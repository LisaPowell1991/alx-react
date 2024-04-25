import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
    const wrapper = shallow(<App />);

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });
});