import React, { Component } from 'react';
import $ from "jquery";

class Admin extends Component {
  state={
    username:'',
    password:'',
    err:''
  }
  render() {
    return (
      <div className="container admin ">
      
      </div>
    );
  }
  componentDidMount(){
    $('#alertLogin').hide()
  }

  handleChange(ev)
{
  this.setState({[ev.target.name]:ev.target.value })
}
async sendform()
{
  debugger;
  try{
    let resp = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      let data = await resp.json();

      if(data.length==0){
      this.setState({err:"sorry worng password or user name try again"})
      $('#alertLogin').show()
    }
      else if(data[0].isAdmin=='true'){
        ////////admin page !!!!!
      }
     
     ////////////////////////////TODOS session   
    }catch(err){
      console.log(err)
    
  }
} 


}

export default Admin;
