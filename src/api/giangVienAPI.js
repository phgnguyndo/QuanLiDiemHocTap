import StorageKeys from "../constance/storage-key";
import axiosClient from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const giangVienAPI= {
    getAll() {
        const url='/GiangVien';
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    get(id) {
        const url=`/GiangVien/${id}`;
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    create(data){
        const url='/GiangVien';
        return axiosClient.post(url,data, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    update(id,data){
        const url=`/GiangVien/${id}`;
        return axiosClient.put(url, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    delete(id){
        const url= `/GiangVien/${id}`
        return axiosClient.delete(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
    }
}

export default giangVienAPI 