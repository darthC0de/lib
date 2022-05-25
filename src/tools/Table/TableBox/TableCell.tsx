import React from 'react';
import { TableCellProps } from './types';
import { CellContainer } from './styles';

function TableCell<T>({
  column,
  row,
  rowSpan,
}: React.PropsWithChildren<TableCellProps<T>>): JSX.Element {
  const rowColumnText: React.ReactText[] = [];
  let formatRowColumnText;
  let booleanClass: 'true' | 'false' | undefined;

  if (column.renderItem) {
    return (
      <CellContainer
        key={`${column.title}.${Math.random() + new Date().getTime()}`}
        style={{ ...column.cssProps }}
      >
        {column.renderItem(row)}
      </CellContainer>
    );
  }

  if (Array.isArray(column.props)) {
    for (let i = 0; i < column.props.length; i += 1) {
      const key = column.props[i];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rowColumnText.push((row as any)[key]);
    }
  } else {
    rowColumnText.push(row[column.props]);
  }

  function numberFixed(numero: number) {
    // @ts-ignore
    var numero = numero.toFixed(2).split('.');
    // @ts-ignore
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
    // @ts-ignore
    return numero.join(',');
  }

  switch (column.type) {
    case 'number': {
      formatRowColumnText = rowColumnText.reduce((text, item, index) => {
        if (index === 0) {
          return (Math.trunc((item as number) * 100) / 100).toLocaleString(
            'pt-BR',
          );
        }
        return `${text} ${(
          Math.trunc((item as number) * 100) / 100
        ).toLocaleString('pt-BR')}`;
      }, '');
      break;
    }
    case 'currency':
      formatRowColumnText = new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency',
      }).format(parseFloat(rowColumnText.join(' ').replace(',', '.')));
      break;
    case 'string':
      if (
        column.trunc &&
        rowColumnText.join(column.delimiter || ' ').length > column.trunc
      ) {
        formatRowColumnText = `${rowColumnText
          .join(column.delimiter || ' ')
          .slice(0, column.trunc)}...`;
      }
      break;
    case 'date':
      if (rowColumnText[0]) {
        formatRowColumnText = new Date(rowColumnText[0]).toLocaleDateString();
      } else {
        formatRowColumnText = '';
      }
      break;
    case 'datetime': {
      if (rowColumnText[0]) {
        formatRowColumnText = new Date(rowColumnText[0]).toLocaleString();
      } else {
        formatRowColumnText = '';
      }
      break;
    }
    case 'time':
      formatRowColumnText = new Date(rowColumnText[0]).toLocaleTimeString();
      break;
    case 'boolean':
      if (rowColumnText.join(' ') === 'true') {
        booleanClass = 'true';
      } else {
        booleanClass = 'false';
      }
      break;
    case 'float':
      if (rowColumnText[0]) {
        formatRowColumnText = numberFixed(Number(rowColumnText[0]));
      } else {
        formatRowColumnText = '';
      }
      break;
    default:
      break;
  }

  if (column.formatter) {
    formatRowColumnText = column.formatter(row);
  }

  return (
    <>
      {column.type === 'colspan' ? (
        <CellContainer
          key={`${column.title}.${Math.random() + new Date().getTime()}`}
          boolean={booleanClass}
          stylePattern={column.type}
          positionPattern={column.position}
          style={{ ...column.cssProps }}
          rowSpan={rowSpan}
        >
          <CellContainer
            key={`${column.title}.${Math.random() + new Date().getTime()}`}
            boolean={booleanClass}
            stylePattern={column.type}
            positionPattern={column.position}
            style={{ ...column.cssProps }}
            rowSpan={rowSpan}
          >
            <div
              style={{
                padding: '8px',
                margin: 'auto',
              }}
            >
              {booleanClass &&
                (booleanClass === 'true' ? <p>Ativo</p> : <p>Inativo</p>)}
              {!booleanClass && (
                <p style={{ ...column.cssText }}>
                  {formatRowColumnText ||
                    rowColumnText.join(column.delimiter || ' ')}
                </p>
              )}
            </div>
          </CellContainer>
          <CellContainer
            key={`${column.title}.${Math.random() + new Date().getTime()}`}
            boolean={booleanClass}
            stylePattern={column.type}
            positionPattern={column.position}
            style={{ ...column.cssProps }}
            rowSpan={rowSpan}
          >
            <div
              style={{
                padding: '8px',
                margin: 'auto',
              }}
            >
              {booleanClass &&
                (booleanClass === 'true' ? <p>Ativo</p> : <p>Inativo</p>)}
              {!booleanClass && (
                <p style={{ ...column.cssText }}>
                  {formatRowColumnText ||
                    rowColumnText.join(column.delimiter || ' ')}
                </p>
              )}
            </div>
          </CellContainer>
          <CellContainer
            key={`${column.title}.${Math.random() + new Date().getTime()}`}
            boolean={booleanClass}
            stylePattern={column.type}
            positionPattern={column.position}
            style={{ ...column.cssProps }}
            rowSpan={rowSpan}
          >
            <div
              style={{
                padding: '8px',
                margin: 'auto',
              }}
            >
              {booleanClass &&
                (booleanClass === 'true' ? <p>Ativo</p> : <p>Inativo</p>)}
              {!booleanClass && (
                <p style={{ ...column.cssText }}>
                  {formatRowColumnText ||
                    rowColumnText.join(column.delimiter || ' ')}
                </p>
              )}
            </div>
          </CellContainer>
        </CellContainer>
      ) : (
        <CellContainer
          key={`${column.title}.${Math.random() + new Date().getTime()}`}
          boolean={booleanClass}
          stylePattern={column.type}
          style={{ ...column.cssProps }}
        >
          <div
            style={{
              padding: '8px',
              margin: 'auto',
            }}
          >
            {booleanClass &&
              (booleanClass === 'true' ? <p>Sim</p> : <p>Não</p>)}
            {!booleanClass && (
              <p style={{ ...column.cssText }}>
                {formatRowColumnText ||
                  rowColumnText.join(column.delimiter || ' ')}
              </p>
            )}
          </div>
        </CellContainer>
      )}
    </>
  );
}

export default TableCell;
