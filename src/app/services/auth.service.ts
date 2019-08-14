import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    userModel: any = {
        username: 'pabcubus',
        email: 'pabcubus@gmail.com',
        name: 'Pablo Bassil',
        age: '34',
        token: '1234'
    }

    user: any;

    constructor() {}

    public login(user: string, password: string) : Object {
        if (user === 'pabcubus' && password === '123') {
            localStorage.setItem('user', JSON.stringify({
                name: 'Pablo Bassil',
                age: '34',
                token: '1234'
            }));
            this.user = this.userModel;
            return this.user;
        } else {
            localStorage.removeItem('user');
            return null;
        }
    }

    public getUser() : Object {
        return this.user;
    }

    public getUserByToken() : Object {
        const user = localStorage.getItem('user');
        if (user) {
            this.user = JSON.parse(user);
            return this.user;
        } else {
            localStorage.removeItem('user');
            return null;
        }
    }

    public logout() : Object {
        localStorage.removeItem('user');
        return null;
    }
}