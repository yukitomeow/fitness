"use client"

import React, {useState, useEffect, useRef} from 'react';
import { GetAllUsers } from '../../api';
import { useRouter } from 'next/navigation';
import  userStore  from '../../stores/userStore';


const HomePage =  () => {
  // const [user, setUser] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const isMountedRef = useRef(false);
  // useEffect(() => {
  //   if (!isMountedRef.current) {
  //     setLoading(true);
  //   //  GetAllUsers().then(response => {
  //   //     console.log(response.data);
  //   //     setUser(response.data)
  //   //     setLoading(false);
  //   //   }).catch(error => {
  //   //     console.log(error);
  //   //     setLoading(false);
  //   //   });

  //     const getData = async () => {
  //       try {
  //         const response = await GetAllUsers();
  //         setUser(response.data);
  //         //setLoading(false);
  //       } catch (error) {
  //         //setLoading(false);
  //       }
  //     };

  //     getData();

  //     isMountedRef.current = true;
  //   }
  //   return () => {
  //     console.log('unmounted')
  //   };
  // }, []); // Empty dependency array\
  const router = useRouter();
  console.log("router is ", router)
; // Destructure to get your UserStore

  useEffect(() => {

    if (!userStore.authenticated) {
    router.push('/login');
  }
}, [userStore, router]);

  return <div style={{ backgroundColor: 'beige', height: '100vh', width: '100vw' }}>
    Welcome to the homepage!
  </div>


}
  
 
 



export default HomePage;
