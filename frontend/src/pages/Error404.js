import React from "react";
import { Component } from "react";
import { Alert } from "react-bootstrap/";

class Error404 extends Component {
  render() {
    return (
      <>
        <Alert className="col-xl-6 p-5 mt-5" variant="danger">
          Error 404
        </Alert>
      </>
    );
  }
}

export default Error404;
