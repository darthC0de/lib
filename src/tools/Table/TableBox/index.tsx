/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState, useEffect } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { BiLoaderAlt } from "react-icons/bi";
import GetAppIcon from "@material-ui/icons/GetApp";
import { ButtonBase, Grow, IconButton, Popper } from "@material-ui/core";
import {
  Container,
  ActionsContainer,
  LoadingContainer,
  SortButton,
  List,
} from "./styles";

import TableFilterCell from "../../../assets/svg/Filter.svg";
import TableArrow from "../../../assets/svg/Arrow_bottom.svg";
import exportData from "./excel";
import TableDeleteItem from "../../../assets/svg/table-delete-item.svg";
import TableEditItem from "../../../assets/svg/table-edit-item.svg";
import {
  IColumn,
  ITableProps,
  IRow,
  IRowAction,
  ISelectBoxActions,
} from "./types";
import TableSelectBox from "./SelectBox";
import TableCell from "./TableCell";
import AllTableSelectBox from "./AllSelectBox";
import PaginationComponent from "../PaginationComponentTest";

/**
 * Componente para renderização dinâmica de tabelas.
 *
 * @param {IColumn} Columns Array de colunas a serem exibidas
 * @param {IRowAction} rowActions Cria uma coluna de ações permitindo interagir com a tabela
 * @param {array} getRows Retorna os dados da tabela
 * @param {boolean} selectBox Habilita o checkbox para seleção de linhas da tabela
 * @param {string} selectAllRows Permite selecionar as linhas apenas exibidas na página da tabela ou todas as linhas da tabela
 * @param {ISelectBoxActions} selectBoxActions *A propriedade selectBox deve estar definida* Ações a serem executadas com as linhas selecionadas
 * @param {IRowAction} onEditRow `Deprecated` Ações a serem executadas com as linhas selecionadas
 * @param {boolean} exportList Ativa a funcionalidade de exportação da tabela. *Default: Excel*.
 * @param exportOptions Permite a inclusão de mais possibilidades de exportação.
 * @param paginationOptions Permite customizar as opções de paginação.
 * @param onDeleteRow `Deprecated` Ações a serem executadas ao deletar as linhas selecionadas
 * @param defaultSort Recebe o nome da coluna que será utilizada como padrão para ordenação da tabela
 * @param defaultNumberOfRows Número de linhas a ser exibido ao carregar a tabela.
 * @param hidePagination Desabilita a funcionabilidade de paginação
 * @param {array} rows Array de informações que preencherão a tabela
 * @param {boolean} loading Se a tabela está em estado de carregamento
 * @param {number} defaultPage página default para exibição da tabela.
 *
 */
