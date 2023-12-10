import 'bootstrap/dist/css/bootstrap.css';
import Head from "../Components/Bar/Head";
import ListBoMonTable from '../Components/BoMonPage/ListBoMon';

const BoMon=()=>{
    return(
        <>
        <Head content={<ListBoMonTable/>}></Head>
        </>
    )
}
export default BoMon;