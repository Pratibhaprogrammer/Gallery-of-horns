import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

class FormInfo extends React.Component {
  render() {
    return (
      <Dropdown onSelect = {this.props.handleInput}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select number of horns
  </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" eventKey = 'all'> All horns</Dropdown.Item>
          <Dropdown.Item href="#/action-2" eventKey = '1' >1 horns</Dropdown.Item>
          <Dropdown.Item href="#/action-3" eventKey = '2' >2 horns</Dropdown.Item>
          <Dropdown.Item href="#/action-3" eventKey = '3' >3 horns</Dropdown.Item>
          <Dropdown.Item href="#/action-3" eventKey = '100'>100 horns</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}


export default FormInfo;