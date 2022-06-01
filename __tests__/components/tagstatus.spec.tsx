import { shallow } from 'enzyme';
import TagStatus from '../../src/tools/TagStatus';
import React from 'react';

test('Tag status *ativo*', () => {
  const component = shallow(<TagStatus status="ativo" />);

  expect(component).toMatchSnapshot();
});

test('Tag status *inativo*', () => {
  const component = shallow(<TagStatus status="inativo" />);

  expect(component).toMatchSnapshot();
});

test('Tag status *Aguardando*', () => {
  const component = shallow(<TagStatus status="Aguardando" />);

  expect(component).toMatchSnapshot();
});

test('Tag status *Divergente*', () => {
  const component = shallow(<TagStatus status="Divergente" />);

  expect(component).toMatchSnapshot();
});

test('Tag status *Em andamento*', () => {
  const component = shallow(
    <TagStatus status="Em andamento" color="#0f0" background="#000" />,
  );

  expect(component).toMatchSnapshot();
});

test('Tag status *Pendente*', () => {
  const component = shallow(<TagStatus status="Pendente" />);

  expect(component).toMatchSnapshot();
});

test('Tag status *Ok*', () => {
  const component = shallow(<TagStatus status="Ok" />);

  expect(component).toMatchSnapshot();
});
