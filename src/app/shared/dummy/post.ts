import { IPost, IPostImage } from "../models/response";
import { lorem, randomNumber, subtractDays } from "./utility";
import { USER, randomUser } from "./user";
import { loremIpsum } from "lorem-ipsum";

export function postsDummy(length: number): IPost[] {
  var data: IPost[] = []
  for (let i = 0; i < length; i++) {
    data.push({
      id: i,
      user: randomUser(),
      content: lorem.generateParagraphs(2),
      liked: false,
      images: randomImages(i),
      like: randomNumber(100),
      comment: randomNumber(5),
      createdAt: subtractDays(i).toISOString(),
      updatedAt: subtractDays(i).toISOString(),
    })
  }
  return data
}

export function postsProfileDummy(length: number): IPost[] {
  var data: IPost[] = []
  for (let i = 0; i < length; i++) {
    data.push({
      id: i,
      user: USER,
      content: lorem.generateParagraphs(2),
      liked: false,
      images: randomImages(i),
      like: randomNumber(100),
      comment: randomNumber(5),
      createdAt: subtractDays(i).toISOString(),
      updatedAt: subtractDays(i).toISOString(),
    })
  }
  return data
}

function randomImages(index: number): IPostImage[] {
  var data: IPostImage[] = []
  for (let i = 0; i < randomNumber(5); i++) {
    data.push({
      id: i,
      name: "",
      url: "https://picsum.photos/600?random=" + index + i
    })
  }
  return data
}
