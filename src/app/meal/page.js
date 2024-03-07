"use client"

import React,
{
    useEffect,
    useState,
    useRef
} from 'react';

import { GetAllMeals, GetMeal } from '../../../api';


export default function Meal(){


    const [loading, setLoading] = useState(true);
    const isMountedRef = useRef(false);

    useEffect(() => {
        if (!isMountedRef.current) {
            setLoading(true);
console.log("panda")
            GetAllMeals().then(response => {
                console.log(response);
                setLoading(false);
            }).catch(error => {
                console.log(error);
                setLoading(false);
            });

            isMountedRef.current = true;
        }
        return () => {
            console.log('unmounted')
        };
    }, []); // Empty dependency array

    return (
        <>
            <div>This is meal page</div>
        </>
    )
}