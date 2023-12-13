import 'bootstrap/dist/css/bootstrap.css';
import Head from "../Components/Bar/Head";
import ListThongKe from '../Components/ThongKePage/ListThongKe';

const ThongKe=()=>{
    return(
        <>
        <Head content={<ListThongKe/>}></Head>
        </>
    )
}
export default ThongKe;