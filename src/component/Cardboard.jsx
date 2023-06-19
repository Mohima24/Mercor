import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import '../style/dragsection.css'

const Cardboard = () =>{

    const[completed , setCompleted] = useState([]);
    const[incomplete , setIncomplete] = useState([]);
    const[inprogress, setProgress] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => {
            setCompleted(json.filter((task) => task.completed));
            setIncomplete(json.filter((task) => !task.completed));
          });
      }, []);


    
      const handleDragEnd = (result) => {

        const { destination, source, draggableId } = result;
        
        try{

            let value = destination.droppableId;

        }catch(err){

            alert("Please Drop in Correct Block Position");
            return;
        }

        if (source.droppableId == destination.droppableId) return;
    
        //REMOVE FROM SOURCE ARRAY
    
        if (source.droppableId == 2) {

          setCompleted(removeItemById(draggableId, completed));

        } else if (source.droppableId == 1) {

          setIncomplete(removeItemById(draggableId, incomplete));

        }else if (source.droppableId == 3) {

          setProgress(removeItemById(draggableId, inprogress));

        }
    
        // GET ITEM
    
        const task = findItemById(draggableId, [...incomplete, ...completed , ...inprogress]);
    
     
        if (destination.droppableId == 2) {

          setCompleted([{ ...task, completed: !task.completed }, ...completed]);

        } else if(destination.droppableId == 1) {

          setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);

        }else if(destination.droppableId == 3) {

          setProgress([{ ...task, completed: !task.completed }, ...inprogress]); 

        }

    }; 

    function findItemById(id, array) {
         return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
        return array.filter((item) => item.id != id);
    }

    return(

        <DragDropContext onDragEnd={handleDragEnd}>
            <h2 style={{textAlign:"center" ,margin:"25px", color:"#00308F" }}>Progress Board</h2>
            <div className='columns-main' style={{
                display:"flex",
                justifyContent:"space-evenly",
                alignItems:"center",
            }}>
              <Column title={"To Do"} tasks={incomplete} id={"1"}/> 
              <Column title={"On Progress"} tasks={inprogress} id={"3"}/> 
              <Column title={"Done"} tasks={completed} id={"2"}/> 
            </div>
        </DragDropContext>


    );

}

export default Cardboard;
