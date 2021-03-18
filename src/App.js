import React from 'react';
import Data from './data.json'
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'
import SelectedBeast from './selected-beast.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: Data,
      displayModal: false,
      favoriteBeast: {},
    }

  }
  displayAsModal = (index) => {
    this.setState({ favoriteBeast: this.state.beast[index], displayModal: true });
  }
  handleClose = () => {
    console.log('jk')
    this.setState({ displayModal: false });
  }

  render() {

    return (
      <div>
        <Header />
        <Main
          displayAsModal={this.displayAsModal}
          beast={this.state.beast}
        />
        <SelectedBeast
          show={this.state.displayModal}
          handleClose={this.handleClose}
          favoriteBeast={this.state.favoriteBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
