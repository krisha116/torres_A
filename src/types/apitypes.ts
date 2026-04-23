export interface LoginCredentials {
    username?: string;
    email?: string;
    password: string;
}

export type LoginResponse = LoginSuccessResponse | LoginErrorResponse;

export interface LoginSuccessResponse {
    token: string;
    user: {
        username: string;
        email: string;
        roles: string[];
        verified: boolean;
    };
}

export interface LoginErrorResponse {
    message: string;
    errors?: {
        login?: string[];
        [key: string]: string[] | undefined;
    };
}