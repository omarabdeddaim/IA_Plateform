import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { TextField, RaisedButton } from "material-ui";
//import TextBar from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';
import "../styles/main.css";

export class EtatDossier extends Component {
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
          <ul>Etat du Dossier</ul>
          <br />
          <TextField
            hintText="Combien de fois votre projet était rejeté ?"
            floatingLabelText="NbrRejet"
            onChange={handleChange("NbrRejet")}
            defaultValue={values.NbrRejet}
          />
          <br />
          <TextField
            hintText="Combien de fois votre projet était mise à jour ? "
            floatingLabelText="MiseAjourDossier"
            onChange={handleChange("MiseAjourDossier")}
            defaultValue={values.MiseAjourDossier}
          />
          <br />
          <TextField
            hintText="Quel est le nombre des fois où vous avez reconstitué votre dossier ? "
            floatingLabelText="Nbr de reconsitution"
            onChange={handleChange("StepDossier")}
            defaultValue={values.StepDossier}
          />
          <br />
          <TextField
            hintText="Quelle est le statut de votre dossier ? "
            floatingLabelText="Statut_Dossier"
            onChange={handleChange("Statut_Dossier")}
            defaultValue={values.Statut_Dossier}
          />
          <br />
          <div class="btn-group">
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
const styles = {
  button: {
    margin: 15,
  },
};
export default EtatDossier;