function Table<T>({
  columns,
  rowActions,
  getRows,
  selectBoxActions,
  onEditRow,
  exportList = false,
  exportOptions,
  paginationOptions,
  onDeleteRow,
  defaultSort,
  background_active,
  defaultNumberOfRows,
  hidePagination = false,
  rows,
  selectBox = false,
  selectAllRows,
  loading,
  buttons,
  beforeExport,
  defaultPage = 0,
}: React.PropsWithChildren<ITableProps<T>>): JSX.Element {
  const [page, setPage] = useState<number>(defaultPage);
  const [sortBy, setSortBy] = useState<string | undefined>(defaultSort);
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [isAllSelected, setIsAllSelected] = React.useState(Boolean);
  const [allSelected, setAllSelected] = React.useState(Boolean);
  const [rowsPerPage, setRowsPerPage] = useState(
    defaultNumberOfRows ||
      (!!paginationOptions && paginationOptions?.length
        ? paginationOptions[0].label
        : 5)
  );
  const [selectedRows, setSelectedRows] = useState<IRow<T>[]>([] as IRow<T>[]);

  const updateRows = useCallback(() => {
    // setIsAllSelected(
    //   selectedRows.length ===
    //     rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length
    // );
    if (selectAllRows === "inTable") {
      setIsAllSelected(selectedRows.length === rows.length);
    } else {
      setIsAllSelected(
        selectedRows.length ===
          rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .length
      );
    }
  }, [page, rows, rowsPerPage, selectAllRows, selectedRows.length]);

  const onChangeRowsPerPage = useCallback((value: number) => {
    setRowsPerPage(value);
    setPage(0);

    // setSelectedRows([]);
  }, []);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const onChangeSort = useCallback(
    (column: IColumn<T>) => {
      const newSortAtribute = column.props[0].toString();
      if (newSortAtribute === sortBy) {
        setSortAscending((oldState) => !oldState);
      } else {
        setSortAscending(true);
      }
      setSortBy(newSortAtribute);
    },
    [sortBy]
  );

  const dynamicSort = useCallback((prop: string) => {
    let sortOrder = 1;
    let property = prop;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (a: any, b: any) => {
      let result = 0;
      const valueA = a[property] ? a[property] : 0;
      const valueB = b[property] ? b[property] : 0;
      if (valueA < valueB) {
        result = -1;
      }
      if (valueA > valueB) {
        result = 1;
      }
      return result * sortOrder;
    };
  }, []);

  // function formatter() {
  //   const obj = document.getElementById('box');
  //   const objtr = obj.getElementsByTagName('tr');
  //   for (let i=0; i<objtr.length; i++) {
  //    if (objtr[i].cells[0].innerHTML = objtr[i].cells[1].innerHTML) {
  //      objtr[i].cells[0].rowSpan = 2;
  //    }
  //   }
  //  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    if (selectAllRows === "perPage") {
      setPage(newPage);
      setIsAllSelected(
        selectedRows.includes(
          rows.slice(
            newPage * rowsPerPage,
            newPage * rowsPerPage + rowsPerPage
          )[0]
        )
      );
    } else {
      setPage(newPage);
      setSelectedRows(selectedRows);
    }
  };
  const handleAllSelect = useCallback(
    (type: "inTable" | "perPage") => {
      if (type === "inTable") {
        setSelectedRows(
          selectedRows.length === 0
            ? [...rows]
            : selectedRows.length === rows.length
            ? []
            : [...rows]
        );
      } else {
        setSelectedRows(
          selectedRows.length === 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : selectedRows.length ===
              rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .length
            ? []
            : rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        );
      }
    },
    [page, rows, rowsPerPage, selectedRows.length]
  );

  const handleSelect = useCallback(
    (row: IRow<T>) => {
      const index = selectedRows.findIndex((row_) => row_ === row);
      if (index >= 0) {
        selectedRows.splice(index, 1);
        setSelectedRows(selectedRows);
        updateRows();
      } else {
        setSelectedRows([...selectedRows, row]);
        updateRows();
      }
    },
    [selectedRows, updateRows]
  );

  const actionHandle = useCallback(
    async (rowsSelected: any, handled: ISelectBoxActions<T>, event) => {
      handled.onClick(rowsSelected, event);
      setSelectedRows([]);
      setAllSelected(false);
      // console.log({ rowsSelected, handled, event, allSelected, selectedRows });
    },
    []
  );

  useEffect(() => {
    if (selectAllRows === "inTable") {
      setIsAllSelected(selectedRows.length === rows.length);
    } else {
      setIsAllSelected(
        selectedRows.length ===
          rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .length
      );
    }
  }, [page, rows, rows.length, rowsPerPage, selectAllRows, selectedRows]);

  // useEffect(() => {
  //   console.log({ all: selectedRows });
  // }, [selectedRows]);

  if (rows.length === 0) {
    return <p>Não foi encontrado nenhum registro</p>;
  }

  return (
    <>
      <ActionsContainer className="actionsContainer">
        {beforeExport && beforeExport()}
        {exportList && (
          <>
            <IconButton
              ref={anchorRef}
              aria-controls={open ? "export-list" : undefined}
              aria-haspopup="true"
              style={
                selectBoxActions
                  ? { padding: "8px", marginRight: "0.7rem" }
                  : { padding: "8px", marginBottom: "0.7rem" }
              }
              onClick={handleToggle}
            >
              <GetAppIcon color="inherit" />
            </IconButton>
            <Popper
              style={{ zIndex: 9 }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <List id="exportListContentId" className="exportListContent">
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="export-list">
                        <MenuItem onClick={() => exportData<T>(rows, columns)}>
                          Excel
                        </MenuItem>
                        {exportOptions && exportOptions()}''
                      </MenuList>
                    </ClickAwayListener>
                  </List>
                </Grow>
              )}
            </Popper>
          </>
        )}
        {selectBoxActions &&
          selectBoxActions.map(
            (action: ISelectBoxActions<T>, index: number) => (
              <>
                <button
                  key={String(index)}
                  type="button"
                  className="exportBtn"
                  onClick={(event) => actionHandle(selectedRows, action, event)}
                >
                  {action.renderItem()}
                </button>
              </>
            )
          )}
        {getRows &&
          getRows.map((action, index) => (
            <>
              <ButtonBase
                key={String(index)}
                type="button"
                className="exportBtn"
                onClick={(event) => action.onClick(rows, event)}
              >
                {action.renderItem()}
              </ButtonBase>
            </>
          ))}
        {buttons && buttons()}
      </ActionsContainer>
      {!loading && rows.length !== 0 ? (
        <Container className="tableWrapperBox">
          {/* here div scroll */}
          <table id="box" className="table-box tableBoxId">
            <thead>
              <tr key={Date.now() + "theader" + Math.random()}>
                {selectBox && (
                  <th style={{ padding: "7px", width: "2%" }}>
                    {selectAllRows === "inTable" && (
                      <AllTableSelectBox
                        select={isAllSelected}
                        onClick={() => handleAllSelect("inTable")}
                      />
                    )}
                    {selectAllRows === "perPage" && (
                      <AllTableSelectBox
                        select={isAllSelected}
                        onClick={() => handleAllSelect("perPage")}
                      />
                    )}
                    {!selectAllRows && (
                      <AllTableSelectBox
                        select={isAllSelected}
                        onClick={() => handleAllSelect("inTable")}
                      />
                    )}
                  </th>
                )}
                {columns?.map((column) => {
                  if (column.display === "notEmpty") {
                    if (
                      rows.findIndex((item: any) => item[column.props[0]]) > -1
                    ) {
                      return (
                        <th className={column.sticky ? 'sticky' : ''} key={column.title}>
                          <div style={column.cssTitle} className="title">
                            {column.orderable ? (
                              <SortButton
                                type="button"
                                onClick={() => onChangeSort(column)}
                                className={`${typeof column.position === 'string' ? column.position : column.type === 'number' ? 'right' : null } icon`}
                              >
                                <h1>{column.title}</h1>
                                <img
                                  style={{
                                    transform: `rotate(${
                                      sortAscending &&
                                      column.props[0] === sortBy
                                        ? "180deg"
                                        : 0
                                    })`,
                                    width: "15px",
                                  }}
                                  src={
                                    column.props[0] === sortBy
                                      ? TableArrow
                                      : TableFilterCell
                                  }
                                  alt={column.title}
                                />
                              </SortButton>
                            ) : (
                              <h1>{column.title}</h1>
                            )}
                          </div>
                        </th>
                      );
                    } else {
                      return null;
                    }
                  }
                  return (
                    <>
                      {column.display === false ? null : (
                        <th className={column.sticky ? 'sticky' : ''} key={column.title}>
                          <div style={column.cssTitle} className="title">
                            {column.orderable ? (
                              <SortButton
                                type="button"
                                onClick={() => onChangeSort(column)}
                                className={`${typeof column.position === 'string' ? column.position : column.type === 'number' ? 'right' : null } icon`}
                              >
                                <h1>{column.title}</h1>
                                <img
                                  style={{
                                    transform: `rotate(${
                                      sortAscending &&
                                      column.props[0] === sortBy
                                        ? "180deg"
                                        : 0
                                    })`,
                                    width: "15px",
                                  }}
                                  src={
                                    column.props[0] === sortBy
                                      ? TableArrow
                                      : TableFilterCell
                                  }
                                  alt={column.title}
                                />
                              </SortButton>
                            ) : (
                              <h1>{column.title}</h1>
                            )}
                          </div>
                        </th>
                      )}
                    </>
                  );
                })}
                {rowActions?.length || onEditRow || onDeleteRow ? (
                  <th>
                    <div className="title">
                      <h1>Ações</h1>
                    </div>
                  </th>
                ) : null}
              </tr>
            </thead>
            <tbody>
              {(!hidePagination
                ? rows
                    .sort(dynamicSort(`${sortAscending ? "-" : ""}${sortBy}`))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows.sort(dynamicSort(`${sortAscending ? "-" : ""}${sortBy}`))
              ).map((row, index) => (
                <tr tabIndex={index} key={Date.now() + index + Math.random()}>
                  {selectBox && (
                    <td style={{ padding: "7px" }} width="2%">
                      <TableSelectBox
                        select={selectedRows.includes(row)}
                        onClick={() => handleSelect(row)}
                      />
                    </td>
                  )}

                  {columns.map((column, indexColumn) => {
                    if (column.display === "notEmpty") {
                      if (
                        rows.findIndex((item: any) => item[column.props[0]]) >
                        -1
                      ) {
                        return (
                          <TableCell
                            key={`${String(indexColumn)}${index}`}
                            column={column}
                            row={row}
                          />
                        );
                      } else {
                        return null;
                      }
                    }
                    if (column.display === false) {
                      if (
                        rows.findIndex((item: any) => item[column.props[0]]) >
                        -1
                      ) {
                        return (
                          <TableCell
                            key={`${String(indexColumn)}${index}`}
                            column={column}
                            row={row}
                          />
                        );
                      } else {
                        return null;
                      }
                  }
                    return (
                      <>
                        <TableCell
                          key={`${String(indexColumn)}${index}`}
                          column={column}
                          row={row}
                        />
                      </>
                    );
                  })}
                  {(!!onEditRow ||
                    !!onDeleteRow ||
                    (!!rowActions && !!rowActions.length)) && (
                    <td>
                      <div className="row-actions-item">
                        {onEditRow && (
                          <button
                            type="button"
                            onClick={(event) => onEditRow(row, event)}
                            className="action"
                          >
                            <p className="hover-item">Editar</p>
                            <img src={TableEditItem} alt="" />
                          </button>
                        )}
                        {onDeleteRow && (
                          <button
                            type="button"
                            onClick={(event) => onDeleteRow(row, event)}
                            className="action"
                          >
                            <p className="hover-item">Excluir</p>
                            <img src={TableDeleteItem} alt="" />
                          </button>
                        )}
                        {rowActions
                          ? rowActions.map((action: IRowAction<T>) => (
                              <button
                                key={`${Math.random() + index}`}
                                type="button"
                                onClick={(event) => action.onClick(row, event)}
                                className="action detail"
                              >
                                {action.renderItem(row)}
                              </button>
                            ))
                          : null}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      ) : (
        <LoadingContainer>
          <BiLoaderAlt size={48} color="#6993FF" />
          <p>Carregando...</p>
        </LoadingContainer>
      )}

      {!loading && !hidePagination ? (
        <div className="pagination-box" style={{ paddingTop: "1rem" }}>
          <PaginationComponent
            background_active={background_active}
            count={rows.length}
            page={page}
            defaultNumberOfRows={
              defaultNumberOfRows ||
              (!!paginationOptions && paginationOptions?.length
                ? paginationOptions[0].label
                : 5)
            }
            options={
              paginationOptions || [
                {
                  label: 5,
                  value: 5,
                },
                {
                  label: 10,
                  value: 10,
                },
                {
                  label: 25,
                  value: 25,
                },
                {
                  label: 50,
                  value: 50,
                },
                {
                  label: 100,
                  value: 100,
                },
              ]
            }
            onChangeRowsPerPage={onChangeRowsPerPage}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
          />
        </div>
      ) : null}
    </>
  );
}

export default Table;
