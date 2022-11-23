import styled from 'styled-components';

const Block: any = styled.div`
  margin-top: 167px;
  margin-left: 100px;
`;

Block.Header = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  width: min-content;
  padding-left: 76px;
  border-left-width: 5px;
  border-left-style: solid;
  border-image: linear-gradient(to bottom, transparent 10%, #3877EE 10%, #EF5DA8 95%, transparent 95%) 1;
`;

export default Block;