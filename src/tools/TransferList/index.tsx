import React, { useState, useCallback, useEffect } from 'react';

// Material UI
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { ButtonBase, IconButton } from '@material-ui/core';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
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
  setInitialList,
  height,
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
        transfer_icon:
          subString === 'M' ? (
            <PhoneAndroidRoundedIcon color="primary" />
          ) : (
            <DesktopMacRoundedIcon color="primary" />
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

  useEffect(() => {
    if (setSelectedList) {
      setSelectedList(rightList);
    }
  }, [setSelectedList, rightList]);

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
      <div className="block">
        <h1>{title}</h1>
        <div className="list list-noselected">
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

                  <IconButton
                    onClick={() => moveToRightList(item.transfer_id)}
                    className="icon"
                  >
                    <AddRoundedIcon />
                  </IconButton>
                </TranferListItem>
              </ButtonBase>
            ))}
        </div>
      </div>
      <div className="buttons">
        <IconButton onClick={() => moveToRightList(currentItem)}>
          <ArrowForwardRoundedIcon />
        </IconButton>
        <IconButton onClick={moveAllToRightList}>
          <DoubleArrowRoundedIcon />
        </IconButton>
        <IconButton onClick={() => moveToLeftList(currentItem)}>
          <ArrowBackRoundedIcon />
        </IconButton>
        <IconButton onClick={moveAllToLeftList}>
          <DoubleArrowRoundedIcon className="rounded" />
        </IconButton>
      </div>
      <div className="block">
        <h1>{`${title} Selecionados`}</h1>
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
    </Container>
  );
};

export default TransferList;
