import React, { useState, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../constants";



const ConfirmRemovalModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
    console.log(modal)
    return 1
  };

  const deleteDevice = (id) => {
    axios.delete(API_URL + id).then(() => {
      props.resetState()
      toggle()
    });
  };

  return (
    <Fragment>
      <Button color="danger" onClick={toggle}>
        Remove
      </Button>
      <Modal style={{opacity:1}} show={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Do you really want to delete this device?
        </ModalHeader>

        <ModalFooter>
          <button type="button" onClick={toggle}>
            Cancel
          </button>
          <Button
            type="button"
            color="primary"
            onClick={() => deleteDevice(props.id)}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ConfirmRemovalModal;
