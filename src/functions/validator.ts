/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 *  Cria máscaras de CPF.
 *
 *  @param value 'xxxxxxxxxxx' dígitos do CPF
 *  @return {string} 'xxx.xxx.xxx-xx'
 *  @example cpfMask(12345678912) => '123.456.789-12'
 *
 */

export const cpfMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

/**
 *  Cria máscaras de RG.
 *
 *  @param value '123456789' dígitos do RG
 *
 *  Pode acrescenter o X no dígito final
 *
 *  @return {string} 'xx.xxx.xxx-X'
 *  @example rgMask(123456789) => '12.345.678-9'
 *
 */

export const rgMask = (value: string | number): string => {
  return String(value)
    .replace(/\DX-x/g, '')
    .replace(/^(\d{2})(\d{3})(\d{3})([\dX-x])$/, '$1.$2.$3-$4');
};

/**
 *  Cria máscaras de CEP
 * @param value 8 digitos do CEP
 * @return {string} 'xxxxx-xxx'
 *
 * @example cepMask(00000000) -> 00000-000
 */
export const cepMask = (value: string | number): string => {
  return String(value).replace(/(\d{5})(\d{3})/, '$1-$2');
};

/**
 *  Cria máscaras de placas brasilerias.
 *
 *  @param value 'xxxxxxx' dígitos da Placa
 *  @return {string} 'XXX-XXXX' Placa antiga
 *  @return {string} 'XXXXXXX' Placa mercosul
 *  @example Placa antiga -> placaMask('aaa0000') => 'AAA-0000'
 *  @example Placa mercosul -> placaMask('aaa0a00') => 'AAA0A00'
 *
 */

export const placaMask = (value: string): string => {
  const mercosul = /([A-Za-z]{3}[0-9]{1}[A-Za-z]{1})/;
  const normal = /([A-Za-z]{3}[0-9]{2})/;
  const replaced = value.replace(/[^\w]/g, '');
  if (normal.exec(replaced)) {
    value = value.replace(/^([A-Za-z]{3})([0-9]{4})$/, '$1-$2');
  } else if (mercosul.exec(replaced)) {
    value = value.replace(
      /^([A-Za-z]{3})([0-9]{1})([A-Za-z]{1})([0-9]{2})$/,
      '$1$2$3$4',
    );
  }
  return value;
};

/**
 *  Máscara para CNPJ
 * @param value 'xxxxxxxxxxxxxx' dígitos do CPNJ
 * @returns 'xx.xxx.xxx/xxxx-xx'
 * @example cnpjMask(12345678000123) => '12.345.678/0001-23'
 */
export const cnpjMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
};

/**
 * Valida se o input está recebendo apenas números
 * @param evt Evento de alteração do input
 * @example <Input onChange={(e)=>ValidateOnlyNumbers(e)} />
 */
export const ValidateOnlyNumbers = (evt: any): void => {
  const theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  const regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
};

/**
 * Remove os acentos de uma string
 * @param {string} s String a ser renderizada
 * @returns {string} valor sem acentos
 *
 * @example removeAccents('líção') -> licao
 */
export function removeAccents(s: string): string {
  let r: string = s;
  const non_asciis = {
    A: '[ÀÁÂÃÄÅ]',
    AE: 'Æ',
    C: 'Ç',
    E: '[ÈÉÊË]',
    I: '[ÌÍÎÏ]',
    N: 'Ñ',
    O: '[ÒÓÔÕÖ]',
    OE: 'Œ',
    U: '[ÙÚÛŰÜ]',
    Y: '[ÝŸ]',
    a: '[àáâãäå]',
    ae: 'æ',
    c: 'ç',
    e: '[èéêë]',
    i: '[ìíîï]',
    n: 'ñ',
    o: '[òóôõö]',
    oe: 'œ',
    u: '[ùúûűü]',
    y: '[ýÿ]',
  };
  for (const i in non_asciis) {
    // @ts-ignore
    r = String(r).replace(new RegExp(non_asciis[i], 'g'), i);
  }
  return r;
}

/**
 * Verifica se o valor passado se encaixa no formato ISO de data, formatando-o para dd/mm/aa-hh:MM.
 * Caso o valor seja apenas data (*aaaa/mm/dd*) retorna a data formatada para o padrão brasileiro de data.
 * Caso o valor não caia em nenhum dos testes anteriores, o mesmo é retornado.
 * @param value Valor a ser verificado
 * @returns {string} valor formatado.
 */
export const isDateValue = (value: string): string => {
  const isoDateRegex = /\d{4}-\d{2}-\d{2}[T]\d{2}:\d{2}:\d{2}/g;
  const universalDateRegex = /\d{4}-\d{2}-\d{2}/g;
  const universalDateRegex2 = /\d{4}-\d{2}-\d{1}/g;

  if (isoDateRegex.test(value)) {
    const d1 = value.split('T')[0].split('-');
    d1[0] = d1[0].slice(2, 4);
    const date = d1.reverse().join('/');
    const time = value.split('T')[1].split(':').slice(0, 2).join(':');
    return `${date}-${time}`;
  }

  if (universalDateRegex.test(value)) {
    return value.split('-').slice(0, 3).reverse().join('/');
  }

  if (universalDateRegex2.test(value)) {
    return value.split('-').slice(0, 3).reverse().join('/');
  }

  return value;
};

/**
 *  Receives a value and a mask as formatting model.
 * @param {string | number} value the value to be replaced
 * @param {string} mask the model to be used
 * @returns the formatted value
 *
 * @example formatter(00000000,'#####-###')-> 00000-000
 * @example formatter(000000000,'##.###.###-#')->00.000.000-0
 * @example formatter('Lorem Ipsum','#.###.###.#')->L.ore.m I.psum
 */
export const formatter = (value: string | number, mask: string) => {
  let i = 0;
  /** Value returned */
  let response = '';
  const saida = mask.substring(1, 0);
  while (i < String(value).length) {
    const texto = mask.substring(i);
    if (texto.substring(0, 1) !== saida) {
      response += texto.substring(0, 1);
    }
    // eslint-disable-next-line no-plusplus
    i++;
  }
  return response;
};
