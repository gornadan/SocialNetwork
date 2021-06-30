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
    },
    savePhoto(photo: File) {
        const formData = new FormData();
        formData.append('image',photo)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: any) {
        return instance.put(`profile`, profile );
    }
};

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
};

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    }
}




