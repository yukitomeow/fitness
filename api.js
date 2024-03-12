

import axios from 'axios';
import { saveToStorage, getFromStorage } from "./src/utils/localStorage"

const API_URL = "http://localhost:8000/api"
const API_AUTH_URL = "http://localhost:8000/dj-rest-auth"

//
// if (typeof window !== 'undefined') {
//     // Perform localStorage action
//     //const item = localStorage.getItem('key')
//     const accessToken = localStorage.setItem("name", "123");
//     console.log("accessToken is ", accessToken)
// }


// export const saveToStorage = (key, value) => {
//     if (typeof window !== 'undefined') {
//         return window.localStorage.setItem(key, value);
//     }
// }

// get from storage
// export const getFromStorage = (key) => {
//     if (typeof window !== 'undefined') {
//         return window.localStorage.getItem(key);
//     }
// }

// export const removeFromStorage = (key) => {
//     if (typeof window !== 'undefined') {
//         return window.localStorage.removeItem(key);
//     }
// }

export const GetMeal = async (id) => { //GET Req
    try {
        const accessToken = localStorage.getItem('accessToken');
        const options = {
            headers: {
                Authorization: `Token ${accessToken}`
            }
        }
        const response = await axios.get(`${API_URL}/meal/${id}/`, options);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const GetAllMeals = async () => { //GET Req
    try {
        const accessToken = localStorage.getItem('accessToken');
        const options = {
            headers: {
                Authorization: `Token ${accessToken}`
            }
        }
        const response = await axios.get(`${API_URL}/meal/`, options);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const GetAllUsers = async () => { //GET Req
    try {
        const accessToken = localStorage.getItem('accessToken');
        const options = {
            headers: {
                Authorization: `Token ${accessToken}`
            }
        }
        const response = await axios.get(`${API_URL}/users/`, options);
        saveToStorage("meow","1234")
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const Register = async (username, email, password1, password2) => {
    try {
        const response = await axios.post(`${API_AUTH_URL}/registration/`, {
            'username': username,
            'email': email,
            'password1': password1,
            'password2': password2
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const Login = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_AUTH_URL}/login/`, {
            'username': username,
            'email': email,
            'password': password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}