import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "ce69a53b-250c-4758-9c20-f08aa69b3abd"
    }
});

export const usersAPI = {
    getUsers(currentPage: number , pageSize: number ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => {
            return responce.data
        })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },

    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/`+ userId )

    }
};

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}


