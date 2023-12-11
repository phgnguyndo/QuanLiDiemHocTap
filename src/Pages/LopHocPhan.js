import Head from "../Components/Bar/Head"
import ListLopHPTable from "../Components/LopHocPhanPage/ListLopHP"

const LopHocPhan=()=>{
    return(
        <>
            <Head content={<ListLopHPTable/>}></Head>
        </>
    )
}
export default LopHocPhan