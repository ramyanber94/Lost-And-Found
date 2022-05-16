import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    constructor(private http: HttpClient,) { }

    register(user: any) {
        return this.http.post(`/api/register/`, user);
    }

    login(user: any) {
        return this.http.post(`/api/login/`, user);
    }

    userLost(lostItem: any) {
        return this.http.post(`/api/lost/`, lostItem);
    }

    userFound(foundItem: any) {
        return this.http.post(`/api/found/`, foundItem);
    }

}