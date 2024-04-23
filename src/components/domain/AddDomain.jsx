import * as React from "react";
import {
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

const AddDomain = () => {
  return (
    <Container>
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
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">Description</Label>
                    <Input
                      id="description"
                      name="text"
                      type="textarea"
                      placeholder="Enter here ..."
                    />
                  </FormGroup>
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
