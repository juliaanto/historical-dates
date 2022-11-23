import styled from 'styled-components';

const Block: any = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 167px;
  padding-left: 80px;

  &::before {
    content: "";
    position: absolute;
    width: 1440px;
    height: 100vh;
    left: 50vw;
    top: 0vh;
    transform: translate(-50%);
    border-left: 1px solid ${({ theme }) => theme.color.basicDark};
    border-right: 1px solid ${({ theme }) => theme.color.basicDark};
    opacity: 10%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 50vw;
    height: 100vh;
    left: 50vw;
    top: 0vh;
    border-left: 1px solid ${({ theme }) => theme.color.basicDark};
    opacity: 10%;
  }
`;

Block.Heading = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  width: min-content;
  padding-left: 76px;
  border-left-width: 5px;
  border-left-style: solid;
  border-image: linear-gradient(to bottom, transparent 10%, #3877EE 10%, #EF5DA8 95%, transparent 95%) 1;
  margin-left: -80px;
`;

export default Block;