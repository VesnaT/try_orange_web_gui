import React from "react";
import Modal from "react-bootstrap/Modal";

const Widget = ({
  title = "",
  info = "",
  children,
}: {
  title?: string;
  info?: string;
  children: any;
}) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>

        <Modal.Footer>
          <p>{info}</p>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Widget;
