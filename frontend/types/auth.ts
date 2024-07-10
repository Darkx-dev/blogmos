export interface User {
    userId?: string;
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