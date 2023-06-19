import Cardboard from "../component/Cardboard";
import Cardsection from "../component/Cardsection";
import Navbar from "../component/Navbar";
import Task from "../component/Task";
import Uppersection from "../component/Uppersection";


const Dashboard = (props) => {

   return (
        <div>
            <Navbar />
            <Uppersection/>
            <Cardsection/>
        </div>
   );
}
export default Dashboard;