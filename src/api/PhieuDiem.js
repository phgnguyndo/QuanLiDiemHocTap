import axiosClient from "./axiosClient";

const phieuDiemAPI = {
  getAll(params) {
    const url = "/PhieuDiem";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/PhieuDiem/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    const url = "/PhieuDiem";
    return axiosClient.post(url, data);
  },
  update(id, data) {
    const url = `/PhieuDiem/${id}`;
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/PhieuDiem/${id}`;
    return axiosClient.delete(url);
  },
};

export default phieuDiemAPI;
