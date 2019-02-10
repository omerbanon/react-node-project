import React, { Component } from 'react';
import Register from './comp/Register';
import Login from './comp/Login';
import AllFlights from './comp/AllFlights';
import io from 'socket.io-client';
// var socket = io('http://localhost:8888');
// socket.on('connect', function(){console.log('connect ')});
// socket.on('event', function(data){});
// socket.on('disconnect', function(){});
class App extends Component {
  render() {
    return (
      
      <div className="App container">
      
      <AllFlights />
      <div className="row">
      <div className="col-sm-6">
     <Register />
     </div>
     <div className="col-sm-6">
     <Login />

     </div>
     </div>
      </div>
    );
  }
}

export default App;
