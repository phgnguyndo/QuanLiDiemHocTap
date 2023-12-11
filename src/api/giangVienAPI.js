import axiosClient from "./axiosClient";

const giangVienAPI= {
    getAll(params) {
        const url='/GiangVien';
        return axiosClient.get(url, {params})
    },
    get(id) {
        const url=`/GiangVien/${id}`;
        return axiosClient.get(url);
    },
    create(data){
        const url='/GiangVien';
        return axiosClient.post(url,data)
    },
    update(id,data){
        const url=`/GiangVien/${id}`;
        return axiosClient.put(url, data);
    },
    delete(id){
        const url= `/GiangVien/${id}`
        return axiosClient.delete(url)
    }
}

export default giangVienAPI 