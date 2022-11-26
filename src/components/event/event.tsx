import Block from "./event.styled";

type EventProps = {
  year: number;
  description: string;
}

function Event({year, description}: EventProps) {
  return (
    <Block>
      <Block.Year>{year}</Block.Year>
      <Block.Description>{description}</Block.Description>
    </Block>
  )
}

export default Event;