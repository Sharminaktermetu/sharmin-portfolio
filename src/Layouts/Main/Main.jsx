import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";



const Main = () => {
    return (
        <div>
    
   
                 <Outlet></Outlet>
      
           <Footer></Footer>
        </div>
    );
};

export default Main;