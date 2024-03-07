"use client"

import React, {useState, useEffect, useRef} from 'react';
import { GetAllUsers } from '../../api';

const YourPage =  () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (!isMountedRef.current) {
      setLoading(true);
    //  GetAllUsers().then(response => {
    //     console.log(response.data);
    //     setUser(response.data)
    //     setLoading(false);
    //   }).catch(error => {
    //     console.log(error);
    //     setLoading(false);
    //   });

      const getData = async () => {
        try {
          const response = await GetAllUsers();
          setUser(response.data);
          //setLoading(false);
        } catch (error) {
          //setLoading(false);
        }
      };

      getData();

      isMountedRef.current = true;
    }
    return () => {
      console.log('unmounted')
    };
  }, []); // Empty dependency array
  
 
  console.log("user", user)
 

  return (
    <div>
      {user.map(user=>(
        <li key={user.id}>
          <span>{user.username}</span>
        </li>
      ))}
     
    </div>
  );
};

export default YourPage;
