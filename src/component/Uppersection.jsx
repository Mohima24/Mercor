import { RiUserSharedLine} from "react-icons/ri";
import { BiFilterAlt, BiGridAlt} from "react-icons/bi";
import { AiOutlineCalendar} from "react-icons/ai";
import { CiGrid2H} from "react-icons/ci";

import '../style/uppersection.css';

const Uppersection =()=>{

    return(

       <>
         <div class="upper-section-main">
            <div class="upper-section-left" >
                <h1>Mobile App</h1>
                <div>
                    <div class="select-div">
                        <select id="cars">
                            <option value= "Filter"> <BiFilterAlt/> Filter</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <select id="cars">
                            <option value="Today"> <AiOutlineCalendar/> Today</option>
                            <option value="low">Saab</option>
                            <option value="medium">Opel</option>
                            <option value="high">Audi</option>
                        </select>
                    </div>
                   
                    <div class="share-items-div">
                        <div class="share-btn">
                            <RiUserSharedLine/>
                            <p>Share</p>
                        </div>
                        <div>
                            <BiGridAlt className="share-btn-logo active-logo"/>
                            <CiGrid2H className="share-btn-logo"/>
                        </div>
                    </div>
                </div>
            </div>
         </div>

       </>

    );
     

}

export default Uppersection;