import styled from 'styled-components';
import { WIDTH } from '../../common/data/width';

const Block: any = styled.div`
  margin-top: 20px;
  position: relative;

  @media (min-width: ${WIDTH.desktop}px) {
    margin: 56px 0 100px;
  }
`;

export default Block;