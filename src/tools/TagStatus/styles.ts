/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export interface TagStatusProps {
  /**
   * @property *status* = Texto a ser exibido dentro da tag
   * @example status="teste"
   */
  status: string;

  /**
   * @property *width* = Largura da tag
   * @example width={20}
   */
  width?: number;

  /**
   * @property *fontSize* = Tamanho da fonte utilizada dentro da tag
   * @example fontSize={15}
   */
  fontSize?: number;

  /**
   * @property *customPadding* = Habilita o uso de paddings customizados
   * @example customPadding={true}
   */
  customPadding?: boolean;

  /**
   * @property *paddingX* = Altera o padding no eixo X
   * @example paddingX={10}
   */
  paddingX?: number;

  /**
   * @property *paddingY* = Altera o padding no eixo Y
   * @example paddingY={10}
   */
  paddingY?: number;

  /**
   * @property *color* = Altera a cor do texto dentro da Tag
   * @example color="#000"
   * @example color="rgb(0,0,0)"
   * @example color="rgba(0,0,0,1)"
   */
  color?: string;

  /**
   * @property *background* = Altera a cor de fundo do texto dentro da Tag
   * @example background="#000"
   * @example background="rgb(0,0,0)"
   * @example background="rgba(0,0,0,1)"
   */
  background?: string;

  /**
   * @property *styleFont* = Altera o estilo padrão do texto,
   * modificando-o para primeira letra maiúscula por padrão,
   * texto completo em maiúscula ou minúscula, etc.
   * @example styleFont="capitalize" | "uppercase" | "lowercase" | "unset"
   */
  styleFont?:
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'unset'
    | 'none'
    | 'initial'
    | 'inherit';
}

export const Tag = styled.p<TagStatusProps>`
  ${props =>
		props.width
			? css`
  width: {props.width}%;
`
			: css`
          width: 100%;
        `}
  ${props =>
		props.fontSize
			? css`
  font-size: {props.fontSize}pt;
`
			: css`
          font-size: 10pt;
        `}

  color: ${props => (props.color ? props.color : '#59DE8F')} !important;

  background: ${props =>
		props.background ? props.background : '#DEF8E9'} !important;

  border-radius: 6px;
  height: 26px;
  text-align: center;

  ${props =>
		props.customPadding && props.paddingX
			? css`
  padding-left: {props.paddingX}pt;
  padding-right: {props.paddingX}pt;
`
			: css`
          padding-left: 8px;
          padding-right: 8px;
        `}
  ${props =>
		props.customPadding && props.paddingY
			? css`
  padding-top: {props.paddingy}pt;
  padding-bottom: {props.paddingy}pt;
`
			: css`
          padding-top: 4px;
          padding-bottom: 4px;
        `}

        ${props =>
		props.customPadding && props.paddingY && props.paddingX
			? css`
  padding-top: {props.paddingy}pt;
  padding-bottom: {props.paddingy}pt;
  padding-left: {props.paddingX}pt;
  padding-right: {props.paddingX}pt;
`
			: null}

  padding: ${props => props.paddingY}px ${props => props.paddingX}px;

  ${props =>
		props.styleFont
			? css`
  text-transform: {props.styleFont};
`
			: css`
          text-transform: capitalize;
        `}
`;
