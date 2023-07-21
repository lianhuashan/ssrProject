import React, { useState } from 'react';
import { styled } from 'styled-components';

const SearchInput = styled.input`
  width: 650px;
  position: relative;
  :before {
    position: absolute;
    width: 12px;
    height: 12px;
    background: url('../../assets/sousuo.png');
  }
  :after {
    position: absolute;
    width: 12px;
    height: 12px;
    background: url('../../assets/gengduo_1.png');
    z-index: 1;
  }
`;

const Wrapper = styled.div``;
export default () => {
  const [searching, setSearching] = useState<boolean>(false);
  const handleClick = () => {
    setSearching(!searching);
  };
  return (
    <Wrapper style={{ width: searching ? '100%' : 'auto', height: searching ? '100%' : 'auto' }}>
      <SearchInput onClick={handleClick} />
    </Wrapper>
  );
};
