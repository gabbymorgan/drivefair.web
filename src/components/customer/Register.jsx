import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Col, Row } from "reactstrap";

import {
  Button,
  Form,
  Input,
  ModalBody,
  Label,
  InputErrorMessage,
} from "../styles";
import { newCustomer } from "../../actions/customer";
import { loadState } from "../../services/stateManagement";
import {
  passwordValidation,
  emailValidation,
  confirmPasswordValidation,
} from "../../services/inputValidation";

class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phoneNumber: "",
    street: "",
    unit: "",
    city: "",
    state: "",
    zip: "",
    formErrors: {},
  };

  componentDidMount() {
    const loadableProperties = [
      "email",
      "fullName",
      "phoneNumber",
      "street",
      "unit",
      "city",
      "state",
      "zip",
    ];
    loadState(this, loadableProperties);
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === "phoneNumber") {
      if (value.match(/[^0-9\-]{1}/)) return
      if (value.match(/^[0-9]{3}$/) || value.match(/^[0-9]{3}-[0-9]{3}$/)) {
        value += "-";
      }
    }

    localStorage.setItem(name, value);

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password, fullName, phoneNumber, address } = this.state;

    const formErrors = {
      email: emailValidation(email),
      password: passwordValidation(password),
      confirmPassword: confirmPasswordValidation(confirmPasswordValidation),
    };

    if (formErrors.email || formErrors.password) {
      this.setState({ formErrors });
      return;
    }

    this.props.newCustomer({
      email,
      password,
      fullName,
      phoneNumber,
      address,
    });
  }

  render() {
    return (
      <Form style={{ width: "80%" }}>
        <Row>
          <Col xs="12" md="6">
            <FormGroup>
              <Label to="email">Email</Label>
              <Input
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
              <InputErrorMessage>
                {this.state.formErrors.email || " "}
              </InputErrorMessage>
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup>
              <Label to="fullName">Full Name</Label>
              <Input
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleChange.bind(this)}
              />
              <InputErrorMessage>
                {this.state.formErrors.fullName}
              </InputErrorMessage>
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup>
              <Label to="password">Password</Label>
              <Input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
              />
              <InputErrorMessage>
                {this.state.formErrors.password}
              </InputErrorMessage>
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup>
              <Label to="confirmPassword">Conrfirm Password</Label>
              <Input
                name="confirmPassword"
                type="password"
                onChange={this.handleChange.bind(this)}
              />
              <InputErrorMessage>
                {this.state.formErrors.confirmPassword}
              </InputErrorMessage>
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup>
              <Label to="phoneNumber">Phone Number</Label>
              <Input
                name="phoneNumber"
                type="tel"
                maxLength="12"
                value={this.state.phoneNumber}
                onInput={this.handleChange.bind(this)}
              />
              <InputErrorMessage>
                {this.state.formErrors.phoneNumber}
              </InputErrorMessage>
            </FormGroup>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Button color="tertiary" onClick={(e) => this.handleSubmit(e)}>
            Sign Up
          </Button>
        </Row>
      </Form>
    );
  }
}

export default connect(null, { newCustomer })(Register);
