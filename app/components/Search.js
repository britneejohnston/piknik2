import React, {Component} from 'react';
import Item from './Item';
import $ from 'jquery';
class Search extends Component {
    constructor(props){
        super(props);
        this.getSearch = this.getSearch.bind(this);
        this.submitForm= this.submitForm.bind(this);
        this.state = { groceries: [] };
    }
    getSearch(e){
    	  e.preventDefault();
        $.ajax({
            url: '/search',
            type: 'GET',
            dataType: 'JSON',
            data: {search: this.refs.name.value}
        }).done( groceries => {
          this.setState({ groceries: groceries });
        }).fail( msg=> {
            console.log(msg)
        });
    }
    submitForm(e){
      e.preventDefault();
      let groceries = this.state.groceries;
      console.log('first' + groceries); 
      let output = groceries.unshift({ name: this.refs.name.value });
      this.refs.name.value = '';
      console.log(output); 
      // this.setState({ category: items, nextID: this.nextID(this.state.nextID) });
    }
    render(){
    	  let groceries = this.state.groceries.map( item => {
    	  	return(<Item key={item._id} {...item} />);
    	  })
        return(
        <div className="container center nav-wrapper">
          <form onSubmit={this.getSearch}>
            <div className="input-field">
              <input id="search" type="search" placeholder="Search for items" ref="name"/>
              <label for="search"><i className="material-icons">search</i></label>
            </div>
          </form>
            <br/>
            <br/>
            <br/>
          <table className="white-text">
            <thead>
              <tr>
                <p>Search Results:</p>
                <th>Category</th>
                <th>Item</th>
                <th>Price</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {groceries}
            </tbody>
          </table>
        </div>
        );
    }
}
export default Search;
