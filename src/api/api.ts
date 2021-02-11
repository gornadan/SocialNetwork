import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "ce69a53b-250c-4758-9c20-f08aa69b3abd"
    }
});

export const usersAPI = {
    getUsers  (currentPage: number = 1, pageSize: number = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => {
            return responce.data
        })


    }
}


