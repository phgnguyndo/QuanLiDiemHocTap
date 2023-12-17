import StorageKeys from "../constance/storage-key";
import axiosClient from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const lophocphanAPI = {
  getAll() {
    const url = "/LopHocPhan";
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  get(id) {
    const url = `/LopHocPhan/${id}`;
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  create(data) {
    const url = "/LopHocPhan";
    return axiosClient.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  update(id, data) {
    const url = `/LopHocPhan/${id}`;
    return axiosClient.put(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  delete(id) {
    const url = `/LopHocPhan/${id}`;
    return axiosClient.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default lophocphanAPI;
