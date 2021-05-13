import React from 'react'
import Card from './card'
import { Droppable } from 'react-beautiful-dnd';


const Column = (column, columnindex) => (
    <Droppable droppableId={column.column.name} key={column.column.key}> 
    {(provided) => 
        <div 
        ref={provided.innerRef} 
        {...provided.droppableProps} 
        className="column">
        <h1>{column.column.name}</h1>
            {column.column.cards.map(
                function(card, cardindex){
                    return (
                    
                    <Card card={card} cardindex={cardindex} />
                
                    )
                }
            )}
        </div>
 }
 </Droppable>
)
export default Column