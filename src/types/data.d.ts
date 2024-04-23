export interface ServiceItem {
  id: number;
  imgSrc: string;
  title: string;
  desc: string;
}

export interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId?: number;
  id: 1;
  name: string;
  email: string;
  body: string;
}
