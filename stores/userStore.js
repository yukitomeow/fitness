import { makeObservable, observable, action, } from "mobx"
import { makePersistable, isHydrated } from 'mobx-persist-store'


//data store can be share to all react app. state manage


class UserStore {
    id=0
    username = "" //default value
    email=""
    first_name=""
    last_name=""
    authenticated=false
    constructor() {


        
        makeObservable(this, {
            id:observable,
            username: observable,
            email: observable,
            first_name: observable,
            last_name: observable,
            authenticated: observable,
            authenticate: action,
            logout:action
        });
    }
    async initPersistence() {
        if (typeof window !== 'undefined') {
            await makePersistable(this, {
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
    authenticate(user) { //action function
        console.log("user.username is",user.username)
        this.id=user.id;
        this.username = user.username;
        this.email = user.email;
        this.first_name = user.first_name;
        this.last_name = user.last_name;  
        this.authenticated = true;
    }

    logout() {
        // Clear user details
        this.id = 0;
        this.username = "";
        this.email = "";
        this.first_name = "";
        this.last_name = "";
        this.authenticated = false;

        // Clear storage (e.g., access token)
        if (typeof window !== 'undefined') {
            localStorage.removeItem('accessToken');
        }

    }

    
}

export default new UserStore;



