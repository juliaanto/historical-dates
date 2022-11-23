import styled, { css } from 'styled-components';

interface ButtonProps {
  $isNext: boolean;
  $isDisabled: boolean;
}

const Block: any = styled.div`
`;

Block.Button = styled.button<ButtonProps>`
  margin: 20px;
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

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.5;
    `}
`;

export default Block;