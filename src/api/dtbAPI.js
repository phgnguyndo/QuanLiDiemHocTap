import axiosClient from "./axiosClient";

const dtbAPI= {
    getAll(params) {
        const url='/DTB';
        return axiosClient.get(url, {params})
    },
    get(id) {
        const url=`/DTB/${id}`;
        return axiosClient.get(url);
    },
    create(data){
        const url='/DTB';
        return axiosClient.post(url,data)
    },
    update(hocky, id, data){
        const url=`/DTB?hocky=${hocky}&MaHV=${id}`;
        return axiosClient.put(url, data);
    },
    delete(id){
        const url= `/DTB/${id}`
        return axiosClient.delete(url)
    }
}

export default dtbAPI 