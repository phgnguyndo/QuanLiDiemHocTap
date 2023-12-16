import axiosClient from "./axiosClient";

const bomonAPI= {
    getAll() {
        const url='/BoMon';
        return axiosClient.get(url)
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