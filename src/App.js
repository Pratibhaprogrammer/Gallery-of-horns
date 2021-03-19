import React from 'react';
import Data from './data.json'
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'
import SelectedBeast from './selected-beast.js'
import FormInfo from './form-info.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: Data,
      filteredData : null,
      displayModal: false,
      favoriteBeast: {},
    }

  }
  displayAsModal = (index) => {
    this.setState({ favoriteBeast: this.state.filteredData[index], displayModal: true });
  }
  handleClose = () => {
    this.setState({ displayModal: false });
  }
  handleInput = (e) =>{this.setState({filteredData: this.state.beast.filter(value =>{
    if (e === 'all') {
      return value;
    }else {
      return value.horns === Number (e);
    }
  })
})
    
  }
   
  render() {

    return (
      <div>
        <Header />
        <FormInfo
          handleInput={this.handleInput} />
        <Main
          displayAsModal={this.displayAsModal}
          beast={this.state.beast}
          beast = {(this.state.filteredData) !== null? (this.state.filteredData) : (this.state.beast)}
        />
        <SelectedBeast
          show={this.state.displayModal}
          handleClose={()=>this.setState({displayModal:false})}
          favoriteBeast={this.state.favoriteBeast}
          title = {this.state.title}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
