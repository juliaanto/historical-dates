import styled from "styled-components";

const Block: any = styled.div`
`;

Block.Year = styled.p`
  font-family: 'Bebas Neue', cursive;
  font-size: 25px;
  color: ${({ theme }) => theme.color.basicBlue};
  margin-bottom: 15px;
`;

Block.Description = styled.p`
  font-size: 20px;
`;

export default Block;