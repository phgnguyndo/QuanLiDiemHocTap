import 'bootstrap/dist/css/bootstrap.css';
import BodyHomePage from '../Components/HomePage/Body';
import Head from '../Components/Bar/Head';

const Home = () => {
  
  return (
    <>
    <Head content={<BodyHomePage/>}/> 
    </>
  );
};
export default Home;
