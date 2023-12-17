import StorageKeys from "../constance/storage-key";
import axiosClient, { axiosFormData } from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const hocvienAPI= {
    getAll(a,b) {
        const url=`/HocVien?pageNumber=${a}&pageSize=${b}`;
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    get(id) {
        const url=`/HocVien/${id}`;
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    create(data){
        const url='/HocVien';
        return axiosFormData.post(url,data, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    update(id,data){
        const url=`/HocVien/${id}`;
        return axiosFormData.put(url, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    delete(id){
        const url= `/HocVien/${id}`
        return axiosClient.delete(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
    }
}

export default hocvienAPI 