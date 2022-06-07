import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserDTO } from "./userDTO";

@Injectable()
export class AuthService{
    url = 'https://localhost:5082/api/Auth/Login'
    token: any;
    constructor(private http: HttpClient){}

    login(username: string, password: string): string | null
    {
        let DTO = new UserDTO(username,password)
        this.http.post(this.url, DTO,{responseType: 'text'}).subscribe((resp: any) =>
        {
            localStorage.setItem('auth_token', resp); 
        });
        return localStorage.getItem('auth_token');
    }
}