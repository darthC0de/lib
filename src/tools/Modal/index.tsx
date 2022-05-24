/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import { Badge, Fade, Grid, GridSize } from "@material-ui/core";
import { FormHandles } from "@unform/core";
// import { Input, Select } from '@pdasolutions/web';
import { Container, Detail, TableContent } from "./styles";
import { Input, Select, DatePicker } from "../Form";

export interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @property *textButton* = Texto do botão.
   * @example textButton="Enviar".
   */
  textButton: string;
  /**
   * @property *component* = Tipo e estilo do botão.
   * @example component="submit".
   */
  component: "cancel" | "submit" | "exclusion" | "reset" | ReactElement;
  onClick: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * @property *name* = Nome do input, que poderá ser chamado via *HandleForm*
   * @example name: 'hello'
   */
  name: string;
  /**
   * @property *width* = Largura do input.
   * @example width: 100
   */
  width?: number;
  /**
   * @property *label* = Nome por cima do input.
   * @example label: 'Message'
   */
  label?: string;
  /**
   * @property *typeInput* = Tipo do input.
   * @example typeInput: 'select' | 'text' | 'date'
   */
  typeInput?: "select" | "text" | "date";
  /**
   * @property *options* = Opções do input *Select*.
   * @example options: [{label: 'Hello', value: 1}, ...]
   */
  options?: object[];
  /**
   * @property *messageErrorOnBlue* = Apresenta uma mensagem de erro caso a validação utilizando *Yup* esteja incorreta.
   * @example messageErrorOnBlur: 'O campo deve ser preenchido'
   */
  messageErrorOnBlur?: string;
  /**
   * @deprecated
   * @property *iconError* = Define o ícone caso a validação utilizando *Yup* esteja incorreta.
   * @example iconError: <Icon />
   */
  iconError?: string;
  /**
   * @property *isRequired* = Habilita marcação vermelha de input requerido.
   * @example isRequired: true
   * @description Pode passar também um estado para alternância.
   * @example isRequired: required[true | false]
   */
  isRequired?: boolean;
  /**
   * @property *sm* = Tamanho do input para dispositivos maiores que 576px
   * usando de referência tabela de 12 colunas.
   * @example sm: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  sm?: boolean | GridSize;
  /**
   * @property *xl* = Tamanho do input para dispositivos maiores que 1200px
   * usando de referência tabela de 12 colunas.
   * @example xl: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  xl?: boolean | GridSize;
  /**
   * @property *lg* = Tamanho do input para dispositivos maiores que 992px
   * usando de referência tabela de 12 colunas.
   * @example lg: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  lg?: boolean | GridSize;
  /**
   * @property *xs* = Tamanho do input para dispositivos menores que 576px
   * usando de referência tabela de 12 colunas.
   * @example xs: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  xs?: boolean | GridSize;
  /**
   * @property *xs* = Tamanho do input para dispositivos maiores que 768px
   * usando de referência tabela de 12 colunas.
   * @example xs: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  md?: boolean | GridSize;
}

export interface PopUpWindowProps {
  /**
   * @property *title* = Título do Modal.
   * @example title='Título'
   */
  title?: string;
  /**
   * @property *type* = Tipo do modal, edit, delete ou outros.
   * @example type={'edit' | 'delete' | 'create' | 'detail'}
   */
  type: string;
  /**
   * @property *isTable* = Define se o modal tem uma tabela e cria a estrutura para a tabela dentro do modal.
   */
  isTable?: boolean;
  /**
   * @property *open* = Estado para abrir o modal.
   * @example open={true}
   */
  open?: boolean;
  /**
   * @property *tableContent* = Necessita da propriedade `isTable` adiciona a tabela.
   * Permite criar uma tabela dentro do `isTable`.
   * @example tableContent={() => (
   *  <Table<T> />
   * )}
   */
  tableContent?(): React.ReactNode;
  /**
   * @property *modalRefObject* = Referência dos inputs do Modal utilizando {@link https://unform.dev/|unform}.
   * @example modalRefObject={ref}
   */
  modalRefObject?: React.RefObject<FormHandles>;
  /**
   * @property *interface* = *Deprecated* Interface a ser passada para dentro do Modal.
   * @example interface={IProps}
   */
  interface?: React.ReactPropTypes;
  /**
   * @property *inputs* = Inputs de dentro do modal seguindo a interface InputsProps.
   * @example inputs={[... {name: 'input1', ...}]}
   */
  inputs?: InputProps[];
  /**
   * @property *handleCreate* = Ação do botão *`salvar`* ou *`criar`* dentro do modal.
   * @example handleCreate={createFunction}
   */
  handleCreate?(data: object): void;
  /**
   * @property *handleImport* = @deprecated Cria um botão e define sua ação para importar arquivos dentro do modal.
   * @example handleImport={importFileFunction}
   */
  handleImport?(data: object): void;
  /**
   * @property *handleEdit* = @deprecated Cria um botão e define sua ação para editar/salvar enviando o data do modal.
   * @example handlEdit={editFunction}
   */
  handleEdit?(data: object): void;
  /**
   * @property *handleSubmit* = Ação do botão *`submit`*, necessário passar *`data`*.
   * @example handleSubmit={submitFunction}
   */
  handleSubmit?(data: object): void;
  /**
   * @property *handleCancel* = Ação do botão *`cancel`*.
   * @example handleCancel={cancelFunction}
   */
  handleCancel?(): void;
  /**
   * @property *hiddenChildren* = Permite criar inputs dentro de *`Filtros Avançados`*.
   * @example hiddenChildren={() => (...)}
   */
  hiddenChildren?(): void;
  /**
   * @property *buttons* = Permite criar botões diversos dentro do *`Footer`*.
   * @example buttons={() => (...)}
   */
  buttons?: ButtonsProps[];
  /**
   * @property *textDefaultButton* = Altera o texto do botão *`submit`*.
   * @example textDefaultButton="Criar"
   */
  textDefaultButton?: string;
}

