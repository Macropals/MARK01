import React, { useState, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../constants";



const ConfirmRemovalModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
    return 1
  };

  const deleteEntity = (id,entity) => {
    axios.delete(API_URL +"/del/"+{entity}+"/"+id).then(() => {
      props.resetState()
      toggle()
    });
  };

  return (
    <Fragment>
      <Button color="danger" onClick={toggle}>
        Remove
      </Button>
      <Modal style={{ opacity: 1 }} show={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Do you really want to delete this device?
        </ModalHeader>

        <ModalFooter>
          <Button type="button" onClick={toggle} >
            Cancel
          </Button>
          <Button
            type="button"
            color="primary"
            onClick={() => deleteEntity(props.id,props.entity)}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ConfirmRemovalModal;
