import axiosClient, { axiosFormData } from "./axiosClient";

const lopcnAPI= {
    getAll(params) {
        const url='/LopCn';
        return axiosClient.get(url, {params})
    },
    get(id) {
        const url=`/LopCn/${id}`;
        return axiosClient.get(url);
    },
    create(data){
        const url='/LopCn';
        return axiosFormData.post(url,data)
    },
    update(id,data){
        const url=`/LopCn/${id}`;
        return axiosFormData.put(url, data);
    },
    delete(id){
        const url= `/LopCn/${id}`;
        return axiosClient.delete(url);
    }
}

export default lopcnAPI 