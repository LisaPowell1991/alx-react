/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('renders an image and an h1', () => {
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});