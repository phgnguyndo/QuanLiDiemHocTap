import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Components/Bar/Header";
import ListKhoaTable from "../Components/KhoaPage/ListKhoa";

const Khoa=()=>{
    return(
        <>
        <Header></Header>
        <ListKhoaTable></ListKhoaTable>
        </>
    );
};
export default Khoa;