import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/test'
import ButtonSfc from './components/sfc'


class App extends React.Component{
  public clickHandler = () => {
    alert('hello')
  }

  public render(){
    return (
      <div className="App">
        <Test color='red'></Test>
        <ButtonSfc onClick={this.clickHandler}></ButtonSfc>
      </div>
    )
  }
}

export default App;
