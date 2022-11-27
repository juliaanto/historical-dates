import styled from "styled-components";
import { WIDTH } from "../../common/data/width";

const Block: any = styled.div`
  max-width: 200px;

  @media (min-width: ${WIDTH.desktop}px) {
    max-width: none;
  }
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

  @media (min-width: ${WIDTH.desktop}px) {
    font-size: 20px;
  }
`;

export default Block;