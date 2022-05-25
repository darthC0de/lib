import React, { CSSProperties, ReactElement } from 'react';
import { GroupedOptionsType, OptionsType, OptionTypeBase } from 'react-select';

export type PropType = number | string;

export interface IColumn<T> {
  /**
   * @property *title* = Título da coluna.
   * @example title: 'Coluna 1'.
   */
  title: string;
  /**
   * @property *delimiter* = Limita o espaçamento da coluna.
   * @example delimiter: 12.
   */
  delimiter?: string;
  /**
   * @property *cssProps* = Estilização CSS dentro da célula da coluna.
   * @example cssProps: {
   *  justifyContent: 'center',
   * }.
   */
  cssProps?: CSSProperties;
  /**
   * @property *cssText* = Estilização CSS dentro do texto da célula da coluna.
   * @example cssText: {
   *    color: '#ff0000',
   * }.
   */
  cssText?: CSSProperties;
  /**
   * @property *cssRow* = Estilização CSS da célula da coluna.
   * @example cssRow: {
   *  padding: '12px 0px',
   * }.
   */
  cssRow?: CSSProperties;
  /**
   * @property *cssTitle* = Estilização CSS dentro do título da coluna.
   * @example cssTitle: {
   *  justifyContent: 'center',
   * }.
   */
  cssTitle?: CSSProperties;
  /**
   * @property *display* = Esconde a colluna utilizando *true* ou *false*, pode ser utilizado com um estado.
   * @description Ao usar a opção *notEmpty*, a tabela vai analisar se toda essa coluna está com dados vazios, caso sim, ela desaparece, caso não, nada acontece.
   * @example display: true
   */
  display?: true | false | 'notEmpty';
  /**
   * @property *formatter* = Formata o dado da tabela e retorna essa formatação.
   * @example formatter: row => new Date(row.dataDeHoje).toLocaleString().
   */
  formatter?: (row: IRow<T>) => string;
  /**
   * @property *orderable* = Torna a coluna ordenada, podendo ordenar por maior, menor, A-z, Z-a.
   * @example orderable: True.
   */
  orderable?: boolean;
  /**
   * @property *id* = O id da coluna.
   * @example id: 'descricao'.
   */
  id?: PropType;
  /**
   * @property *colspan* = Adiciona e ativa o colspan entre as colunas, funciona apenas no type: ['colspan'].
   * @example colspan: 2.
   */
  colsSpan?: number;
  /**
   * @property *props* = Propriedade de interface.
   * @example props: ['descricao'].
   */
  props: PropType[];
  /**
   * @property *className* = Classe de Estilização para a coluna.
   * @example className: 'first-column'.
   */
  className?: React.HTMLAttributes<HTMLDivElement> | undefined;
  /**
   * @property *filterRef* = Referêcia para a coluna.
   * @example filterRef: refObject.
   */
  filterRef?: React.MutableRefObject<HTMLInputElement | undefined>;
  /**
   * @property *type* = Tipo de dado da coluna.
   * @example type: 'number' => 1234 | 1.234
   */
  type?:
    | 'currency'
    | 'number'
    | 'date'
    | 'string'
    | 'boolean'
    | 'datetime'
    | 'colspan'
    | 'time'
    | 'float';
  /**
   * @property *trunc* = Quantidade de caracteres limites para quebrar a linhas do dado.
   * @example trunc: 9 => I am John
   * Doe
   */
  trunc?: number;
  /**
   * @property *renderItem* = Habilita a função para criar qualquer elemento dentro da coluna.
   * @example renderItem: row => <ProgressBar value={row.progresso}>.
   */
  renderItem?: (row: IRow<T>) => string | ReactElement;
  /**
   * @property *position* = Define a posição e a ordem de todos os dados da coluna.
   * @example position: 'right'
   */
  position?: 'left' | 'center' | 'right';
  sticky?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IRow<T = any> = T;

export type ISelectBoxActions<T> = {
  onClick: (
    row: IRow<T>[],
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void | undefined;
  renderItem: () => string | ReactElement;
};
export type IRowAction<T> = {
  onClick: (
    row: IRow<T>,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void | undefined;
  renderItem: (row?: IRow<T>) => string | ReactElement;
};

export type IActionRows<T> = {
  onClick: (
    row: IRow<T>[],
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void | undefined;
  renderItem: () => string | ReactElement;
};
export interface ITableProps<T> {
  /**
   * @property *columns* = Recebe um array de colunas
   * @example columns={[
   * { title: '', cssProps:{}
   * ...
   */
  columns: Array<IColumn<T>>;

  /**
   * @property *rowActions* = Rece um array com as propriedades para a criação de colunas com ações que alterem os dados da tabela
   * @example rowActions={[
   * { onClick: ()=>{}, renderItem: <Button></Button>...
   */
  rowActions?: Array<IRowAction<T>>;

  /**
   * @property *rows* Array de informações que preencherão a tabela
   */
  rows: Array<IRow<T>>;

  /**
   * @property *selectBoxActions* = Possibilita a criação de botões para interação com as linhas selecionadas.
   *
   *  *Depende da propriedade `selectBox` como true*
   *
   * @example selectBoxActions={[
   * { onClick: ()=>{}, renderItem: <Button></Button>...
   *
   */
  selectBoxActions?: Array<ISelectBoxActions<T>>;

  /**
   * @property *getRows* = Possibilita a criação de botões para interação com os dados da tabela, bem como a recuperação de todos os dados.
   * @example getRows={[
   * { onClick: ()=>{}, renderItem: <Button></Button>...
   *
   */
  getRows?: Array<IActionRows<T>>;

  /**
   * @property *loading* = Executa o skeleton loading da tabela, permitindo a animação da tabela
   * @example loading={true | false}
   */
  loading?: boolean;
  /**
   * @property *exportList* = Habilita a exportação dos dados da tabela.
   *
   * *Por default, vem habilitada a funcionalidade de exportação para excel*
   * @example exportList={true}
   */
  exportList?: boolean;
  exportOptions?(): React.ReactNode;
  defaultSort?: string;
  selectAllRows?: 'perPage' | 'inTable';
  selectBox?: boolean;
  hidePagination?: boolean;
  background_active?: string;
  buttons?(): void;
  beforeExport?(): void;
  paginationOptions?:
    | GroupedOptionsType<OptionTypeBase>
    | OptionsType<OptionTypeBase>
    | undefined;
  defaultPage?: number;
  defaultNumberOfRows?: number;
  onDeleteRow?: (
    row: IRow<T>,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onEditRow?: (
    row: IRow<T>,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

export interface TableCellProps<T> {
  column: IColumn<T>;
  row: IRow<T>;
  rowSpan?: number;
}
