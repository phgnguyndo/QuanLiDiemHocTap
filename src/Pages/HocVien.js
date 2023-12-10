import 'bootstrap/dist/css/bootstrap.css';
import Head from "../Components/Bar/Head"
import HocVienTable from "../Components/HocVienPage/ListHocVienTable";

const HocVien = () => {
  return (
    <>
    <Head content={<HocVienTable/>}/>
    
    </>
  );
};
export default HocVien;
