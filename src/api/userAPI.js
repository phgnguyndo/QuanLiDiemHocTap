import axiosClient from "./axiosClient";

const userAPI= {
    register(data) {
        const url='Authorize/Register';
        return axiosClient.post(url, data)
    }
}

export default userAPI 