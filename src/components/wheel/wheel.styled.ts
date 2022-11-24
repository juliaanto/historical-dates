import styled, { css } from 'styled-components';

interface SegmentProps {
  $angle: number;
}

interface PointProps {
  $angle: number;
  $isCurrent: boolean;
}

const Block: any = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 1440px;
    background-color: rgba(${({ theme }) => theme.color.basicDarkRGB}, .1);
    left: 0;
    top: 50%;
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

Block.Segment = styled.div<SegmentProps>`
  position: absolute;
  transform-origin: center 265px;
  transform: ${({ $angle }) => `rotate(${$angle}deg)`};
`;

Block.Point = styled.div<PointProps>`
  border-radius: 50%;
  transform: ${({ $angle }) => `rotate(-${$angle}deg)`};
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