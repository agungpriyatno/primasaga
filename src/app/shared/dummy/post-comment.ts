import { IPostComment } from "../models/response";
import { USER, randomUser } from "./user";
import { lorem, randomNumber } from "./utility";

export function commentsDummy(length: number, postId: number): IPostComment[] {
  var list: IPostComment[] = []
  for (let i = 0; i < length; i++) {
   list.push({
    id: i.toString(),
    user: randomUser(postId),
    content: lorem.generateWords(randomNumber(30)),
    reply: randomNumber(5)
   })
  }
  return list
}
