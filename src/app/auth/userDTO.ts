export class UserDTO{
    Username: string
    UserPassword: string
    constructor(Name: string,Password: string)
    {
        this.Username = Name
        this.UserPassword = Password
    }
}