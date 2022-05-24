import { formatToNumber } from '../src/functions/formatValue';

test('Format to thousands value', () => {
    const result = formatToNumber(123456789);
    expect(result).toEqual('123.456.789');
})