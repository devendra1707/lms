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
import { useContext } from "react";
import userContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/UserService";
import { doLogin } from "../../auth";

const Login = () => {
  const userContxtData = useContext(userContext);

  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, property) => {
    setLoginDetail({ ...loginDetail, [property]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (loginDetail.email.trim() == "" || loginDetail.password.trim() == "") {
      //   toast.error("Email or Password  is required !!");
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        //save the data to localstorage
        doLogin(data, () => {
          console.log("login detail is saved to localstorage");
          //redirect to user dashboard page
          //   console.log("test username :: " + data.username);
          //   userContxtData.setUser({
          //     data: data.username,
          //     login: true,
          //   });
          navigate("/");
        });

        // toast.success("Login Success");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong  on sever !!");
        }
      });
  };

  const handleReset = () => {
    setLoginDetail({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" outline>
            <CardHeader className="text-center">
              <h3>Login Here !!!</h3>
            </CardHeader>
            <CardBody>
              <form action="">
                <FormGroup>
                  <FormGroup>
                    <Label for="email">Email ID</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Enter here ..."
                      type="email"
                      value={loginDetail.email}
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
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>
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

export default Login;
