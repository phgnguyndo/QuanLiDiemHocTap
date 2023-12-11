import Head from "../Components/Bar/Head"
import ListGiangVienTable from "../Components/GiangVienPage/ListGiangVien"

const GiangVien=()=>{
    return(
        <>
        <Head content={<ListGiangVienTable/>}/>
        </>
    )
}
export default GiangVien