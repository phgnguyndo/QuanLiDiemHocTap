import StorageKeys from "../constance/storage-key";
import axiosClient from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const hocPhanAPI = {
    getAll(){
        const url = '/HocPhan';
        return axiosClient.get(url,{
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    get(id) {
        const url=`/HocPhan/${id}`;
        return axiosClient.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    create(data){
        const url='/HocPhan';
        return axiosClient.post(url,data, {
            headers: { Authorization: `Bearer ${token}` },
          })
    },
    update(id,data){
        const url=`/HocPhan/${id}`;
        return axiosClient.put(url, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
    },
    delete(id){
        const url= `/HocPhan/${id}`
        return axiosClient.delete(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
    }
}
export default hocPhanAPI;
