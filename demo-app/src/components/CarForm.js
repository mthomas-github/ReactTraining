import React from "react";
import { useForm } from "../hooks/useForm";
import PropTypes from "prop-types";
import { Form, Button, Col } from "react-bootstrap";

export const CarForm = ({ buttonText, onSubmitCar }) => {
  const [carForm, change, resetCarForm] = useForm({
    make: "",
    model: "",
    year: 1900,
    color: "",
    price: 0
  });

  const submitCar = () => {
    onSubmitCar({ ...carForm });
    resetCarForm();
  };

  return (
    <Form>
      <div>
        <Form.Group>
          <Form.Label column sm="1" htmlFor="make-input">
            Make:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              id="make-input"
              name="make"
              value={carForm.make}
              onChange={change}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label column sm="1" htmlFor="model-input">
            Model:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              id="model-input"
              name="model"
              value={carForm.model}
              onChange={change}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label column sm="1" htmlFor="year-input">
            Year:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              id="year-input"
              name="year"
              value={carForm.year}
              onChange={change}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label column sm="1" htmlFor="color-input">
            Color:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              id="color-input"
              name="color"
              value={carForm.color}
              onChange={change}
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label column sm="1" htmlFor="price-input">
            Price:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              id="price-input"
              name="price"
              value={carForm.price}
              onChange={change}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Col sm="10">
            <Button variant="success" type="button" onClick={submitCar}>
              {buttonText}
            </Button>
          </Col>
        </Form.Group>
      </div>
    </Form>
  );
};

CarForm.defaultProps = {
  buttonText: "Add Car"
};

CarForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitCar: PropTypes.func.isRequired
};
