import renderer from 'react-test-renderer';
import Tooltip from '../src/tools/Tooltip';
import React from 'react';

test('Link test with image hover', () => {
    const component = renderer.create(
        <Tooltip position="left" characters={15} content="ABCDEFGHIJKLMNOPQRSTUVWXYZ" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})