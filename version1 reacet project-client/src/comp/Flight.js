import React, { Component } from 'react';
import io from 'socket.io-client';
import Card from '../Card';
import ProductCardDescription from '../ProductCard/ProductCardDescription';
import ProductCardGallery from '../ProductCard/ProductCardGallery';
import PriceTag from '../ProductCard/PriceTag';
import '../ProductCard/styles.scss';

// var socket = io('http://localhost:8888');
var  allimg=[];
var likeCallback;
class Flight extends Component {
  render() {
    debugger;
    return (
         <Card
        className='product-card col-sm-3'
      >
        <ProductCardGallery
          photos={allimg}
        />
        <PriceTag
          price={''+this.props.flight.price+"$"}
        />
        <ProductCardDescription
          productName={this.props.flight.destination}
          description={this.props.flight.description}
          rating={this.props.flight.followers}
          url={this.props.flight.description}
         
        />  
             
    
      </Card>
    );
  }
  
}
  
//   componentDidMount(){
//     $('#alertLogin').hide()
//   }

//   handleChange(ev)
// {
//   this.setState({[ev.target.name]:ev.target.value })
// }
// async sendform()
// {
//   debugger;
//   try{
//     let resp = await fetch('http://localhost:3000/login', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(this.state)
//       });
//       let data = await resp.json();

//       if(data.length==0){
//       this.setState({err:"sorry worng password or user name try again"})
//       $('#alertLogin').show()
//     }
//       else if(data[0].isAdmin=='true'){
//         ////////admin page !!!!!
//       }
     
//      ////////////////////////////TODOS session   
//     }catch(err){
//       console.log(err)
    
//   }
// } 




export default Flight;
