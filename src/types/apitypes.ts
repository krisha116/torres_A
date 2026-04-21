export interface LoginCredentials {
    username?: string;
    email?: string;
    password: string;
}

export interface LoginResponse{
    //successful login response
    token: string
    user: {
        username: string
        email: string
        roles: string[],
        verified: boolean
    }

    //error response
     "message": string
     "errors":{
        "login": string[]
     }

}