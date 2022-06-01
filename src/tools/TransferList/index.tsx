import React, { useState, useCallback, useEffect, ReactElement } from 'react';

// Material UI
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { ButtonBase, IconButton } from '@material-ui/core';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { Container, TranferListItem } from './styles';

interface ListProps {
  transfer_id: number | string;
  transfer_name: string;
  transfer_icon: React.ReactElement;
}

interface TransferListProps {
  /**
   * @property *title* = Título do componente, esse título também será refletido em `selecionados`.
   * @example title="perfis"
   */
  title: string;
  /**
   * @property *height* = Modificar o tamanho do `TransferList` com o mínimo de 250px até o máximo de 400px.
   * @example height={400}
   * @default 300
   */
  height?: number;
  /**
   * @property *heightLeftList* = Modificar o tamanho do `Lista da esquerda` com o mínimo de 250px até o máximo de 400px.
   * @example height={400}
   * @default 300
   */
  heightLeftList?: number;
  /**
   * @property *initialList* = Lista de objetos à esquerda.
   * @example initialList=[{description: 'Jhon Doe', id: 1}, ...]
   */
  initialList?: object[];
  /**
   * @property *selectedList* = Lista de objetos já selecionados à direita.
   * @example selectedList=[{description: 'Susana Doe', id: 2}, ...]
   */
  selectedList?: object[];
  /**
   * @property *selectedList* = Habilita uma segunda caiza de seleção.
   * @example selectedLists=[]
   */
  twoSelectable?: boolean;
  /**
   * @property *iconListItem* = Habilita  os icones  nos items.
   * @example ''
   */
  iconListItem?: boolean;
  /**
   * @property *titleSecondList* = propeiedade que contem o titulo da segnda caiza de selecao.
   * @example titleSecondList="Lista 2"
   */
  /**
   * @property *rendericonListItem* = Habilita a função para criar um icone dentro do item.
   * @example renderItem: row => <ProgressBar value={row.progresso}>.
   */
  rendericonListItem?: () => string | ReactElement;
  titleSecondList?: string;
  /**
   * @property *path* = Propriedade que conterá `Label` do objeto.
   * @example path="description"
   */
  path?: string;
  /**
   * @property *subPath* = Propriedade para adicionar ícones.
   * @example subPath={icon}
   */
  subPath?: string;
  /**
   * @property *setSelectedList* = Lista alguns objetos já selecionados por padrão à direita.
   * @example setSelectedList=[{description: 'Susana Doe', id: 2}, ...]
   */
  setSelectedList?(list: object[]): void;
  /**
   * @property *setSelectedListTwo* = Lista alguns objetos já selecionados por padrão à direita nalista 2.
   * @example setSelectedList=[{description: 'Susana Doe', id: 2}, ...]
   */
  setSelectedListTwo?(list: object[]): void;
  /**
   * @property *setInitialList* = Lista alguns objetos já selecionados por padrão na lista à esqueda.
   * @example setInitialList=[{description: 'Jhon Doe', id: 1}, ...]
   */
  setInitialList?(list: object[]): void;
  setStateOption?(optionValue: boolean): void;
}

/**
 * Componente TransferList.
 * Cada propriedade age de um determinado modo e algumas propriedades podem depender de outras.
 * @param {string} title Título do componente, esse título também será refletido em `selecionados`.
 * @param {object[]} initialList Lista de objetos à esquerda.
 * @param {object[]} selectedList Lista de objetos já selecionados à direita.
 * @param {string} path Propriedade que conterá `Label` do objeto.
 * @param {string=} subPath Propriedade para adicionar ícones.
 * @param {object[]} setSelectedList Lista alguns objetos já selecionados por padrão à direita.
 * @param {object[]} setInitialList Lista alguns objetos já selecionados por padrão na lista à esqueda.
 * @param {number} height Modificar o tamanho do `TransferList` com o mínimo de 250px até o máximo de 400px.
 */

