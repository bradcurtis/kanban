import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Column from "./Column"


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      columns:[
        {
          name: 'Backlog',
          cards:[
            {name: 'Card A'}
          ]
        },
        {
          name: 'Doing',
          cards:[
            {name: 'Card B'}
          ]
        },
        {
          name: 'Done',
          cards:[
            {name: 'Card C'}
          ]
        }           
      ]
    }
  }

render() {
  
  return (
    <div className="App">
    {this.state.columns.map(function(column, columnindex){
      return <Column 
      columnindex={columnindex}
      column={column}
      key={columnindex}
      />
      
    })

    }
    </div>
  );
}
}

export default App;
