import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
    }
  }
  clickPic = () => {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  }
  popOut = () => {
    this.props.displayAsModal(this.props.index);
  }



  render() {

    return (
      <Card style={{ width: '18rem' }} bg='danger' text='info' >
        <Card.Img
          onClick={this.popOut} src={this.props.src} />
        <Card.Body onClick={this.clickPic}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>
            Number of Horns: {this.props.horns}
          </Card.Text>
        💜 <Button variant="light">Vote!</Button>
          <p>{this.state.timesClicked}</p>
        </Card.Body>
      </Card>
    )
  }
}


// <div id="square">
// <h2>{this.props.title}</h2>
// <img src = {this.props.src} width = '200px' alt=""></img>
// <p>{this.props.description}</p>
// <button onClick={this.clickPic}>Vote!</button>
// <p>{this.state.timesClicked}</p>
// </div>

//}
export default HornedBeasts;