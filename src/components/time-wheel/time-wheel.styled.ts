import styled from 'styled-components';
import { WIDTH } from '../../common/data/width';

const Block: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: ${({ theme }) => theme.color.basicGrey};
    left: 0;
    right: 0;
    top: 100%;
  }

  @media (min-width: ${WIDTH.desktop}px) {
    &::after {
      top: 50%;
      background-color: rgba(${({ theme }) => theme.color.basicDarkRGB}, .1);
    }
  }
`;

Block.Basis = styled.div`
  width: 530px;
  height: 530px;
  border: 1px solid rgba(${({ theme }) => theme.color.basicDarkRGB}, .2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export default Block;