import React, { Component } from 'react';
import $ from "jquery";
import io from 'socket.io-client';
import Flight from './Flight';
import { connect } from "react-redux";
import {allFlightsFun} from '../state/actions'

// var socket = io('http://localhost:8888');
class AllFlights extends Component {
  state={
    allflights:[]
  }
  render() {
    
    return (
      <div className=" admin ">
        <h1> All Flights</h1>
        <div className="row">
    {this.state.allflights.map(f=><Flight key={f.ID} flight={f} />)}
    </div>
      </div>
    );
  }
 async componentDidMount(){

   let data= await fetch(`http://localhost:3000/allflights`)
    let AllFlights= await data.json()
   
    this.setState({allflights:AllFlights})
    debugger;
    this.props.allflights(this.state)
  // socket.on("connect", function() {
  //   console.log("connected");
  // });
}

}
 
const mapDispatchToProps = dispatch => { 
  debugger;
  return  { 

      allflights: function(flightArray)
      {
          dispatch(allFlightsFun(flightArray))
      }
   // changeCounterProp: updatedCounter => dispatch(ChangeCounter(updatedCounter)) 
      }
}; 


const allflights = connect(null, mapDispatchToProps )(AllFlights);


export default allflights;
