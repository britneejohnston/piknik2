import React, {Component} from 'react';
import Item from './Item';
import $ from 'jquery';

class Explore extends Component { 
  constructor(props) {
    super(props);
    this.state = { groceries: [] }
  }   

  componentDidMount() {
    $.ajax({
      url: '/explore',
      type: 'GET'
    }).done( items => {
      this.setState({groceries: items});
    }).fail( msg => {
    });
  }
  render() {
    let groceries = this.state.groceries.map( item => {
      return(<Item key={item._id} {...item} />);
    });

  return(
     <div className="center nav-wrapper">
       <h2>Explore</h2>
       <table className="white-text">
         <thead>
           <tr>
            <th>Categories</th>
            <th>Product</th>
            <th>Price</th>
            <th>Select</th>
           </tr>
        </thead>
         <tbody>
          {groceries}
         </tbody>
       </table>
     </div>
   )
 }
}  

export default Explore;