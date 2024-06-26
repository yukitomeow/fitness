

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

export const GetUserInfo = async () => { //GET Req
    try {
        const accessToken = localStorage.getItem('accessToken');
        const options = {
            headers: {
                Authorization: `Token ${accessToken}`
            }
        }
        const response = await axios.get(`${API_AUTH_URL}/user/`, options);
        return response.data;
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

export const CreateMeal = async (user, meal_type, hungry_when_eating, stop_eating_not_hungry) => {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const options = {
            headers: {
                Authorization: `Token ${accessToken}`
            }
        }
        const response = await axios.post(`${API_URL}/meal/`, {
            'user': user,
            'meal_type': meal_type,
            'hungry_when_eating': hungry_when_eating,
            "stop_eating_not_hungry": stop_eating_not_hungry,
            "foods":[],
        },options);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const Logout = async () => {
    try {
        // No need to send body data for logout, but ensure authentication details are included in headers if needed
        const response = await axios.post(`${API_AUTH_URL}/logout/`);
        // Assuming the server clears the session or token and sends back a successful response
        console.log('Logout successful:', response.data);
        return response.data;
    } catch (error) {
        console.log('Logout error:', error);
        throw error;
    }
}
