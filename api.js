import axios from 'axios';

const API_URL = "http://localhost:8000/api"
const API_AUTH_URL = "http://localhost:8000/dj-rest-auth"
const accessToken = localStorage.setItem('accessToken', "6e2778eed4e987f06eb83f7f70fde5e56710781a");

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