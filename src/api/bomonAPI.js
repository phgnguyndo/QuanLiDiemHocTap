import StorageKeys from "../constance/storage-key";
import axiosClient from "./axiosClient";

const token = localStorage.getItem(StorageKeys.TOKEN);
const bomonAPI = {
  getAll(a,b) {
    const url = `/BoMon?pageNumber=${a}&pageSize=${b}`;
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getAll1(a, b) {
    const url = `/BoMon?pageNumber=${a}&pageSize=${b}`;
    return axiosClient.get(url,{
        headers: { Authorization: `Bearer ${token}` },
      });
  },
  get(id) {
    const url = `/BoMon/bomonbyidkhoa/${id}`;
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  create(data) {
    const url = "/BoMon";
    return axiosClient.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  update(id, data) {
    const url = `/BoMon/${id}`;
    return axiosClient.put(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  delete(id) {
    const url = `/BoMon/${id}`;
    return axiosClient.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default bomonAPI;
