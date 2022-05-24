import { SvgIcon } from '@material-ui/core';
import React, { AnchorHTMLAttributes } from 'react';
import { Container } from './styles';

export interface HyperLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * @property *title* = Texto do link.
   * @example title='hello'
   */
  title: string;
  /**
   * @property *to* = link/caminho.
   * @example to='/otherpage'
   */
  to?: string;
  /**
   * @property *type* = Tipo do Link.
   * @example type={'link' | 'detail'}
   */
  type: string;
}

/**
 * Componente HyperLink.
 * Cada propriedade age de um determinado modo e algumas propriedades podem depender de outras.
 * @param {string} title Texto do link.
 * @param {string=} to link/caminho.
 * @param {string} type Tipo do Link.
 */

const HyperLink: React.FC<HyperLinkProps> = ({ to, type, title, ...rest }) => {
  return (
    <Container className="hyperLinkStyle">
      {type === 'link' && (
        <a {...rest} href={to}>
          {title}
          <SvgIcon viewBox="0 0 24 24" width="1.5em" height="1.5em">
            <path
              d="M12.2266 11.5C12.5027 11.5 12.7266 11.7239 12.7266 12C12.7266 12.2761 12.5027 12.5 12.2266 12.5V11.5ZM2.89741 12.5C2.62127 12.5 2.39741 12.2761 2.39741 12C2.39741 11.7239 2.62127 11.5 2.89741 11.5V12.5ZM12.2266 12.5H2.89741V11.5H12.2266V12.5Z"
              fill="#12AAFF"
            />
            <path
              d="M15.352 11.8142L13.5618 10.2023C13.047 9.7388 12.2265 10.1041 12.2265 10.7968V13.2032C12.2265 13.8959 13.047 14.2612 13.5618 13.7977L15.352 12.1858C15.4623 12.0865 15.4623 11.9135 15.352 11.8142Z"
              fill="#12AAFF"
            />
          </SvgIcon>
        </a>
      )}

      {type === 'detail' && (
        <a {...rest} href={to}>
          {title}
          <SvgIcon
            style={{ color: 'transparent', width: '18px' }}
            viewBox="0 0 20 20"
            width="18"
            height="18"
          >
            <circle cx="8" cy="8" r="5" stroke="#12AAFF" strokeWidth="2" />
            <path
              d="M15 15L12 12"
              stroke="#12AAFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </SvgIcon>
        </a>
      )}
    </Container>
  );
};

export default React.memo(HyperLink);
