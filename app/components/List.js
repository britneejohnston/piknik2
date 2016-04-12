import React, { Component } from 'react';
import Item from './Item';
import $ from 'jquery';

class List extends Component {
	constructor(props) {
    super(props); 
  }

	render() {
    return(<div className="shopList">
            <div id="list">
              <h5 className='center text'>Shopping List:</h5>
                {this.props.Item}
               <br/>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                </table>
                <br/>
                <br/>  
                <br/>
                <br/>  
                <br/>
                <br/>  
              <button className='btn' id='listHeader'>Review Order</button>  
             </div>
           </div>
            // <button onClick={() => this.props.deleteItem(this.props.id)} className='btn' id='listHeader'>Delete Item</button>  
          );
	       }
        } 

export default List

