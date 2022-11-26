import { Data } from "../../types/data";

const sortEvents = (data: Data, index: number) => data[index].events.sort((itemA, itemB) => itemA.year - itemB.year)

export const getBeginningYear = (data: Data, index: number) => sortEvents(data, index)[0].year;

export const getEndingYear = (data: Data, index: number) => sortEvents(data, index)[data[index].events.length - 1].year;

export const sortTopics = (data: Data) => data.sort((itemA, itemB) => sortEvents(data, data.indexOf(itemA))[0].year - sortEvents(data, data.indexOf(itemB))[0].year)