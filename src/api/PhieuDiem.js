import axiosClient from "./axiosClient";

const PhieuDiem= {
    getAll(params) {
        const url='/PhieuDiem';
        return axiosClient.get(url, {params})
    },
    get(id) {
        const url=`/PhieuDiem/${id}`;
        return axiosClient.get(url);
    },
    create(data){
        const url='/PhieuDiem';
        return axiosClient.post(url,data)
    },
update(data){
        const url=`/PhieuDiem/${data.id}`;
        return axiosClient.patch(url, data);
},
    delete(id){
        const url= `/PhieuDiem/${id}`;
        return axiosClient.delete(url);
    }
}

export default PhieuDiem