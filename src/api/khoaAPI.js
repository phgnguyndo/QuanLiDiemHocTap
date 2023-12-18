import StorageKeys from "../constance/storage-key";
import axiosClient, { axiosFormData } from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const khoaAPI= {
    getAll(a, b) {
        const url=`/Khoa?pageNumber=${a}&pageSize=${b}`;
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    get(id) {
        const url=`/Khoa/${id}`;
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    create(data){
        const url='/Khoa';
        return axiosFormData.post(url,data, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    update(id,data){
        const url=`/Khoa/${id}`;
        return axiosClient.put(url, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    delete(id){
        const url= `/Khoa/${id}`
        return axiosClient.delete(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
    }
}

export default khoaAPI;