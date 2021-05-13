import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Column from "./Components/Column"
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { getKanbanItems } from './api/kanbanapi';



class App extends Component{
  

   handleOnDragEnd(result) {
    console.log(result);

    console.log(this.state);
    let jsonupdate = this.state.columns

   let destcolumn = this.state.columns.find( record => record.name === result.destination.droppableId)
   

   let sourcecolumn = this.state.columns.find( record => record.name === result.source.droppableId)
   console.log(sourcecolumn)
   
   let sourcecard = sourcecolumn.cards.find( record => record.key === result.source.index)
   console.log(sourcecard)

   let final = delete this.state.columns[sourcecolumn.key].cards[sourcecard.key];

   final = this.state.columns[destcolumn.key].cards.push(sourcecard);

   this.setState((state) => {
    // Important: read `state` instead of `this.state` when updating.
    return final
  });

   console.log(jsonupdate)




  }

   getEntries =  () => {
    const logEntries =  getKanbanItems('http://localhost:1337');
    return {columns: logEntries};
    
  };

  constructor(props) {
    super(props);

    
   
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);

    this.state = this.getEntries();

    console.log(this.state.columns);

  
   /* this.state = {
      columns:[
        {
          name: 'Backlog',
          key:0,
          cards:[
            {name: 'Card A',
            cardindex:'BackLog 1',
            key:0},
            {name: 'Card D',
            cardindex:'BackLog 2',
          key:1}
          ]
        },
        {
          name: 'Doing',
          key:1,
          cards:[
            {name: 'Card B',
            cardindex:'Doing 1',
            key:0}
          ]
        },
        {
          name: 'Done',
          key:2,
          cards:[
            {name: 'Card C',
            cardindex:'Done 1',
            key:0}
          ]
        }           
      ]
    }*/
  }

 
  
render() {
 
  return (
    <div className="App">
      <DragDropContext onDragEnd={this.handleOnDragEnd}>

            <div className="App">
            {this.state.columns.map(function(column, columnindex){
              return <Column 
              columnindex={column.columnindex}
              column={column}
              key={column.key}
            />})
            }
    </div>        

    </DragDropContext>
    </div>
  );
}
}

export default App;
