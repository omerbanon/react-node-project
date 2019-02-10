import React, { Component } from 'react';
import $ from "jquery";

class Login extends Component {
  state={
    username:'',
    password:'',
    err:''
  }
  render() {
    return (
      <div className="container register ">
      <div className="row">
        <h1 className="col-sm-6 ">Login</h1>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <div className="alert alert-danger" id="alertLogin" role="alert">
         {this.state.err}
    </div>
          <input type="text"onChange={this.handleChange.bind(this)}  className="form-control" placeholder="username" name="username" />
          <input type="password" onChange={this.handleChange.bind(this)}  className="form-control" placeholder="password" name="password" />
          <input type="button"onClick={this.sendform.bind(this)} className="btn btn-info" value="Login" />
      </div>
      </div>
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

export default Login;
