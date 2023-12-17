import StorageKeys from "../constance/storage-key";
import axiosClient from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const truyvetAPI= {
    getAll() {
        const url='/TruyVet';
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    create(data){
        const url='/TruyVet';
        return axiosClient.post(url,data, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    update(id, data){
        const url=`/TruyVet/${id}`;
        return axiosClient.put(url, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
    }
}

export default truyvetAPI 