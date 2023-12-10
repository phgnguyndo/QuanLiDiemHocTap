import axiosClient, { axiosFormData } from "./axiosClient";

const lophocphanAPI = {
  getAll(params) {
    const url = "/LopHocPhan";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/LopHocPhan/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "/LopHocPhan";
    return axiosClient.post(url, data);
  },
  update(id, data) {
    const url = `/LopHocPhan/${id}`;
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/LopHocPhan/${id}`;
    return axiosClient.delete(url);
  },
};

export default lophocphanAPI;
