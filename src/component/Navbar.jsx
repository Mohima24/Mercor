
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { SlCalender} from "react-icons/sl";
import {BsInfoSquare } from "react-icons/bs";
import '../style/navbar.css';

const Navbar =()=>{
   
return(

    <>
     <div className="navbar-main">

        <div className="navbar-search-bar">
            <div>
               <AiOutlineSearch className="search-icons"/>
                <input type="text" placeholder="Search for anything..."/>
            </div>

        </div>
        
        <div className="navbar-icons">
            <SlCalender className="navbar-icon" />
            <BsInfoSquare className="navbar-icon" />
            <AiOutlineBell className="navbar-icon"/>
        </div>
        
        <div className="navbar-profile-info">
            <div className="navbar-profile-name" >
                <p>Mohima Bahadur</p>
                <p>Kolkata</p>
            </div>
            <div className="navbar-profile-image" >
                <img src= "resources/icon-user.png"/>
            </div>
        </div>

     </div>
     
     

    </>

)


};

export default Navbar;