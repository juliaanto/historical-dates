import styled from 'styled-components';
import { WIDTH } from '../../common/data/width';

interface YearProps {
  $isBegining: boolean;
}

const Block: any = styled.div`
  display: flex;
  padding-bottom: 60px;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;

  @media (min-width: ${WIDTH.desktop}px) {
    position: absolute;
    padding-bottom: 24px;
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