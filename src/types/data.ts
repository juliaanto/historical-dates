type Event = {
  year: number,
  description: string,
}

type Events = {
  topic?: string,
  events: Event[],
}

export type Data = Events[];

