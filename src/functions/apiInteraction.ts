export interface iFieldError {
  campo: string;
  mensagem: string;
}

export interface IFieldValidationResponse {
  hasMissing: boolean;
  errors?: iFieldError[];
}
export interface iFieldValidation<T> {
  /** Field name for validation */
  name: string;
  /** Field for type validation.
   *
   * Allowed types are `string` | `number` | `array` */
  type?: 'string' | 'number' | 'array';
  /** `Only for type = array`.
   *
   * Allows validation for array items type.
   *
   * Allowed types are `string` | `number` */
  arrayItems?: 'string' | 'number';
  /** Allows to implement custom validators.
   *
   * Receives field data and must return an object containing result and message. */
  validator?: (field: T) => { result: boolean; message?: string };
  /** Validates if field is required or not */
  required?: boolean;
}

interface iObject extends Object {
  [key: string]: any;
}

/**
 * Validate if the data object has the required fields
 * @param {string} fields
 * @param {any} data
 */
export function validateFields<T>(
  fields: iFieldValidation<T>[],
  data: any,
): { hasMissing: boolean; errors?: iFieldError[] } {
  const errors: iFieldError[] = [];
  fields.forEach((field: iFieldValidation<T>) => {
    const required = field.required === false ? field.required : true;

    if (!data[field.name] && required === true) {
      console.error(`O campo ${field.name} não pode ser nulo`);
      errors.push({
        campo: field.name,
        mensagem: `O campo ${field.name} não pode ser nulo`,
      });
      return;
    }
    if (data[field.name] && field.validator && field.type !== 'array') {
      const validation = field.validator(data[field.name]);
      if (validation.result && validation.result === true) return;
      if (validation.message) {
        console.error(validation.message);
        errors.push({
          campo: field.name,
          mensagem: validation.message
            ? validation.message
            : `Failure on ${field.name}`,
        });
      }
      return;
    }
    const is_field_number =
      data[field.name] && field.type === 'number' && isNaN(data[field.name]);
    if (is_field_number) {
      console.error(`O campo ${field.name} deve ser do tipo Number`);
      errors.push({
        campo: field.name,
        mensagem: `O campo ${field.name} deve ser do tipo Number`,
      });
      return;
    }
    const is_field_string =
      data[field.name] &&
      field.type === 'string' &&
      typeof data[field.name] !== 'string' &&
      data[field.name] !== '';

    if (is_field_string) {
      console.error(`O campo ${field.name} deve ser do tipo string`);
      errors.push({
        campo: field.name,
        mensagem: `O campo ${field.name} deve ser do tipo string`,
      });
      return;
    }

    const is_array = data[field.name] && field.type === 'array';
    if (is_array) {
      if (data[field.name] && data[field.name].length === 0) {
        console.error(`O campo ${field.name} não deve ser vazio`);
        errors.push({
          campo: field.name,
          mensagem: `O campo ${field.name} não deve ser vazio`,
        });
        return;
      }
      if (!Array.isArray(data[field.name])) {
        console.error(`O campo ${field.name} deve ser um array`);
        errors.push({
          campo: field.name,
          mensagem: `O campo ${field.name} deve ser um array`,
        });
        return;
      }

      if (data[field.name] && field.validator) {
        const validation = data[field.name].reduce(
          (current: boolean, data: T) => {
            // @ts-ignore
            return field.validator(data)?.result === false || current === false
              ? // @ts-ignore
                field.validator(data)
              : current;
          },
          { result: true },
        );
        if (validation.result && validation.result === true) return;
        if (validation.message) {
          console.error(validation.message);
          errors.push({
            campo: field.name,
            mensagem: validation.message
              ? validation.message
              : `Failure on ${field.name}`,
          });
        }
        return;
      }
      if (field.arrayItems && field.arrayItems === 'number') {
        const is_valid = data[field.name].filter((item: any) => isNaN(item));
        if (is_valid.length > 0) {
          console.error(
            `O campo ${field.name} deve ser um array do tipo Number`,
          );
          errors.push({
            campo: field.name,
            mensagem: `O campo ${field.name} deve ser um array do tipo Number`,
          });
        }
        return;
      }

      if (field.arrayItems && field.arrayItems === 'string') {
        const is_valid = data[field.name].filter(
          (item: any) => typeof item !== 'string' || item === '',
        );
        if (is_valid.length > 0) {
          console.error(
            `O campo ${field.name} deve ser um array do tipo String`,
          );
          errors.push({
            campo: field.name,
            mensagem: `O campo ${field.name} deve ser um array do tipo String`,
          });
        }
      }
    }
  });
  return { hasMissing: errors.length > 0, errors };
}

// /**
//  * Transforms object keys to lowercase
//  * @param {Array} data *-> Array of objects to pass or object to be passed*
//  * */
// export function minimizer(data: Array<iObject> | iObject): Array<any> | any {
//   if (Array.isArray(data)) {
//     return data.map(item =>
//       Object.fromEntries(
//         Object.entries(item).map(pair => [
//           pair[0].toLowerCase(),
//           pair[1] === -1 ? '-' : pair[1],
//         ])
//       )
//     );
//   }
//   return Object.fromEntries(
//     Object.entries(data).map(pair => [
//       pair[0].toLowerCase(),
//       pair[1] === -1 ? '-' : pair[1],
//     ])
//   );
// }