/**
 * Componente Modal.
 * Cada propriedade age de um determinado modo e algumas propriedades podem depender de outras.
 * @param {string=} title Título do modal.
 * @param {boolean=} open Estado para abrir o modal.
 * @param {data} handleSubmit Ação do botão *`submit`*, necessário passar *`data`*.
 * @param {void} handleCancel Ação do botão *`cancel`*.
 * @param {refObject} modalRefObject Referência dos inputs do Modal utilizando {@link https://unform.dev/|unform}.
 * @param {data} handleCreate Ação do botão *`salvar`* ou *`criar`* dentro do modal.
 * @param {data} handleImport Cria um botão e define sua ação para importar arquivos dentro do modal.
 * @param {data} handleEdit Cria um botão e define sua ação para editar/salvar enviando o data do modal.
 * @param children Chidlren para `<Modal />`.
 * @param {InputProps} hiddenChildren Permite criar inputs dentro de *`Filtros Avançados`*.
 * @param {InputProps} inputs Cria inputs a partir de um JSON no formato da interface InputProps.
 * @param type Tipo do modal, edit, delete ou outros.
 * @param isTable Define se o modal tem uma tabela e cria a estrutura para a tabela dentro do modal.
 * @param tableContent Necessita da propriedade `isTable` adiciona a tabela.
 * @param textDefaultButton Altera o texto do botão *`submit`*.
 */

