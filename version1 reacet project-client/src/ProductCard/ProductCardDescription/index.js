import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

class ProductCardDescription extends React.Component {
  state={
    follow:faThumbsUp
  }
  constructor(props) {
    super(props);
  }
  async followfunc(ev){
    debugger;
   this.setState({follow:faThumbsDown})
  }

  render() {
    let {
      productName,
      description,
      rating,
      url
    } = this.props;

    return (
      <div className='product-card-description-box'>
        <div className='product-card-name'>
	  {productName}
	</div>
        <p className='product-card-description'>
	  {description}
	</p>
        <div className='row'>

        <div className=" far fa-heart fa-2x col-sm-6" onClick={this.followfunc.bind(this)}>
          <FontAwesomeIcon  icon={this.state.follow} />
          </div>
   
          <a className='buy-button ' href={url}>Buy now</a>
      
        
	</div>
      </div>
    );
  }
  
}

export default ProductCardDescription;
