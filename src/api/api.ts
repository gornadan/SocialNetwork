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
        debugger
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
        return profileAPI.getProfile(userId)

    }
};

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/`+ userId )
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/`+ userId );
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status} );
    }
};

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}


