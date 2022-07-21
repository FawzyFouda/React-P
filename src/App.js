
import React, { Component } from 'react';
import TodoItems from './Components/Todoitems/TodoItems';
import TodoList from './Components/Additems/AddItems';
import './App.css';
import AddItems from './Components/Additems/AddItems';

class App extends Component{

  state = {

    items : [
      {id:1, name: 'John', age: 34},
      {id:2, name: 'Fawzy', age: 20},
      {id:3, name: 'Ahmed', age: 26}
    ]

  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {

      return item.id !== id

    });
    this.setState({items})

    /*let items = this.state.items;
      let i = items.findIndex(item => item.id === id);
      items.splice(i, 1);
      this.setState({items})*/
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items
    items.push(item);
    this.setState({items});
  }


 
  render(){

    return(

      <div className="App container">
          <h1 className='text-center'>TodoList App</h1>

          <TodoItems items={this.state.items} deleteItem = {this.deleteItem}/>
          <AddItems addItems={this.addItem}/>
      </div>


    )

  }

}

export default App;
