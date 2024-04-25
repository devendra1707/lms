import * as React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../services/UserService";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [selectedId, setSelectedId] = useState("");
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    if (property === "id") {
      setSelectedId(event.target.value);
    } else {
      setData({ ...data, [property]: event.target.value });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!data.name || !data.email || !data.password) {
      setError("All fields are required");
      return;
    }

    console.log(data);

    // call server api for sending data
    signUpUser(selectedId, data)
      .then((resp) => {
        toast.success("User is Registered Successfully !!!");
        setData({
          name: "",
          email: "",
          password: "",
        });
        setSelectedId("");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        toast.error("Something went wrong !!!");
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  const handleReset = () => {
    setData({
      name: "",
      email: "",
      password: "",
    });
    setSelectedId("");
  };
  return (
    <Container>
      {/* {JSON.stringify(data)}
      {JSON.stringify(selectedId)} */}
      <Row className="mt-5">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" outline>
            <CardHeader className="text-center">
              <h3>Register Here !!!</h3>
            </CardHeader>
            <CardBody>
              <form action="">
                <FormGroup>
                  <FormGroup>
                    <Label for="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter here ..."
                      type="text"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email ID</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Enter here ..."
                      type="email"
                      value={data.email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Enter here ..."
                      type="password"
                      value={data.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <Container className="display-flex text-center">
                    <FormGroup check inline>
                      <Input
                        name="radio2"
                        type="radio"
                        onChange={(e) => handleChange(e, "id")}
                        value="502"
                      />
                      <Label check>TEACHER</Label>
                    </FormGroup>
                    <FormGroup check inline label="Doctor">
                      <Input
                        name="radio2"
                        type="radio"
                        onChange={(e) => handleChange(e, "id")}
                        value="501"
                      />
                      <Label check>STUDENT</Label>
                    </FormGroup>
                  </Container>
                  <Container className="text-center">
                    <Button
                      variant="contained"
                      color="primary"
                      outline
                      onClick={handleFormSubmit}
                    >
                      SUBMIT
                    </Button>
                    <Button
                      outline
                      variant="contained"
                      color="secondary"
                      className="ms-2"
                      type="reset"
                      onClick={handleReset}
                    >
                      RESET
                    </Button>
                  </Container>
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
