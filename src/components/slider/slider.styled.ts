import styled from 'styled-components';
import { WIDTH } from '../../common/data/width';

const Block: any = styled.div`
  position: relative;
  flex-grow: 1;

  @media (min-width: ${WIDTH.desktop}px) {
    margin: 56px 0 100px;
  }
`;

Block.Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.color.basicGrey};
  margin-bottom: 20px;
`;

export default Block;