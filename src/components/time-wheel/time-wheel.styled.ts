import styled from 'styled-components';
import { WIDTH } from '../../common/data/width';

interface YearProps {
  $isBegining: boolean;
}

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

Block.Years = styled.div`
  display: flex;
  padding-bottom: 60px;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;

  @media (min-width: ${WIDTH.desktop}px) {
    position: absolute;
    padding-bottom: 0;
    gap: 80px;
    width: auto;
    max-width: none;
  }
`;

Block.Year = styled.p<YearProps>`
  font-size: 56px;
  font-weight: 700;
  color: ${({ $isBegining, theme }) => $isBegining ? theme.color.basicBlue : theme.color.specialPink};

  @media (min-width: ${WIDTH.desktop}px) {
    font-size: 200px;
    color: ${({ $isBegining, theme }) => $isBegining ? theme.color.specialBlue : theme.color.specialPink};
  }
`;

export default Block;