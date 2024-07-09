export interface User {
    _id?: string;
    token: string;
    username: string;
    image?: string;
    email?: string
}

export interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => Promise<void>;
}  