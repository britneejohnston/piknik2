import React from 'react'

class Item extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.category}</td>
        <td>{this.props.product}</td>
        <td>${this.props.price}</td>
      </tr>
    )
  }
}

export default Item;
