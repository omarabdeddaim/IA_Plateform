import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { TextField, RaisedButton } from "material-ui";
//import TextBar from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';
import "../styles/main.css";
import RokhasLogo from "../styles/RokhasLogo.PNG";

export class Welcome extends Component {
  constructor() {
    super();
    this.state = { first: true };
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.nextStep1();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <ul>Simulateur Rokhas Plateforme</ul>
          <br />
          <div>
            <img src={RokhasLogo} alt="this is car image" />
          </div>
          <br />
          <div class="btn-group">
            <button onClick={this.continue} className="button2">
              Simulateur
            </button>
          </div>
          <div class="btn-group">
            <button onClick={this.handleClick} className="button3">
              Consultation
            </button>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Welcome;
