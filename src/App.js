import React, { Component } from 'react';
import Nesto from './nesto';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    nestos : [
        { Name : "Erne",Age : "30",Hobbie : "Football",id : 1 },
        { Name : "Kigo",Age : "25",Hobbie :"Football",id : 2 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let nestos = [...this.state.nestos, ninja];
    this.setState({
      nestos: nestos
    })
  }
  deleteNinja = (id) => {
    let nestos = this.state.nestos.filter(ninja => {
      return ninja.id !== id;
    })
    this.setState({
      nestos: nestos
    })
  }
  render(){
    
  return (
    <div className="App">
      <h1>My first react app!Welcome</h1>
      <Nesto deleteNinja = {this.deleteNinja} nestos = {this.state.nestos}/>
      <AddNinja addNinja = {this.addNinja}/>
    </div>
  );
}
}

export default App;
