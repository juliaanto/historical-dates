import Block from './main.styled';
import TimeWheel from '../time-wheel/time-wheel';

function Main() {
  return (
    <Block>
      <Block.Heading>Исторические даты</Block.Heading>
      <TimeWheel />
    </Block>
  )
}

export default Main;