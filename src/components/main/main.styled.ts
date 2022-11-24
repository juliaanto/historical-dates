import styled from 'styled-components';

const Block: any = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 167px;

  &::after {
    content: "";
    position: fixed;
    background-color: rgba(${({ theme }) => theme.color.basicDarkRGB}, .1);
    width: 1px;
    height: 100vh;
    left: 50vw;
    top: 0vh;
    box-shadow: 720px 0 rgba(${({ theme }) => theme.color.basicDarkRGB}, .1), -720px 0 rgba(${({ theme }) => theme.color.basicDarkRGB}, .1);
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
  margin-bottom: -87px;
`;

export default Block;