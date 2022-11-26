import styled from 'styled-components';
import { WIDTH } from '../../common/data/width';

const Block: any = styled.div`
  margin-top: 20px;

  @media (min-width: ${WIDTH.desktop}px) {
    margin-left: 80px;
    margin-top: 56px;
    margin-bottom: 100px;
  }
`;

export default Block;