import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    user: any = {
        name: 'Pablo Bassil',
        age: '34',
        token: '1234'
    };

    constructor() {}

    public getUser(user: string, password: string) : Object {
        if (user === 'pabcubus' && password === '123') {
            localStorage.setItem('token', this.user.token);
            return this.user;
        } else {
            localStorage.removeItem('token');
            return null;
        }
    }

    public getUserByToken() : Object {
        const user = localStorage.getItem('token');
        if (user) {
            localStorage.setItem('token', this.user.token);
            return this.user;
        } else {
            localStorage.removeItem('token');
            return null;
        }
    }

    public logout() : Object {
        localStorage.removeItem('token');
        return null;
    }
}