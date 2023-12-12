import 'bootstrap/dist/css/bootstrap.css';
import Head from "../Components/Bar/Head"
import ListAllHocVien from '../Components/HocVienPage/ListAllHV';

const AllHocVien = () => {
  return (
    <>
    <Head content={<ListAllHocVien/>}/>
    
    </>
  );
};
export default AllHocVien;
