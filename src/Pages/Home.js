import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Components/Bar/Header";
import BodyHomePage from '../Components/HomePage/Body';
import EndPage from '../Components/Bar/End';
import Test from './test';
import Head from '../Components/Bar/Head';

const Home = () => {
  
  return (
    <>
    <Head content={<BodyHomePage/>}/> 
    </>
  );
};
export default Home;
