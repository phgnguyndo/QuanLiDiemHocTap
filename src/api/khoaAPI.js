import axiosClient, { axiosFormData } from "./axiosClient";

const khoaAPI= {
    getAll(params) {
        const url='/Khoa';
        return axiosClient.get(url, {params})
    },
    get(id) {
        const url=`/Khoa/${id}`;
        return axiosClient.get(url);
    },
    create(data){
        const url='/Khoa';
        return axiosFormData.post(url,data)
    },
    update(id,data){
        const url=`/Khoa/${id}`;
        return axiosClient.put(url, data);
    },
    delete(id){
        const url= `/Khoa/${id}`
        return axiosClient.delete(url)
    }
}

export default khoaAPI;