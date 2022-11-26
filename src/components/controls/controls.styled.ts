import styled from 'styled-components';

interface ButtonProps {
  $isNext: boolean;
}

const Block: any = styled.div`
  margin-top: -48px;
  margin-left: 80px;
  width: 120px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

Block.Index = styled.div`
  font-size: 14px;
  width: 100%;
`;

Block.Button = styled.button<ButtonProps>`
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  width: 50px;
  height: 50px;
  background-color: transparent;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 8.84px;
    height: 8.84px;
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
`;

export default Block;