import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import AppBar from "material-ui/AppBar";
import { TextField } from "material-ui";
//import TextBar from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';
import "../styles/main.css";

export class InforInitDossier extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <ul>Informations sur Dossier</ul>

          <TextField
            hintText="Entrer Le réfèrence du dossier"
            floatingLabelText="Ref"
            onChange={handleChange("Ref")}
            defaultValue={values.Ref}
          />
          <br />

          <TextField
            hintText="Entrer le code d'arrondissement"
            floatingLabelText="Code_Arrondi"
            onChange={handleChange("Code_Arrondi")}
            defaultValue={values.Code_Arrondi}
          />
          <br />

          <TextField
            hintText="Entrer La qualité de Maitre d'ouvrage"
            floatingLabelText="QualiteMO"
            onChange={handleChange("QualiteMO")}
            defaultValue={values.QualiteMO}
          />
          <br />

          <TextField
            hintText="Quelle est la situation de votre dossier ? "
            floatingLabelText="Situation"
            onChange={handleChange("Situation")}
            defaultValue={values.Situation}
          />
          <br />
          <div className="btn-group">
            <button onClick={this.continue} className="button">
              Continue
            </button>
            <button onClick={this.back} className="button1">
              Retour
            </button>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default InforInitDossier;