const Modal: React.FC<PopUpWindowProps> = ({
  title,
  open,
  handleSubmit,
  handleCancel,
  modalRefObject,
  handleCreate,
  handleImport,
  handleEdit,
  children,
  hiddenChildren,
  inputs,
  type,
  isTable = false,
  tableContent,
  textDefaultButton,
  buttons,
}) => {
  const handleClickSubmit = React.useCallback(
    (data) => {
      if (handleSubmit) {
        handleSubmit(data);
      }
    },
    [handleSubmit]
  );

  const onCreate = React.useCallback(
    (data) => {
      if (handleCreate) {
        handleCreate(data);
      }
    },
    [handleCreate]
  );
  const onImport = React.useCallback(
    (data) => {
      if (handleImport) {
        handleImport(data);
      }
    },
    [handleImport]
  );

  const onEdit = React.useCallback(
    (data) => {
      if (handleEdit) {
        handleEdit(data);
      }
    },
    [handleEdit]
  );
  const ownRef = React.useRef<FormHandles>(null);
  const formRef = modalRefObject || ownRef;

  const handleClickCancel = React.useCallback(() => {
    if (handleCancel) {
      handleCancel();
    }
  }, [handleCancel]);

  return (
    <>
      <Fade unmountOnExit mountOnEnter timeout={400} in={open}>
        <Container ref={formRef} onSubmit={handleClickSubmit}>
          <div>
            {type === "delete" && (
              <div className="popupDelete">
                <div className="popupHead">{!!title && <h5>{title}</h5>}</div>
                <div className="popupBody">
                  <p>{children}</p>
                  {hiddenChildren && hiddenChildren()}
                </div>
                <div className="popupFooter">
                  <div className="buttons">
                    <button
                      type="button"
                      className="cancel"
                      onClick={handleClickCancel}
                    >
                      Fechar
                    </button>
                    <button
                      type="button"
                      className="exclusion"
                      onClick={handleClickSubmit}
                    >
                      {textDefaultButton ? textDefaultButton : "Apagar"}
                    </button>
                  </div>
                </div>
              </div>
            )}
            {type === "confirm" && (
              <div className="popupDelete">
                <div className="popupHead">{!!title && <h5>{title}</h5>}</div>
                <div className="popupBody">
                  <p>{children}</p>
                  {hiddenChildren && hiddenChildren()}
                </div>
                <div className="popupFooter">
                  <div className="buttons">
                    {buttons?.map(
                      ({ textButton, component, onClick, ...rest }) => (
                        <>
                          {typeof component === "object" ? (
                            component
                          ) : (
                            <button
                              type="button"
                              className={
                                typeof component === "string"
                                  ? component
                                  : undefined
                              }
                              onClick={onClick}
                              {...rest}
                            >
                              {textButton}
                            </button>
                          )}
                        </>
                      )
                    )}
                    <button
                      type="button"
                      className="cancel"
                      onClick={handleClickCancel}
                    >
                      Fechar
                    </button>
                    <button
                      type="button"
                      className="submit"
                      onClick={handleClickSubmit}
                    >
                      {textDefaultButton ? textDefaultButton : "Confirmar"}
                    </button>
                  </div>
                </div>
              </div>
            )}
            {type === "detail" && (
              <Detail>
                <div className="popup">
                  <div className="popupHeader">
                    {!!title && <h5>{title}</h5>}
                    <div className="contentRightGrid">
                      <button
                        type="button"
                        onClick={handleClickCancel}
                        className="close"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          color="#ccc"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: "rgba(204, 204, 204)" }}
                        >
                          <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="popUpTable">
                    {isTable && (
                      <div className="wrapper" style={{ display: "flex" }}>
                        <div className="wrap" style={{ flexGrow: 1 }}>
                          <TableContent>
                            {tableContent && tableContent()}
                          </TableContent>
                        </div>
                      </div>
                    )}
                    {children}
                  </div>

                  <div className="popupFooter">
                    <div className="buttons">
                      {buttons?.map(
                        ({ textButton, component, onClick, ...rest }) => (
                          <>
                            {typeof component === "object" ? (
                              component
                            ) : (
                              <button
                                type="button"
                                className={
                                  typeof component === "string"
                                    ? component
                                    : undefined
                                }
                                onClick={onClick}
                                {...rest}
                              >
                                {textButton}
                              </button>
                            )}
                          </>
                        )
                      )}
                      <button
                        type="button"
                        className="cancel"
                        onClick={handleClickCancel}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </Detail>
            )}
            {type === "create" && (
              <Detail>
                <div className="popup">
                  <div className="popupHeader">
                    {!!title && <h5>{title}</h5>}
                    <div className="contentRightGrid">
                      <button
                        type="button"
                        onClick={handleClickCancel}
                        className="close"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          color="#ccc"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: "rgba(204, 204, 204)" }}
                        >
                          <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="popUpTable">
                    <Grid
                      container
                      spacing={3}
                      style={{ padding: "1.5rem 1rem", alignItems: "self-end" }}
                    >
                      {inputs?.map(
                        ({
                          name,
                          label,
                          typeInput = "text",
                          options,
                          placeholder,
                          sm,
                          xl,
                          lg,
                          xs,
                          md,
                          isRequired,
                          ...rest
                        }) => (
                          <Grid
                            item
                            xl={xl}
                            lg={lg}
                            xs={xs}
                            md={md}
                            sm={sm}
                            key={name.toString()}
                          >
                            {!!label && isRequired ? (
                              <Badge badgeContent="*">
                                <p className="labelInput">{label}</p>
                              </Badge>
                            ) : (
                              <p className="labelInput">{label}</p>
                            )}
                            {typeInput === "select" && (
                              <Select
                                name={name}
                                options={options}
                                placeholder={placeholder}
                              />
                            )}
                            {typeInput === "text" && (
                              // @ts-ignore
                              <Input
                                id={name}
                                name={name}
                                type={type || "text"}
                                placeholder={placeholder}
                                // handleInputError={handleInputError}
                                // iconError={IconError}
                                // iconSuccess={IconSuccess}
                                {...rest}
                              />
                            )}
                            {typeInput === "date" && (
                              // @ts-ignore
                              <DatePicker
                                id={name}
                                name={name}
                                {...rest}
                                type="date"
                                placeholder={placeholder}
                              />
                            )}
                          </Grid>
                        )
                      )}
                      {children}
                    </Grid>
                  </div>
                  <div className="popupFooter">
                    <div className="buttons">
                      {buttons?.map(
                        ({ textButton, component, onClick, ...rest }) => (
                          <>
                            {typeof component === "object" ? (
                              component
                            ) : (
                              <button
                                type="button"
                                className={
                                  typeof component === "string"
                                    ? component
                                    : undefined
                                }
                                onClick={onClick}
                                {...rest}
                              >
                                {textButton}
                              </button>
                            )}
                          </>
                        )
                      )}
                      <button
                        type="button"
                        className="cancel"
                        onClick={handleClickCancel}
                      >
                        Fechar
                      </button>
                      <button
                        type="submit"
                        className="submit"
                        onClick={onCreate}
                      >
                        {textDefaultButton ? textDefaultButton : "Criar"}
                      </button>
                    </div>
                  </div>
                </div>
              </Detail>
            )}
            {type === "import" && (
              <Detail>
                <div className="popup">
                  <div className="popupHeader">
                    {!!title && <h5>{title}</h5>}
                    <div className="contentRightGrid">
                      <button
                        type="button"
                        onClick={handleClickCancel}
                        className="close"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          color="#ccc"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: "rgba(204, 204, 204)" }}
                        >
                          <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="popUpTable">
                    <Grid
                      container
                      spacing={3}
                      style={{ padding: "1.5rem 1rem", alignItems: "self-end" }}
                    >
                      {inputs?.map(
                        ({
                          name,
                          label,
                          typeInput = "text",
                          options,
                          placeholder,
                          sm,
                          xl,
                          lg,
                          xs,
                          md,
                          isRequired,
                          ...rest
                        }) => (
                          <Grid
                            item
                            xl={xl}
                            lg={lg}
                            xs={xs}
                            md={md}
                            sm={sm}
                            key={name.toString()}
                          >
                            {!!label && isRequired ? (
                              <Badge badgeContent="*">
                                <p className="labelInput">{label}</p>
                              </Badge>
                            ) : (
                              <p className="labelInput">{label}</p>
                            )}
                            {typeInput === "select" && (
                              <Select
                                name={name}
                                options={options}
                                placeholder={placeholder}
                              />
                            )}
                            {typeInput === "text" && (
                              // @ts-ignore
                              <Input
                                id={name}
                                name={name}
                                type={type || "text"}
                                placeholder={placeholder}
                                // handleInputError={handleInputError}
                                // iconError={IconError}
                                // iconSuccess={IconSuccess}
                                {...rest}
                              />
                            )}
                            {typeInput === "date" && (
                              // @ts-ignore
                              <DatePicker
                                id={name}
                                name={name}
                                {...rest}
                                type="date"
                                placeholder={placeholder}
                              />
                            )}
                          </Grid>
                        )
                      )}
                    </Grid>
                  </div>
                  {hiddenChildren && hiddenChildren()}
                  <div className="popupFooter">
                    <div className="buttons">
                      {buttons?.map(
                        ({ textButton, component, onClick, ...rest }) => (
                          <>
                            {typeof component === "object" ? (
                              component
                            ) : (
                              <button
                                type="button"
                                className={
                                  typeof component === "string"
                                    ? component
                                    : undefined
                                }
                                onClick={onClick}
                                {...rest}
                              >
                                {textButton}
                              </button>
                            )}
                          </>
                        )
                      )}
                      <button
                        type="button"
                        className="cancel"
                        onClick={handleClickCancel}
                      >
                        Fechar
                      </button>
                      <button
                        type="submit"
                        className="submit"
                        onClick={onImport}
                      >
                        {textDefaultButton ? textDefaultButton : "Importar"}
                      </button>
                    </div>
                  </div>
                </div>
              </Detail>
            )}
            {type === "edit" && (
              <Detail>
                <div className="popup">
                  <div className="popupHeader">
                    {!!title && <h5>{title}</h5>}
                    <div className="contentRightGrid">
                      <button
                        type="button"
                        onClick={handleClickCancel}
                        className="close"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          color="#ccc"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: "rgba(204, 204, 204)" }}
                        >
                          <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="popUpTable">
                    <Grid
                      container
                      spacing={3}
                      style={{ padding: "1.5rem 1rem", alignItems: "self-end" }}
                    >
                      {inputs?.map(
                        ({
                          name,
                          label,
                          typeInput = "text",
                          options,
                          placeholder,
                          sm,
                          xl,
                          lg,
                          xs,
                          md,
                          isRequired,
                          ...rest
                        }) => (
                          <Grid
                            item
                            xl={xl}
                            lg={lg}
                            xs={xs}
                            md={md}
                            sm={sm}
                            key={name.toString()}
                          >
                            {!!label && isRequired ? (
                              <Badge badgeContent="*">
                                <p className="labelInput">{label}</p>
                              </Badge>
                            ) : (
                              <p className="labelInput">{label}</p>
                            )}
                            {typeInput === "select" && (
                              <Select
                                name={name}
                                options={options}
                                placeholder={placeholder}
                              />
                            )}
                            {typeInput === "text" && (
                              // @ts-ignore
                              <Input
                                id={name}
                                name={name}
                                type={type || "text"}
                                placeholder={placeholder}
                                // handleInputError={handleInputError}
                                // iconError={IconError}
                                // iconSuccess={IconSuccess}
                                {...rest}
                              />
                            )}
                            {typeInput === "date" && (
                              // @ts-ignore
                              <DatePicker
                                id={name}
                                name={name}
                                {...rest}
                                type="date"
                                placeholder={placeholder}
                              />
                            )}
                          </Grid>
                        )
                      )}
                      {children}
                    </Grid>
                  </div>

                  <div className="popupFooter">
                    <div className="buttons">
                      {buttons?.map(
                        ({ textButton, component, onClick, ...rest }) => (
                          <>
                            {typeof component === "object" ? (
                              component
                            ) : (
                              <button
                                type="button"
                                className={
                                  typeof component === "string"
                                    ? component
                                    : undefined
                                }
                                onClick={onClick}
                                {...rest}
                              >
                                {textButton}
                              </button>
                            )}
                          </>
                        )
                      )}
                      <button
                        type="button"
                        className="cancel"
                        onClick={handleClickCancel}
                      >
                        Fechar
                      </button>
                      <button type="submit" className="submit" onClick={onEdit}>
                        {textDefaultButton ? textDefaultButton : "Salvar"}
                      </button>
                    </div>
                  </div>
                </div>
              </Detail>
            )}
          </div>
        </Container>
      </Fade>
    </>
  );
};

export default Modal;
