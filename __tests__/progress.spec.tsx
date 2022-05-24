import renderer from 'react-test-renderer';
import ProgressBar from '../src/tools/ProgressBar';
import React from 'react';

test('Linear progress bar', () => {
    const component = renderer.create(
        <ProgressBar value={100} type="linear" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Half progress bar', () => {
    const component = renderer.create(
        <ProgressBar value={100} type="half" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Only number', () => {
    const component = renderer.create(
        <ProgressBar value={100} type="number" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Rounded progress bar', () => {
    const component = renderer.create(
        <ProgressBar value={100} type="rounded" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Only value', () => {
    const component = renderer.create(
        <ProgressBar value={100} type="value" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})