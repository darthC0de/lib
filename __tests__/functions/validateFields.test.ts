import { validateFields, iFieldValidation } from "../../src/functions";

describe('ValidateFields function',()=>{

  it("Should validate string field", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "name",
        type: "string",
      },
    ];
    const data = {
      name: "Rodrigo",
      age: 23,
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(false);
  });

  it("Should validate number field", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "age",
        type: "number",
      },
    ];
    const data = {
      name: "Rodrigo",
      age: 23,
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(false);
  });

  it("Should validate required field", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "name",
        type: "string",
      },
    ];
    const data = {
      age: 23,
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(true);
  });

  it("Should ignore non required field", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "name",
        type: "string",
        required: false,
      },
    ];
    const data = {
      age: 23,
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(false);
  });

  it("Should validate array", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "name",
        type: "array",
      },
    ];
    const data = {
      name: ["Rodrigo",'cordeiro'],
      age: [23,24],
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(false);
  });

  it("Should validate string array", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "name",
        type: "array",
        arrayItems: 'string'
      },
    ];
    const data = {
      name: ["Rodrigo",'cordeiro'],
      age: [23,24],
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(false);
  });

  it("Should reject number when array type is string", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "name",
        type: "array",
        arrayItems: 'number'
      },
    ];
    const data = {
      name: ["Rodrigo",'cordeiro'],
      age: [23,24],
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(true);
  });

  it("Should validate number array", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "age",
        type: "array",
        arrayItems: 'number'
      },
    ];
    const data = {
      name: ["Rodrigo",'cordeiro'],
      age: [23,24],
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(false);
  });

  it("Should reject string  when array type is number", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "age",
        type: "array",
        arrayItems: 'string'
      },
    ];
    const data = {
      name: ["Rodrigo",'cordeiro'],
      age: [23,24],
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(true);
  });

  it("Should validate using validator function", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "age",
        validator: (data)=>{
          if(!isNaN(data)) return {result:true}
          return {result:false}
        },

      },
    ];
    const data = {
      name: ["Rodrigo",'cordeiro'],
      age: 24,
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(false);
  });

  it("Should reject using validator function", () => {
    const data = {
        "codigoFilial": "1049"
      }
    const fields: iFieldValidation<any>[] = [
      {
        name: 'codigoFilial',
        required: true,
        type: 'array',
        validator: data => {
          return {
            result: data === 0,
            message:
              'A filial deve ser passada em lista de objetos, seguindo o padrão {codigoFilial:0}',
          };
        },
      },
    ];
    
    const validation = validateFields(fields, data);
    
    expect(validation.hasMissing).toBe(true);
  });

  it("Should validate array using validator function", () => {
    const data = {"filial": [
      {
        "codigoFilial": "1049"
      },
      {
        "codigoFilial": "1047"
      }
    ]}
    const fields: iFieldValidation<any>[] = [
      {
        name: 'filial',
        required: true,
        type: 'array',
        validator: data => {
          console.log(data);
          if (data.codigoFilial) return { result: true };
          return {
            result: false,
            message:
              'A filial deve ser passada em lista de objetos, seguindo o padrão {codigoFilial:0}',
          };
        },
      },
    ];
    
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(false);
  });

  it("Should reject array using validator function", () => {
    const data = {"filial": [
      {
        "codigoFilial": "1049"
      },
      {
        "codigo": "1047"
      }
    ]}
    const fields: iFieldValidation<any>[] = [
      {
        name: 'filial',
        required: true,
        type: 'array',
        validator: data => {
         
          if (data.codigoFilial) return { result: true };
          return {
            result: false,
            message:
              'A filial deve ser passada em lista de objetos, seguindo o padrão {codigoFilial:0}',
          };
        },
      },
    ];
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(true);
  });

  it("Should reject empty value", () => {
    const fields: iFieldValidation<any>[] = [
      {
        name: "name",
        type: "array",
        arrayItems: 'string'
      },
    ];
    const data = {
      name: [],
      age: [23,24],
    };
    const validation = validateFields(fields, data);
    expect(validation.hasMissing).toBe(true);
  });

})