import axiosClient, { axiosFormData } from "./axiosClient";

const bomonAPI= {
    getAll(params) {
        const url='/BoMon';
        return axiosClient.get(url, {params})
    },
    get(id) {
        const url=`/BoMon/bomonbyidkhoa/${id}`;
        return axiosClient.get(url);
    },
    create(data){
        const url='/BoMon';
        return axiosClient.post(url,data)
    },
    update(id, data){
        const url=`/BoMon/${id}`;
        return axiosClient.put(url, data);
    },
    delete(id){
        const url= `/BoMon/${id}`;
        return axiosClient.delete(url);
    }
}

export default bomonAPI 