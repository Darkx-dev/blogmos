export interface User {
  userId: string;
  token: string;
  bio?: string;
  name?: string;
  username: string;
  image?: string;
  email: string;
  profilePicture?: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: (userData: User) => void;
  login: (userData: User) => void;
  logout: () => Promise<void>;
}
