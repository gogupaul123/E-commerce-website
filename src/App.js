import './styles/App.css';
import React from 'react'
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route}
from 'react-router-dom';
import Checkout from './Checkout';
import Plata from './Plata';



class App extends React.Component {
  constructor(){
    super()
    this.state={
      searchField: ''
    }
  }
  onSearchChange = (event) =>{
    this.setState({searchField : event.target.value})
    
   
  }
  render(){
    
    

    return (
      <Router>
          <div className ='app'>
          <Header onChange ={this.onSearchChange}/>
          
          <Switch>
          
          
          <Route path='/plata'>
                <Plata/>
          </Route>

          <Route path ='/checkout'>
                <Checkout/>
          </Route>

          <Route path ='/'>
                <Home searching ={this.state.searchField}/>
          </Route>

             

          </Switch>
          
        </div>
      </Router>
       
     )
  }
  
  
}

export default App;
