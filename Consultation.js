import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { TextField, RaisedButton } from "material-ui";
//import TextBar from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';
import "../styles/main.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.css";
export class Consultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      formData: {
        id: 0,
      },
      result: [],
      items: [],
    };
  }
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData,
    });
  };
  handlePredictClick = (event) => {
    const formData = this.state.formData;
    console.log(formData);
    this.setState({ isLoading: true });
    fetch("http://127.0.0.1:5000/consulter/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState(
          {
            result: response.result,
            isLoading: false,
          },
          console.log(response)
        );
      });
  };
  handleCancelClick = (event) => {
    this.setState({ result: "" });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.prevStep1();
  };

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    const items = [];

    for (const [index, value] of result.entries()) {
      items.push(<li key={index}>.{value}</li>);
    }
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <ul>Consultation Dossiers</ul>
          <br />
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Ecrire L'identifiant du dossier</Form.Label>
                <input
                  type="number"
                  placeholder="id"
                  name="id"
                  value={formData.id}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
          </Form>
          <div>
            {result === "" ? null : (
              <Row>
                <Col className="result-container">
                  <h5 id="result">{items}</h5>
                </Col>
              </Row>
            )}
          </div>
          <br />
          <div class="btn-group">
            <button onClick={this.handleClick} className="button4">
              Retour
            </button>
          </div>
          <div class="btn-group">
            <button
              disabled={isLoading}
              onClick={!isLoading ? this.handlePredictClick : null}
              className="button3"
            >
              {isLoading ? "Faire une consultation" : "Consulter"}
            </button>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Consultation;
