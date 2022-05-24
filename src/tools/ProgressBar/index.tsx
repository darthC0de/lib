import React, { CSSProperties, memo } from 'react';

import {
  Container,
  ContainerNaN,
  ContainerRounded,
  ContainerHalf,
} from './styles';

export interface ProgressBarProps {
/**
 * @property *value* = Valor do progresso.
 * @example value={100}
 */
  value: number;
/**
 * @property *reverse* = Faz com que as cores do progresso fiquem em um progresso reverso (0 = verde / 100 = vermelho).
 * @example reverse={true}
 */
  reverse?: Boolean;
/**
 * @property *breakPoints* = Designa ao `progressBar` em quais pontos ele deverá atribuir uma cor diferente.
 * @example breakPoints=[1, 10, 50]
 */
  breakPoints?: number[];
/**
 * @property *breakPointColors* = Designa ao `progressBar` quais cores ele irá mudar, respectivamente em cada breakPoint.
 * @example breakPointsColors=[#fff, #f3e, #2d3] respectivamente para -> [1, 10, 50].
 */
  breakPointColors?: string[];
/**
 * @property *type* = Diferentes tipos de progressBar.
 * @example type={'linear' | 'rounded' | 'half' | 'number' | 'value'}
 */
  type: 'linear' | 'rounded' | 'half' | 'number' | 'value';
/**
 * @property *label* = Apresentará um texto para identificar o progressBar.
 * @example label="Texto"
 */
  label?: string;
/**
 * @property *hiddenLabel* = Esconde o `label`.
 * @example hiddenLabel={false}
 */
  hiddenLabel?: boolean;
/**
 * @property *border* = Define o estilo das bordas do progressBar.
 * @example border={'rounded' | 'square'}
 */
  border?: 'rounded' | 'square';
/**
 * @property *animated* = Define se o progressBar será animado ou não.
 * @example animated={true}
 */
  animated?: boolean;
/**
 * @property *positionTextHorizontaly* = Designa a posição horizontal da label (apenas tipo `linear`).
 * @example positionTextHorizontaly={'left' | 'center' | 'right'}
 */
  positionTextHorizontaly?: 'left' | 'center' | 'right';
/**
 * @property *positionTextVerticaly* = Designa a posição vertical da label (apenas tipo `linear`).
 * @example positionTextVerticaly={'top' | 'bottom'}
 */
  positionTextVerticaly?: 'top' | 'bottom';
/**
 * @property *style* = Pode atribuir mais estilos ao progressBar.
 * @example style={{filter: 'blur(10px)'}}
 */
  style?: CSSProperties;
/**
 * @property *fontSize* = Tamanho da fonte da label.
 * @example fontSize={14}
 */
  fontSize?: number;
}

/**
 * Componente ProgressBar.
 * Cada propriedade age de um determinado modo e algumas propriedades podem depender de outras.
 * @param {number} value Valor do progresso.
 * @param {string[]=} breakPointColors Designa ao `progressBar` quais cores ele irá mudar, respectivamente em cada breakPoint.
 * @param {number[]=} breakPoints Designa ao `progressBar` em quais pontos ele deverá atribuir uma cor diferente.
 * @param {string=} type Diferentes tipos de progressBar.
 * @param {string=} label Apresentará um texto para identificar o progressBar.
 * @param {boolean=} reverse Faz com que as cores do progresso fiquem em um progresso reverso (0 = verde / 100 = vermelho).
 * @param {boolean=} hiddenLabel Esconde o `label`.
 * @param {string=} border Define o estilo das bordas do progressBar.
 * @param {boolean=} animated Define se o progressBar será animado ou não.
 * @param {string=} positionTextHorizontaly Designa a posição horizontal da label (apenas tipo `linear`).
 * @param {string=} positionTextVerticaly Designa a posição vertical da label (apenas tipo `linear`).
 * @param {CSSProperties=} style Pode atribuir mais estilos ao progressBar.
 * @param {number=} fontSize Tamanho da fonte da label.
 */

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  breakPointColors,
  breakPoints,
  type,
  label,
  reverse,
  hiddenLabel,
  border,
  animated,
  positionTextHorizontaly,
  positionTextVerticaly,
  style,
  fontSize,
}) => {
  return (
    <>
      {type === 'linear' && (
        <Container
          breakPoints={breakPoints}
          breakPointColors={breakPointColors}
          progress={value}
          style={style}
          animated={animated}
          border={border}
          positionTextVerticaly={positionTextVerticaly}
          positionTextHorizontaly={positionTextHorizontaly}
        >
          <div className="progress-value">
            <span>{`${Number(value).toFixed(0)}%`}</span>
            {!hiddenLabel && (
              <>
                {label ? (
                  <span>
                    {'  '}
                    {label}
                  </span>
                ) : (
                  <span> Progresso</span>
                )}
              </>
            )}
          </div>
          <div className="progress-bar">
            <div className="progress-bar-value" />
          </div>
        </Container>
      )}
      {type === 'number' && (
        <ContainerNaN fontSize={fontSize}>
          {`${Number(value).toFixed(0)}%`}
        </ContainerNaN>
      )}
      {type === 'value' && (
        <ContainerNaN fontSize={fontSize}>
          <p>{label}</p>
        </ContainerNaN>
      )}
      {type === 'rounded' && (
        <ContainerRounded animated={animated} progress={value}>
          <div className="progress-bar">
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
            <h2>{`${Number(value).toFixed(0)}%`}</h2>
          </div>
          <div className="progress-value">
            {!hiddenLabel && (
              <>
                {label ? (
                  <span>
                    {'  '}
                    {label}
                  </span>
                ) : (
                  <span> Progresso</span>
                )}
              </>
            )}
          </div>
        </ContainerRounded>
      )}
      {type === 'half' && (
        <ContainerHalf reverse={reverse} progress={value}>
          <div className="progress-bar">
            <svg>
              <g fill="none" stroke="#ddd">
                <circle cx="125" cy="125" r="100" strokeWidth="10" />
                <circle cx="125" cy="125" r="100" strokeWidth="10" />
              </g>
            </svg>
            <div className="progress-value">
              <h2>{`${Number(value).toFixed(0)}%`}</h2>

              {!hiddenLabel && (
                <>
                  {label ? (
                    <span>
                      {'  '}
                      {label}
                    </span>
                  ) : (
                    <span> Progresso</span>
                  )}
                </>
              )}
            </div>
          </div>
        </ContainerHalf>
      )}
    </>
  );
};

export default memo(ProgressBar);
