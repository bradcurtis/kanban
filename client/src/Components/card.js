import React from 'react'
import {  Draggable } from 'react-beautiful-dnd'


const Card =  (card, cardindex) =>(
  
    <Draggable id={card.card.key} draggableId={card.card.cardindex} index={card.card.key} >
        {(provided) =>
            <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="card"
            >
            {card.card.name}
            {card.card.cardindex}
            </div>
        

        }

    </Draggable>
   
    
)

export default Card