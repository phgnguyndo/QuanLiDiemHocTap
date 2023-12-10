import 'bootstrap/dist/css/bootstrap.css';
import Head from "../Components/Bar/Head";
import ListKhoaTable from "../Components/KhoaPage/ListKhoa";

const Khoa=()=>{
    return(
        <>
        <Head content={<ListKhoaTable/>}/>
        </>
    );
};
export default Khoa;