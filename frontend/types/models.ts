export interface postTypes {
  _id: string;
  title?: string;
  description?: string;
  coverImage?:string;
  content?: string;
  tags?: string[];
  author?: {
    _id?: string;
    username?: string;
  };
  createdAt?: Date;
}

