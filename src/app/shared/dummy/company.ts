import { Config, adjectives, countries, uniqueNamesGenerator } from "unique-names-generator";
import { ICompany } from "../models/response";

const customConfig: Config = {
  dictionaries: [adjectives, countries],
  separator: ' ',
  length: 2,
};

export function companyDummy(length: number): ICompany[] {
  var data: ICompany[] = []
  for (let index = 0; index < length; index++) {
    data.push({
      id: index.toString(),
      name: uniqueNamesGenerator(customConfig),
      username: "",
      email: "",
      image: "https://picsum.photos/200?random=1"+ index
    })
  }
  return data
}



