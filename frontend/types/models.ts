export interface postTypes {
  _id: string;
  title?: string;
  description?: string;
  content?: string;
  tags?: string[];
  author?: {
    _id?: string;
    username?: string;
  };
  createdAt?: Date;
}

