import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
  render(){
    return (

      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Dialog>
            <Modal.Body> <img src = {this.props.favoriteBeast.image_url} width ={450}/> </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;