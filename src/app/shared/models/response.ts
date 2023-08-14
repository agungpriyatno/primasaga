export interface IBase<T> {
  message: string,
  data: T
}

export interface IUser {
  id: string,
  name: string,
  username: string,
  email: string,
  image?: string,
}

export interface ICompany {
  id: string,
  name: string,
  username: string,
  email: string,
  image: string,
}

export interface IPost {
  id: string,
  content: string,
  images: IPostImage[],
  user: IUser,
  like: number,
  liked: boolean,
  comment: number,
  createdAt: string,
  updatedAt: string,
}

export interface IPostImage {
  id: string,
  name: string,
  url: string,
}

export interface IPostComment {
  id: string,
  content: string,
  user: IUser,
  reply: number
}


