export interface Post {
  _id?: string,
  title: string,
  body: string,
  likes?: number,
  dislikes?: number,
  date?:  Date,
  comments?: string[],
}
