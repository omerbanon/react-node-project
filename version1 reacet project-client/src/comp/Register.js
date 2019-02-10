import React, { Component } from 'react';
import $ from "jquery";

class Register extends Component {
  state={
    name:'',
    last:'',
    username:'',
    password:'',
    Cpassword:'',
    err:''
  }

  render() {
    
    return (
      <div className="container">
      <div className="row">
        <h1 className="col-sm-6 ">Register</h1>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <div className="alert alert-danger register " id="errRegister" role="alert">
         {this.state.err}
    </div>
    
          <input type="text" onChange={this.handleChange.bind(this)} className="form-control registerInput" placeholder="name" name="name" />
          <input type="text" onChange={this.handleChange.bind(this)} className="form-control registerInput" placeholder="last" name="last" />
          <input type="text"onChange={this.handleChange.bind(this)}  className="form-control registerInput" placeholder="username" name="username" />
          <input type="password" onChange={this.handleChange.bind(this)}  className="form-control registerInput " placeholder="password" name="password" />
          <input type="password" onChange={this.handleChange.bind(this)} className="form-control registerInput" placeholder="Confirm password" name="Cpassword" />
          <input type="button"onClick={this.sendform.bind(this)} className="btn btn-info" value="register" />
          </div>
      </div>
      </div>
    );
   
  }
  componentDidMount(){
    $('#errRegister').hide()
  }
  handleChange(ev)
{
  this.setState({[ev.target.name]:ev.target.value })
}
async sendform()
{
      /////////////////////////////////////////////////TODOS check if there is usename in DB and how do to the IF
      $('#errRegister').hide()
  let checkUser= await fetch(`http://localhost:3000/checkuser?username=${this.state.username}`)
  let arr= await checkUser.json()
 var filterdInput= $('.registerInput').filter(function() { return $(this).val() === ''; });
  debugger
  if(this.state.Cpassword==this.state.password&&arr.length==0&&filterdInput.length==0){
    debugger
  try{
    let resp = await fetch('http://localhost:3000/adduser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      let data = await resp.json();
    
  
    }catch(err){  
      console.log(err)
    }
  }

  else if (filterdInput.length!=0){
    debugger
    this.setState({err:"You have to fill all the inputs."})
    $('#errRegister').show()
    
  }
  else if (this.state.Cpassword!=this.state.password){
    debugger
    this.setState({err:"Sorry your password not the same."})
    $('#errRegister').show()
  }
  else if (arr.length!=0){
    debugger
    this.setState({err:"The username is taken."})
    $('#errRegister').show()
  }
      debugger;
} 

}

export default Register;
