import styled, { css } from "styled-components";

interface SegmentProps {
  $angle: number;
}

interface PointProps {
  $isCurrent: boolean;
}

const Block: any = styled.div<SegmentProps>`
  position: absolute;
  transform-origin: center 265px;
  transform: ${({ $angle }) => `rotate(${$angle}deg)`};
`;

Block.Point = styled.div<PointProps>`
  border-radius: 50%;
  cursor: pointer;
  width: 56px;
  height: 56px;

  ${({ $isCurrent }) =>
    $isCurrent ?
    css`
      margin-top: -44%;
      border: 1px solid rgba(${({ theme }) => theme.color.basicDarkRGB}, .2);
      background-color: ${({ theme }) => theme.color.basicLight};
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    `:
    css`
      margin-top: -50%;
      outline: 3px solid ${({ theme }) => theme.color.basicDark};
      outline-offset: -28px;

      &:hover {
        outline: none;
        margin-top: -44%;
        border: 1px solid rgba(${({ theme }) => theme.color.basicDarkRGB}, .2);
        background-color: ${({ theme }) => theme.color.basicLight};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
    `}
`;

Block.Index = styled.p`
  font-size: 20px;
`;

Block.Topic = styled.p`
  position: absolute;
  margin-left: 75px;
  margin-bottom: 4px;
  font-weight: 700;
  font-size: 20px;
  left: 0;
`;

export default Block;