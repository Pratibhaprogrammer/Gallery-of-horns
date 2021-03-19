import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns'
import HornedBeasts from './horned-beasts';



//to do import card columns
class Main extends React.Component {
  
  render() {
    // console.log(this.props.beast)
    return (
      <CardColumns>
      <div className = 'beast-container'>
        {this.props.beast.map((item, idx) => (
          <div key={item.title} >
            < HornedBeasts
              index={idx}
              src={item.image_url}
              title={item.title}
              description={item.description}
              displayAsModal={this.props.displayAsModal}
            />
          </div>
        ))}
      </div>
      </CardColumns>
    )
  }
}


export default Main;