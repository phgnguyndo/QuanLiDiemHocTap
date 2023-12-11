import Head from "../Components/Bar/Head"
import ListHocPhanTable from "../Components/HocPhanPage/ListHocPhan"
const HocPhan=()=>{
    return(
        <>
        <Head content={<ListHocPhanTable/>}/>
        </>
    )
}
export default HocPhan