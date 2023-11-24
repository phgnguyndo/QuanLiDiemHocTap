import axiosClient from "./axiosClient";

const bomonAPI= {
    getAll(params) {
        const url='/bomon';
        return axiosClient.get(url, {params})
    },
    get(id) {
        const url=`/bomon/${id}`;
        return axiosClient.get(url);
    },
    create(data){
        const url='/bomon';
        return axiosClient.post(url,data)
    },
    update(data){
        const url=`/bomon/${data.id}`;
        return axiosClient.patch(url, data);
    },
    delete(id){
        const urll= `/bomon/${id}`
    }
}

export default bomonAPI 