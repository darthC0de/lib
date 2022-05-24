/**
 *  Função que retorna data formatada em pt-BR
 *  @param {string} value Recebe um valor ISO
 *  @example formatDate('2010-10-01T00:00:00Z')
 */

const formatDate = (value: string): string =>
  new Date(value)
    .toISOString()
    .split('T')[0]
    .split('-')
    .slice(0, 3)
    .reverse()
    .join('/');
export default formatDate;
