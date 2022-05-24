import renderer from "react-test-renderer";
import TagStatus from "../src/tools/TagStatus";
import React from "react";
import TransferList from '../src/tools/TransferList';

test("Tag status *ativo*", () => {
  const component = renderer.create(<TagStatus status="ativo" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Tag status *inativo*", () => {
  const component = renderer.create(<TagStatus status="inativo" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Tag status *Aguardando*", () => {
  const component = renderer.create(<TagStatus status="Aguardando" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Tag status *Divergente*", () => {
  const component = renderer.create(<TagStatus status="Divergente" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Tag status *Em andamento*", () => {
  const component = renderer.create(
    <TagStatus status="Em andamento" color="#0f0" background="#000" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Tag status *Pendente*", () => {
  const component = renderer.create(<TagStatus status="Pendente" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Tag status *Ok*", () => {
  const component = renderer.create(<TagStatus status="Ok" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
