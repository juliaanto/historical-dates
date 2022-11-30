import styled from 'styled-components';
import { WIDTH } from '../../common/data/width';

interface ButtonProps {
  $isNext: boolean;
}

const Block: any = styled.div`
  width: 58px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;
  margin-top: -17px;
  z-index: 1;

  @media (min-width: ${WIDTH.desktop}px) {
    width: 120px;
    row-gap: 20px;
    margin-top: -48px;
    margin-left: 80px;
  }
`;

Block.Index = styled.div`
  font-size: 14px;
  width: 100%;
`;

Block.Button = styled.button<ButtonProps>`
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  width: 25px;
  height: 25px;
  background-color: transparent;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 4.42px;
    height: 4.42px;
    border-top: 2px solid ${({ theme }) => theme.color.basicDark};
    border-right: 2px solid ${({ theme }) => theme.color.basicDark};
    transform: ${({ $isNext }) => $isNext ? 'translate(-65%, -50%) rotate(45deg)' : 'translate(-25%, -50%) rotate(225deg)'};
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.color.basicWhite};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: ${WIDTH.desktop}px) {
    width: 50px;
    height: 50px;

    &::before {
      width: 8.84px;
      height: 8.84px;
    }
  }
`;

export default Block;