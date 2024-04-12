import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
    it('renders a BodySection component and passes the correct props to it', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title">
                <p>test children node</p>
            </BodySectionWithMarginBottom>
        );

        const bodySection = wrapper.find(BodySection);
        expect(bodySection).toHaveLength(1);
        expect(bodySection.prop('title')).toEqual('test title');
        expect(bodySection.contains(<p>test children node</p>)).toEqual(true);
    });
});