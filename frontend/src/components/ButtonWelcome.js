import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ButtonWelcome = () => {
  return (
    <Button eventkey={2} as={Link} to="/Cities" variant="outline-info">
      Search Cities !!
    </Button>
  );
}
export default ButtonWelcome;
