import { Tbody, Td, Tr } from "@chakra-ui/table";

const DiemConponent = ()=>{



    const HocPhan = [
        {
          id: 1,
          attributes: {
            TenMonHoc: 'Giải tích 1',
            SoTinChi: 4,
            DiemChuyenCan: 10,
            DiemThuongXuyen: 7,
            DiemThiKetThucMon: 10,
            SoLanThiLai: 0,
            HocKy: 1,
          },
        },
        {
            id: 1,
            attributes: {
              TenMonHoc: 'Giải tích 1',
              SoTinChi: 4,
              DiemChuyenCan: 10,
              DiemThuongXuyen: 7,
              DiemThiKetThucMon: 10,
              SoLanThiLai: 0,
              HocKy: 1,
            },
          },
          {
            id: 1,
            attributes: {
              TenMonHoc: 'Giải tích 1',
              SoTinChi: 4,
              DiemChuyenCan: 10,
              DiemThuongXuyen: 7,
              DiemThiKetThucMon: 10,
              SoLanThiLai: 0,
              HocKy: 1,
            },
          },
      ];
    // Tính điểm trung bình môn và học kỳ
    const diemTBMonHocKy = HocPhan.reduce((acc, student) => {
      const diemTBMon = (
        student.attributes.DiemChuyenCan * 0.1 +
        student.attributes.DiemThuongXuyen * 0.3 +
        student.attributes.DiemThiKetThucMon * 0.6
      ).toFixed(2);
  
      if (!acc[student.attributes.HocKy]) {
        acc[student.attributes.HocKy] = {
          totalDiem: 0,
          count: 0,
        };
      }
  
      acc[student.attributes.HocKy].totalDiem += parseFloat(diemTBMon);
      acc[student.attributes.HocKy].count += 1;
  
      return acc;
    }, {});
  
    // Tính điểm trung bình học kỳ
    Object.keys(diemTBMonHocKy).forEach((hocKy) => {
      diemTBMonHocKy[hocKy].diemTBHocKy = (
        diemTBMonHocKy[hocKy].totalDiem / diemTBMonHocKy[hocKy].count
      ).toFixed(2);
    });



    return(
        <>
        <Tbody>
            <Tr >
            <Td position={"relative"} textAlign={"center"}>Toán rời rạc</Td>
            <Td position={"relative"} textAlign={"center"}>4</Td>
            <Td position={"relative"} textAlign={"center"}>8.0</Td>
            <Td position={"relative"} textAlign={"center"}>9.0</Td>
            <Td position={"relative"} textAlign={"center"}>8.5</Td>
            <Td position={"relative"} textAlign={"center"}>0</Td>         
            <Td position={"relative"} textAlign={"center"}>8.7</Td>         
            </Tr>
        </Tbody>
        </>
    );
};

export default DiemConponent;