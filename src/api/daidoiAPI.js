import StorageKeys from "../constance/storage-key";
import axiosClient, { axiosFormData } from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const daidoiAPI = {
  getAll() {
    const url = "/DaiDoi";
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  get(id) {
    const url = `/DaiDoi/${id}`;
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  create(data) {
    const url = "/DaiDoi";
    return axiosFormData.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  update(id, data) {
    const url = `/DaiDoi/${id}`;
    return axiosFormData.put(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  delete(id) {
    const url = `/DaiDoi/${id}`;
    return axiosClient.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
  },
};

export default daidoiAPI;
