import StorageKeys from "../constance/storage-key";
import axiosClient from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const dayhocAPI = {
  getAll() {
    const url = "/DayHoc";
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  create(data) {
    const url = "/DayHoc";
    return axiosClient.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  update(id, data) {
    const url = `/DayHoc/${id}`;
    return axiosClient.put(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  delete(id) {
    const url = `/DayHoc/${id}`;
    return axiosClient.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default dayhocAPI;
