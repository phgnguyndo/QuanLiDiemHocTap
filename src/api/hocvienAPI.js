import axiosClient, { axiosFormData } from "./axiosClient";

const hocvienAPI= {
    getAll(a,b) {
        const url=`/HocVien?pageNumber=${a}&pageSize=${b}`;
        return axiosClient.get(url)
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