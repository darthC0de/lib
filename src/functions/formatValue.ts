/**
 * Formata números em R$.
 *
 * @param {number} value Valor em Number
 * @return R$ X.XXX
 * @example formatToCurrency(1234) => 'R$ 1.234,00'
 *
 */

export const formatToCurrency = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

/**
 * Formata os números de acordo com o padrão brasileiro
 * @param {number} value Valor a ser formatado
 * @returns {number}
 * @example formatToCurrency(1234) => '1.234'
 */
export const formatToNumber = (value: number): string => {
  return value.toLocaleString('pt-BR');
};

/**
 * Formata um array de  dados para o padrão necessário para  o select
 * @param array Array de dados
 * @param code chave para o valor code
 * @param description chave para o valor description
 * @param label *Opcional* chave para o valor label
 * @param value *Opcional* chave para o valor value
 * @returns
 */
export function transformToSelect<T = any>(
  array: Array<T>,
  code: string | number,
  description: string | number,
  label?: string | number,
  value?: string | number,
) {
  return array.map((item: T) => ({
    // @ts-ignore
    code: item[code],
    // @ts-ignore
    description: item[description],
    // @ts-ignore
    label: label ? item[label] : item[description],
    // @ts-ignore
    value: value ? item[value] : item[code],
  }));
}
