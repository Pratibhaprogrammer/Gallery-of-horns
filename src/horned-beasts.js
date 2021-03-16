import React from 'react';
class HornedBeasts extends React.Component {
  render() {
    // console.log('props of the square:', this.props);
    return(
      <div id="square">
        <h2>{this.props.title}</h2>
        <img src = {this.props.src} width = '200px' alt=""></img>
        <p>{this.props.description}</p>
      </div>
    )
  }
}


export default HornedBeasts;