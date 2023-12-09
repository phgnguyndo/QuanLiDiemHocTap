import "bootstrap/dist/css/bootstrap.css";
import DiemHocVien from "../Components/HocVienPage/DiemHocVien";
import Head from "../Components/Bar/Head";

const Diem = () => {
  return (
    <>
      <Head content={<DiemHocVien />} />
    </>
  );
};
export default Diem;
