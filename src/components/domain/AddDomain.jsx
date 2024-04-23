import * as React from "react";
import { useNavigate } from "react-router-dom";
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
import { addDomains } from "../../services/domain/DomainService";

const AddDomain = () => {
  const navigate = useNavigate();
  const [domainData, setDomainData] = useState({
    title: "",
    description: "",
  });

  const fieldChange = (event, property) => {
    setDomainData({ ...domainData, [property]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    addDomains(domainData)
      .then((data) => {
        // toast.success("country Added Successfully :: ");
        navigate("/domain");
      })
      .catch((error) => {
        // toast.error("Failed to Add country. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setDomainData({
      title: "",
      description: "",
    });
  };

  return (
    <Container>
      {/* {JSON.stringify(domainData)} */}
      <Row className="mt-5">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" outline>
            <CardHeader className="text-center">
              <h3>Add Domain</h3>
            </CardHeader>
            <CardBody>
              <form action="">
                <FormGroup>
                  <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter here ..."
                      type="text"
                      onChange={(e) => fieldChange(e, "title")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">Description</Label>
                    <Input
                      id="description"
                      name="text"
                      type="textarea"
                      placeholder="Enter here ..."
                      onChange={(e) => fieldChange(e, "description")}
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

export default AddDomain;
