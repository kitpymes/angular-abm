import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cache } from './cache';
import { User, Data } from '../models/user.model';
import { UserList } from '../models/list.model';

@Injectable()
export class HttpUserService {
    private cache$: Observable<UserList>;
    private corsUrl = 'https://cors-anywhere.herokuapp.com/';
    private baseUrl = 'https://reqres.in/';
    private apiUrl = 'api/users';
    private url = this.baseUrl + this.apiUrl;

    constructor(private httpClient: HttpClient) { }

    @Cache({
        ttl: 2500
    })
    getByPaged(page: number, since: number = 1){
        return this.httpClient.get<UserList>(`${this.url}?page=${page}`);
    }

    getById(userId: number) {
        return this.httpClient.get<User>(`${this.url}/${userId}`);
    }

    create(user: Data) {
        return this.httpClient.post(`${this.url}`, user, { observe: 'response' });
    }

    update(user: Data) {
        return this.httpClient.put(`${this.url}/${user.id}`, user, { observe: 'response' });
    }

    delete(userId: number) {
        return this.httpClient.delete(`${this.url}/${userId}`, { observe: 'response' });
    }
}
