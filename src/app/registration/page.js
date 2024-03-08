"use client"

import React,
{
    useEffect,
    useState,
    useRef
} from 'react';
import { observer } from 'mobx-react';
import CatStore from "../../../stores/catStore";


const CatComponent = observer(() => {
    const handleSetName = () => {
        CatStore.setName("meow");
    };

    return (
        <div>
            <h2>Cat Name: {CatStore.name}</h2>
            <button onClick={handleSetName}>Set Name to "meow"</button>
        </div>
    );
});


const Registration=observer(()=>{

    //console.log( CatStore.name )
    return (
        <>
            <CatComponent/>
            <div>Cat name is {CatStore.name}</div>
        </>
    )
});

export default Registration;