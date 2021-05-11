import React from 'react'
import Card from './card'

const Column = (column, columnindex) => (
<div>
 <h1>{column.column.name}</h1>
 {column.column.cards.map(
    function(card, cardindex){
        return <Card card={card} cardindex={cardindex} />
    }
 )}
 </div>
)
export default Column