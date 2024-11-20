export interface LoginResponse {
    message: string;
    user: User;
    token: string;
}

export interface User {
    id: string;
    email: string;
    fullName: string;
}