export type TPhoto = {
  id: string;
  title: string;
  url: string;
  tags: string[];
  views: string;
  share: string;
  uploaded: string;
  author: TAuthor;
  likes: number;
};

export type TAuthor = {
  avatar: string;
  name: string;
  bio: string;
  followers: number;
};
