
import Header from '/src/Components/layouts/Header';
import  {Outlet}  from 'react-router-dom';
import Footer from '/src/Components/layouts/Footer';

const RootLayouts = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default RootLayouts