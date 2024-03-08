import { makeObservable, observable, action } from "mobx"


//data store can be share to all react app. state manage

class CatStore{
    name = "yukimi" //default value
    constructor(){
        makeObservable(this, {// this=> everything in catStore
            name : observable,
            setName: action,// value 
        });
    }

    setName(newName){ //action function
        this.name= newName;
    }
}

export default new CatStore;