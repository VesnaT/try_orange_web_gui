import React from "react";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const StDiv = styled.div`
  display: inline-block;
  border: 1px solid;
  border-radius: 8px;
  border-color: rgba(0, 0, 0, 0.17);
  min-width: 10rem;
  width: 100%;
  margin: 0 0 1rem 0;
`;
const StHeader = styled.h4`
  border-bottom: 1px solid;
  padding: 1rem;
  border-color: rgba(0, 0, 0, 0.17);
`;
const StBody = styled.div`
  padding: 1rem;
`;

const Box = ({ title = "", children }: { title?: string; children: any }) => {
  return (
    <Col>
      <StDiv>
        {title.length > 0 && <StHeader>{title}</StHeader>}
        <StBody>{children}</StBody>
      </StDiv>
    </Col>
  );
};

export default Box;
