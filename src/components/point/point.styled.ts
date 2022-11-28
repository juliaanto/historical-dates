import styled, { css } from "styled-components";

interface SegmentProps {
  $angle: number;
}

interface PointWrapperProps {
  $isActive: boolean;
}

interface TopicProps {
  $isPrev: boolean;
  $isCurrent: boolean;
}

const Block: any = styled.div<SegmentProps>`
  position: absolute;
  transform-origin: center 265px;
  transform: ${({ $angle }) => `rotate(${$angle}deg)`};
`;

Block.PointWrapper = styled.div<PointWrapperProps>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  position: relative;

  ${({ $isActive }) =>
    $isActive ?
    css`
      & div {
        border: 1px solid rgba(${({ theme }) => theme.color.basicDarkRGB}, .2);
        background-color: ${({ theme }) => theme.color.basicLight};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
    `:
    css`
      & div {
        width: 6px;
        height: 6px;
        background-color: ${({ theme }) => theme.color.basicDark};
        overflow: hidden;
        transition: width 0.5s, height 0.5s, background-color 0.5s, overflow 10s;
      }

      &:hover div {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.color.basicLight};
        border: 1px solid rgba(${({ theme }) => theme.color.basicDarkRGB}, .2);
        transition: width 0.5s, height 0.5s, background-color 0.5s;
      }
    `}
`;

Block.Point = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

Block.Index = styled.p`
  font-size: 20px;
`;

Block.Topic = styled.p<TopicProps>`
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  width: 250px;
  transform: translate(54px, -158px);
  display: ${({$isPrev, $isCurrent}) => $isPrev || $isCurrent ? 'block' : 'none'};
`;

export default Block;