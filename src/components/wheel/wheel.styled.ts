import styled from 'styled-components';

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

export default Block;