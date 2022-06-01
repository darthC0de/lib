import { shallow } from 'enzyme';
import { Table } from "../../src/index";
import React from "react";

interface iUser {
  name: string;
  age?: number;
}
const users = [
  {
    name: "rod",
    age: 23,
  },
  {
    name: "Master gabz",
    age: 19,
  },

  {
    name: "yas",
    age: 25,
  },
];
console.log("users", users);
console.log("\nusers desestruturado", [...users.map((user) => ({ ...user }))]);

it("should create table", () => {
  const component = shallow(
    <Table<iUser>
      columns={[
        {
          title: "Nome",
          type: "string",
          props: ["name"],
        },
        {
          title: "Idade",
          type: "number",
          props: ["age"],
        },
      ]}
      rows={users}
    />
  );
  expect(component).toMatchSnapshot();
});

// it("should create table with column age appearing when notEmpty set", () => {
//   const component = renderer.create(
//     <Table<iUser>
//       columns={[
//         {
//           title: "Nome",
//           type: "string",
//           props: ["name"],
//         },
//         {
//           title: "Idade",
//           type: "number",
//           props: ["age"],
//           display: "notEmpty",
//         },
//       ]}
//       rows={users.map((user) => ({ ...user }))}
//     />
//   );
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
// it("should create table with column age not appearing when notEmpty set", () => {
//   const usersTest = [
//     {
//       name: "rod",
//       age: 23,
//     },
//     {
//       name: "Master gabz",
//       age: 19,
//     },

//     {
//       name: "yas",
//     },
//   ];

//   const component = renderer.create(
//     <Table<iUser>
//       columns={[
//         {
//           title: "Nome",
//           type: "string",
//           props: ["name"],
//         },
//         {
//           title: "Idade",
//           type: "number",
//           props: ["age"],
//           display: "notEmpty",
//         },
//       ]}
//       rows={[...usersTest.map((user) => ({ ...user }))]}
//     />
//   );
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
