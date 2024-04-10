import React from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";

const Box = ({ title = "", children }: { title?: string; children: any }) => {
  return (
    <Col>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          {title.length > 0 && (
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
          )}
          <Modal.Body>{children}</Modal.Body>
        </Modal.Dialog>
      </div>
    </Col>
  );
};

export default Box;
