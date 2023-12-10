import axiosClient, { axiosFormData } from "./axiosClient";

const hocphanAPI = {
  getAll(params) {
    const url = "/HocPhan";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/HocPhan/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "/HocPhan";
    return axiosClient.post(url, data);
  },
  update(id, data) {
    const url = `/HocPhan/${id}`;
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/HocPhan/${id}`;
    return axiosClient.delete(url);
  },
};

export default hocphanAPI;
