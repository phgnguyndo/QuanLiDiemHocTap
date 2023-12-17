import StorageKeys from "../constance/storage-key";
import axiosClient, { axiosFormData } from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const lopcnAPI= {
    getAll() {
        const url='/LopCn';
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    get(id) {
        const url=`/LopCn/${id}`;
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    create(data){
        const url='/LopCn';
        return axiosFormData.post(url,data, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    update(id,data){
        const url=`/LopCn/${id}`;
        return axiosFormData.put(url, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    delete(id){
        const url= `/LopCn/${id}`;
        return axiosClient.delete(url, {
            headers: { Authorization: `Bearer ${token}` },
          });
    }
}

export default lopcnAPI 