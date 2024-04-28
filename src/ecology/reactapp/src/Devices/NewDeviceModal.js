import React, { useState, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "react-bootstrap";
import NewDeviceForm from "./NewDeviceForm";

const NewDeviceModal = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Fragment>
      <Button color="danger" onClick={toggle}>
        {props.create? "Add": "Edit"}
      </Button>

      <Modal show={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>

        <ModalBody>
          <NewDeviceForm
            create={props.create}
            resetState={props.resetState}
            toggle={toggle}
            device={props.device}
          />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default NewDeviceModal;