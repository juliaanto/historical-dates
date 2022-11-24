type Event = {
  year: number,
  description: string,
}

export type Events = {
  topic?: string,
  events: Event[],
}

export type Data = Events[];

