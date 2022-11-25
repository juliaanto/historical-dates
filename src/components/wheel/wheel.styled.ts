import styled from 'styled-components';

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

Block.Years = styled.div`
  position: absolute;
  display: flex;
  gap: 80px;
`;

Block.Year = styled.p<YearProps>`
  font-size: 200px;
  font-weight: 700;
  color: ${({ $isBegining, theme }) => $isBegining ? theme.color.specialBlue : theme.color.specialPink};
`;

export default Block;