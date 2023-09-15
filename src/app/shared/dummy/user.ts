import { Config, adjectives, colors, names, uniqueNamesGenerator } from "unique-names-generator";
import { IUser } from "../models/response";
import { randomNumber } from "./utility";

const customConfig: Config = {
  dictionaries: [names, names],
  separator: ' ',
  length: 2,
};

export const USER: IUser = {
  id: 1,
  name: "Agung Priyatno",
  username: "agungpriyatno",
  email: "agungpriyatno@gmail.com",
  image: "https://fastly.picsum.photos/id/7/500/500.jpg?hmac=bu1vPr_9yiacdK7C_nwiWrFVju3j0pJ10lCaa7Fr5OY",
}


export function usersDummy(length: number): IUser[] {
  var data: IUser[] = []
  for (let index = 0; index < length; index++) {
    data.push({
      id: index,
      name: uniqueNamesGenerator(customConfig),
      username: "",
      email: "",
      image: "https://picsum.photos/200?random="+ index
    })
  }
  return data
}

export function randomUser(id: number = 0): IUser {
  return {
    id: id,
    name: uniqueNamesGenerator(customConfig),
    username: "",
    email: "",
    image: "https://picsum.photos/200?random="+ id + randomNumber(10),
  }
}


