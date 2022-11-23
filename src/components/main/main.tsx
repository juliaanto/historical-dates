import Block from './main.styled';
import TimeWheel from '../time-wheel/time-wheel';

function Main() {
  return (
    <Block>
      <Block.Header>Исторические даты</Block.Header>
      <TimeWheel />
    </Block>
  )
}

export default Main;