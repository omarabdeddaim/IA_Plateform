import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { TextField, RaisedButton } from "material-ui";
//import TextBar from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';

export class InfoProjet extends Component {
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
          <ul>Information sur le projet</ul>
          <br />
          <TextField
            hintText="Quelle est la catégorie de votre projet ?"
            floatingLabelText="Cat_Projet"
            onChange={handleChange("Cat_Projet")}
            defaultValue={values.Cat_Projet}
          />
          <br />

          <TextField
            hintText="Quelle est le type de votre projet ? "
            floatingLabelText="Type_Projet"
            onChange={handleChange("Type_Projet")}
            defaultValue={values.Type_Projet}
          />
          <br />

          <TextField
            hintText="Quel est la nature du travail à effectuer ?"
            floatingLabelText="Type_Travail"
            onChange={handleChange("Type_Travail")}
            defaultValue={values.Type_Travail}
          />
          <br />

          <TextField
            hintText="Donne le niveau de votre contruction ou où vous allez effectuer le travail? "
            floatingLabelText="Niveau_Construction"
            onChange={handleChange("Niveau_Construction")}
            defaultValue={values.Niveau_Construction}
          />
          <br />
          <TextField
            hintText="La surface de votre milieu de travail. "
            floatingLabelText="SurfaceTerrain"
            onChange={handleChange("SurfaceTerrain")}
            defaultValue={values.SurfaceTerrain}
          />
          <br />
          <TextField
            hintText="Le cout du travail à effectuer est : "
            floatingLabelText="Cout"
            onChange={handleChange("Cout")}
            defaultValue={values.Cout}
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
export default InfoProjet;
