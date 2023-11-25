import axiosClient, { axiosFormData } from "./axiosClient";

const hocvienAPI= {
    getAll(params) {
        const url='/HocVien';
        return axiosClient.get(url, {params})
    },
    get(id) {
        const url=`/HocVien/${id}`;
        return axiosClient.get(url);
    },
    create(data){
        const url='/HocVien';
        return axiosFormData.post(url,data)
    },
    update(id,data){
        const url=`/HocVien/${id}`;
        return axiosFormData.put(url, data);
    },
    delete(id){
        const url= `/HocVien/${id}`
        return axiosClient.delete(url)
    }
}

export default hocvienAPI 