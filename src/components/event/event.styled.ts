import styled from "styled-components";
import { WIDTH } from "../../common/data/width";

const Block: any = styled.div`
  max-width: 165px;

  @media (min-width: ${WIDTH.desktop}px) {
    max-width: 320px;
  }
`;

Block.PrevEvent = styled.div`
  position: absolute;
`;

Block.CurrentEvent = styled.div`
`;

Block.Year = styled.p`
  font-family: 'Bebas Neue', cursive;
  font-size: 16px;
  color: ${({ theme }) => theme.color.basicBlue};
  margin-bottom: 15px;

  @media (min-width: ${WIDTH.desktop}px) {
    font-size: 25px;
  }
`;

Block.Description = styled.p`
  font-size: 14px;
  line-height: 1.45;

  @media (min-width: ${WIDTH.desktop}px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;

export default Block;