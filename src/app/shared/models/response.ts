export interface IUser {
  id: number,
  name: string,
  username: string,
  email?: string,
  image: string,
}

export interface ICompany {
  id: number,
  name: string,
  username: string,
  email: string,
  image: string,
}

export interface IPost {
  id: number,
  content: string,
  images: IPostImage[],
  user: IUser,
  like: number,
  liked?: boolean,
  comment: number,
  createdAt: string,
  updatedAt: string,
}

export interface IPostImage {
  id: number,
  name: string,
  url: string,
  type?: string,
}

export interface IPostComment {
  id: number,
  content: string,
  user: IUser,
  reply: number
}


