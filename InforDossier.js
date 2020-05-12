import React, { Component } from "react";
import InforInitDossier from "./InforInitDossier";
import EtatDossier from "./EtatDossier";
import InfoProjet from "./InfoProjet";
import Confirmation from "./confirmation";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import "../styles/main.css";
import Welcome from "./Welcome";
import Consultation from "./Consultation";
export class InforDossier extends Component {
  state = {
    step: 1,
    Ref: " ",
    Code_Arrondi: "",
    QualiteMO: "",
    Cat_Projet: "",
    Type_Projet: "",
    Type_Travail: "",
    Niveau_Construction: "",
    SurfaceTerrain: 0.0,
    Cout: 0.0,
    NbrRejet: 0.0,
    MiseAjourDossier: 0.0,
    Situation: " ",
    StepDossier: 0.0,
    Statut_Dossier: " ",
  };
  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  nextStep1 = () => {
    const { step } = this.state;
    this.setState({
      step: step + 5,
    });
  };

  //Proceed to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  prevStep1 = () => {
    const { step } = this.state;
    this.setState({
      step: step - 5,
    });
  };

  //handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      Ref,
      Code_Arrondi,
      QualiteMO,
      Cat_Projet,
      Type_Projet,
      Type_Travail,
      Niveau_Construction,
      SurfaceTerrain,
      Cout,
      NbrRejet,
      MiseAjourDossier,
      Situation,
      StepDossier,
      Statut_Dossier,
    } = this.state;
    const values = {
      Ref,
      Code_Arrondi,
      QualiteMO,
      Cat_Projet,
      Type_Projet,
      Type_Travail,
      Niveau_Construction,
      SurfaceTerrain,
      Cout,
      NbrRejet,
      MiseAjourDossier,
      Situation,
      StepDossier,
      Statut_Dossier,
    };

    switch (step) {
      default:
        return (
          <Welcome
            nextStep={this.nextStep}
            nextStep1={this.nextStep1}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <SplitterLayout>
            <div>
              <InforInitDossier
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                prevStep={this.prevStep}
                values={values}
              />
            </div>
            <div className="image"></div>
          </SplitterLayout>
        );
      case 3:
        return (
          <SplitterLayout>
            <div>
              <EtatDossier
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
            <div className="image"></div>
          </SplitterLayout>
        );
      case 4:
        return (
          <SplitterLayout>
            <div>
              <InfoProjet
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
            <div className="image"></div>
          </SplitterLayout>
        );
      case 5:
        return (
          <SplitterLayout>
            <div>
              <Confirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </SplitterLayout>
        );
      case 6:
        return (
          <div>
            <Consultation
              nextStep1={this.nextStep1}
              prevStep1={this.prevStep1}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
    }
  }
}

export default InforDossier;
