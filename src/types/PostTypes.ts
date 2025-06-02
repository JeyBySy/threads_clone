export type PostType = {
  name: string;
  time: string;
  image?:boolean //Boolean for now
  description: string;
  location?: string;
  like_count: number;
  comment_count: number;
  repost_count: number;
  share_count:number
  repost?:boolean
};
