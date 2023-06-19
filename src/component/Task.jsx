import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 10px;
  padding:8px;
  color:#000;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin:0px 10px 8px;
  min-height:90px;
  background-color: ${(props)=> bgcolorChange(props)};
  cursor:pointer;
  display:flex;
  justify-content:center;
  flex-direction: column;
`
const TextContent = styled.div`
    font-size:16px;
    text-align:center;
    display:flex;
    font-weight:600;
`;



function bgcolorChange(props){

    return props.isDragging 
       ? "#d3d3d3" 
       :props.isDraggable
       ?props.isBacklog
         ?"white"
         :"white"
       :props.isBacklog
       ?"white"
       :"white"
}

export default function Task({task,index}) {
   
  return (
      
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div style={{ display: "flex", justifyContent: "start", paddingLeft: 4 }}>
            <span>
              <small>
                {task.id}.
                {"  "}
              </small>
            </span>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", padding: 2 }}
          >
            <TextContent>{task.title}</TextContent>
          </div>
          {provided.placeholder}
        </Container>
      )}
    </Draggable>

  )
}
