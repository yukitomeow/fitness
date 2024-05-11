"use client"

import { makeObservable, observable, action, } from "mobx"
import { makePersistable, isHydrated } from 'mobx-persist-store'


//data store can be share to all react app. state manage

class UserStore {
    id = 0;
    username = '';
    email = '';
    first_name = ""
    last_name = ""
    authenticated = false;

    constructor() {
        makeObservable(this, {
            id: observable,
            username: observable,
            email: observable,
            first_name: observable,
            last_name: observable,
            authenticated: observable,
            authenticate: action,
            logout: action,
            update: action,
            reset: action
        });
        if (typeof window !== 'undefined') {
        makePersistable(this, {
            name: 'UserStore',
            properties: [
                'id',
                'username',
                'email',
                'first_name',
                'last_name',
                'authenticated',
            ],
            storage: window.localStorage,
            debugMode: true,
        });
        }
    }
    authenticate = (user) => {
        console.log("user.username is", user.username)
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.authenticated = true;
    }
    logout = () => {
        this.reset();
        localStorage.removeItem('accessToken');
    }
    update = (username, email) => {
        this.username = username;
        this.email = email;
    }
    reset = () => {
        this.id = 0;
        this.username = 'Unnamed';
        this.email = '';
        this.first_name="";
        this.last_name=""
        this.authenticated = false;
    }
    get isHydrated() {
        return isHydrated(this);
    }
}

export default new UserStore;






