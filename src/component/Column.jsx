import React from 'react'

import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import "../style/scroll.css"
import Task from './Task';

const Container = styled.div`
    background-color: #f4f5f7;
    border-radius:15px;
    width:30%;
    height:475px;
    overflow-y:scroll;
    -ms-overflow-style:none;
    scrollbar-width:none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Title = styled.h3`
    padding:12px 20px 8px;
`;

const TaskList = styled.div`
    padding:3px;
    transistion: background-color 0.2s ease;
    background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`

export default function Column({title, tasks, id}) {

   console.log(id);
   

  return (
    <Container className="column">

        <Title style = {{
            position:"stick",
            color: id == 1 ? "#00308F" :  id==2  ? "orange" : "green"
        }}>
           {title}
        </Title>

        <hr style = {{
            margin:"10px",
            height:"5px",
            backgroundColor: id == "1" ? "#00308F" :  id == "2"? "orange": "green",
        }}></hr>

        <Droppable droppableId={id}>
            {(provided, snapshot) => (
            <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
            >
                
                {tasks.map((task, index) => (
                    <Task  index={index} task={task} />
                ))}
                {provided.placeholder}
            </TaskList>
            )}
      </Droppable>
    </Container>
  )
}
