import StorageKeys from "../constance/storage-key";
import axiosClient from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const phieuDiemAPI = {
  getAll() {
    const url = "/PhieuDiem";
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  get(id) {
    const url = `/PhieuDiem/${id}`;
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  create(data) {
    const url = "/PhieuDiem";
    return axiosClient.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  update(id, data) {
    const url = `/PhieuDiem/${id}`;
    return axiosClient.put(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  delete(id) {
    const url = `/PhieuDiem/${id}`;
    return axiosClient.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default phieuDiemAPI;