const TransferList: React.FC<TransferListProps> = ({
  title,
  initialList,
  selectedList,
  path,
  subPath,
  setSelectedList,
  setSelectedListTwo,
  setInitialList,
  height,
  twoSelectable,
  titleSecondList,
  heightLeftList,
  iconListItem,
  rendericonListItem,
}) => {
  const [currentItem, setCurrentItem] = useState(NaN as string | number);
  const [leftList, setLeftList] = useState(() => {
    if (!initialList?.length) return [];

    return initialList.map((item, index) => {
      if (!item) {
        return {};
      }

      const subString = Object.getOwnPropertyDescriptor(
        item,
        String(subPath),
      )?.value;
      const firstString = Object.getOwnPropertyDescriptor(
        item,
        String(path),
      )?.value;

      return {
        ...item,
        transfer_id: index,
        transfer_name: firstString,
        // eslint-disable-next-line no-nested-ternary
        transfer_icon: iconListItem ? (
          <div>{rendericonListItem ? rendericonListItem() : `sem icone`}</div>
        ) : (
          <ArrowRight color="primary" />
        ),
      };
    }) as ListProps[];
  });
  const [rightList, setRightList] = useState(() => {
    if (!selectedList?.length) return [];

    return selectedList.map((item, index) => {
      if (!item) {
        return {};
      }

      const subString = Object.getOwnPropertyDescriptor(
        item,
        String(subPath),
      )?.value;
      const firstString = Object.getOwnPropertyDescriptor(
        item,
        String(path),
      )?.value;

      return {
        ...item,
        transfer_id: `${index}-selected`,
        transfer_name: firstString,
        transfer_icon:
          subString === 'M' ? (
            <PhoneAndroidRoundedIcon />
          ) : (
            <DesktopMacRoundedIcon />
          ),
      };
    }) as ListProps[];
  });
  const [rightListtwo, setRightListtwo] = useState(() => {
    if (!selectedList?.length) return [];

    return selectedList.map((item, index) => {
      if (!item) {
        return {};
      }

      const subString = Object.getOwnPropertyDescriptor(
        item,
        String(subPath),
      )?.value;
      const firstString = Object.getOwnPropertyDescriptor(
        item,
        String(path),
      )?.value;

      return {
        ...item,
        transfer_id: `${index}-selected`,
        transfer_name: firstString,
        transfer_icon:
          subString === 'M' ? (
            <PhoneAndroidRoundedIcon />
          ) : (
            <DesktopMacRoundedIcon />
          ),
      };
    }) as ListProps[];
  });

  useEffect(() => {
    if (setSelectedList) {
      setSelectedList(rightList);
    }
    if (setSelectedListTwo) {
      setSelectedListTwo(rightListtwo);
    }
  }, [setSelectedListTwo, rightListtwo, rightList, setSelectedList]);

  useEffect(() => {
    if (setInitialList) {
      setInitialList(leftList);
    }
  }, [setInitialList, leftList]);

  const moveToLeftList = useCallback(
    id => {
      const itemList = rightList.find(item => item.transfer_id === id);

      if (!itemList) {
        return;
      }

      const newRightList = rightList.filter(item => item.transfer_id !== id);

      setRightList([...newRightList]);

      setLeftList([...leftList, itemList]);
    },
    [leftList, rightList],
  );

  const moveToRightList = useCallback(
    id => {
      const itemList = leftList.find(item => item.transfer_id === id);

      if (!itemList) {
        return;
      }

      const newLeftList = leftList.filter(item => item.transfer_id !== id);

      setLeftList([...newLeftList]);

      setRightList([...rightList, itemList]);
    },
    [leftList, rightList, setRightList, setLeftList],
  );
  const moveToLeftListtwo = useCallback(
    id => {
      const itemList = rightListtwo.find(item => item.transfer_id === id);

      if (!itemList) {
        return;
      }

      const newRightListtwo = rightListtwo.filter(
        item => item.transfer_id !== id,
      );

      setRightListtwo([...newRightListtwo]);

      setLeftList([...leftList, itemList]);
    },
    [leftList, rightListtwo],
  );
  const moveToRightListtwo = useCallback(
    id => {
      const itemList = leftList.find(item => item.transfer_id === id);

      if (!itemList) {
        return;
      }

      const newLeftList = leftList.filter(item => item.transfer_id !== id);

      setLeftList([...newLeftList]);

      setRightListtwo([...rightListtwo, itemList]);
    },
    [leftList, rightListtwo],
  );

  const moveAllToRightList = useCallback(() => {
    setRightList([...rightList, ...leftList]);
    setLeftList([]);
  }, [setRightList, setLeftList, rightList, leftList]);

  const moveAllToLeftList = useCallback(() => {
    setLeftList([...rightList, ...leftList]);
    setRightList([]);
  }, [setLeftList, setRightList, rightList, leftList]);

  return (
    <Container height={height}>
      <div className="block" style={{ height: `${heightLeftList || ''}px` }}>
        <h1>{title}</h1>
        <div className="list list-noselected L1">
          {leftList &&
            leftList.map(item => (
              <ButtonBase className="itemList">
                <TranferListItem
                  key={item.transfer_id}
                  onClick={() => setCurrentItem(item.transfer_id)}
                  selected={currentItem === item.transfer_id}
                >
                  <div className="iconItem">
                    {item.transfer_icon}
                    <p>{item.transfer_name}</p>
                  </div>
                  <div className="sectioButtons">
                    <IconButton
                      onClick={() => moveToRightList(item.transfer_id)}
                      className="icon"
                    >
                      {twoSelectable ? <CallMadeIcon /> : <AddRoundedIcon />}
                    </IconButton>
                    {twoSelectable && (
                      <IconButton
                        style={{ transform: 'scaleY(-1)' }}
                        onClick={() => moveToRightListtwo(item.transfer_id)}
                        className="icon"
                      >
                        <CallMadeIcon />
                      </IconButton>
                    )}
                  </div>
                </TranferListItem>
              </ButtonBase>
            ))}
        </div>
      </div>

      {!twoSelectable && (
        <div className="buttons">
          <IconButton onClick={() => moveToRightList(currentItem)}>
            <ArrowForwardRoundedIcon />
          </IconButton>
          {!twoSelectable && (
            <IconButton onClick={moveAllToRightList}>
              <DoubleArrowRoundedIcon />
            </IconButton>
          )}

          <IconButton onClick={() => moveToLeftList(currentItem)}>
            <ArrowBackRoundedIcon />
          </IconButton>
          {!twoSelectable && (
            <IconButton onClick={moveAllToLeftList}>
              <DoubleArrowRoundedIcon className="rounded" />
            </IconButton>
          )}
        </div>
      )}
      <div className="block">
        <div className="flexColumn">
          <div className="block">
            <h1>{`${title} Selecionados`}</h1>
            <div className="flexRow">
              <div className="buttons">
                {twoSelectable && (
                  <>
                    <IconButton onClick={() => moveToRightList(currentItem)}>
                      <ArrowForwardRoundedIcon />
                    </IconButton>
                    <IconButton onClick={() => moveToLeftList(currentItem)}>
                      <ArrowBackRoundedIcon />
                    </IconButton>
                    {/* <IconButton onClick={moveAllToLeftList}>
                <DoubleArrowRoundedIcon className="rounded" />
              </IconButton> */}
                  </>
                )}
              </div>
              <div className="list list-selected">
                {rightList &&
                  rightList.map(item => (
                    <ButtonBase className="itemList">
                      <TranferListItem
                        key={item.transfer_id}
                        onClick={() => setCurrentItem(item.transfer_id)}
                        selected={currentItem === item.transfer_id}
                        className="rightList"
                      >
                        <div className="iconItem">
                          {item.transfer_icon}
                          <p>{item.transfer_name}</p>
                        </div>
                        <IconButton
                          onClick={() => moveToLeftList(item.transfer_id)}
                          className="icon"
                        >
                          <RemoveRoundedIcon />
                        </IconButton>
                      </TranferListItem>
                    </ButtonBase>
                  ))}
              </div>
            </div>
          </div>
          {twoSelectable ? (
            <div className="block">
              <h1>{`${titleSecondList}`}</h1>
              <div className="flexRow">
                <div className="buttons">
                  {twoSelectable && (
                    <>
                      <IconButton
                        onClick={() => moveToRightListtwo(currentItem)}
                      >
                        <ArrowForwardRoundedIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => moveToLeftListtwo(currentItem)}
                      >
                        <ArrowBackRoundedIcon />
                      </IconButton>
                      {/* <IconButton onClick={moveAllToLeftList}>
                <DoubleArrowRoundedIcon className="rounded" />
              </IconButton> */}
                    </>
                  )}
                </div>
                <div className="list list-selected">
                  {rightListtwo &&
                    rightListtwo.map(item => (
                      <ButtonBase className="itemList">
                        <TranferListItem
                          key={item.transfer_id}
                          onClick={() => setCurrentItem(item.transfer_id)}
                          selected={currentItem === item.transfer_id}
                          className="rightList"
                        >
                          <div className="iconItem">
                            {item.transfer_icon}
                            <p>{item.transfer_name}</p>
                          </div>
                          <IconButton
                            onClick={() => moveToLeftListtwo(item.transfer_id)}
                            className="icon"
                          >
                            <RemoveRoundedIcon />
                          </IconButton>
                        </TranferListItem>
                      </ButtonBase>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Container>
  );
};

export default TransferList;
