import formatDate from '../src/functions/formatDate';

test('Format to date string value', () => {
    const result = formatDate('2012-04-21T18:25:43-05:00');
    expect(result).toEqual('21/04/2012');
})