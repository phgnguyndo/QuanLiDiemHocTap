import axiosClient, { axiosFormData } from "./axiosClient";

const daidoiAPI= {
    getAll(params) {
        const url='/DaiDoi';
        return axiosClient.get(url, {params})
    },
    get(id) {
        const url=`/DaiDoi/${id}`;
        return axiosClient.get(url);
    },
    create(data){
        const url='/DaiDoi';
        return axiosFormData.post(url,data)
    },
    update(id,data){
        const url=`/DaiDoi/${id}`;
        return axiosFormData.put(url, data);
    },
    delete(id){
        const url= `/DaiDoi/${id}`
        return axiosClient.delete(url)
    }
}

export default daidoiAPI 