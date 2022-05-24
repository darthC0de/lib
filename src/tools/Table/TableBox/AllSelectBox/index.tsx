import React, { useCallback, useState } from 'react';
import { BiCheck } from 'react-icons/bi';

import { Container } from './styles';

interface TableSelectBoxProps {
  disabled?: boolean;
  select?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | void
  ) => void;
}

const AllTableSelectBox: React.FC<TableSelectBoxProps> = ({
  disabled = false,
  select,
  onClick,
}) => {
  const [selected, setSelected] = useState<boolean>(
    select !== undefined ? select : false
  );

  React.useEffect(() => {
    // @ts-ignore
    setSelected(select);
  }, [select]);

  const handleSelected = useCallback(
    event => {
      if (disabled) {
        return;
      }
      setSelected(oldState => !oldState);

      if (onClick) onClick(event);
    },
    [onClick, disabled]
  );

  return (
    <Container
      className="selectBoxTable"
      onClick={handleSelected}
      selected={selected}
    >
      {selected && <BiCheck size={16} color="fff" />}
    </Container>
  );
};

export default AllTableSelectBox;
