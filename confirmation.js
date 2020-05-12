import React from "react";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
//import Form from "react-bootstrap/Form";
//import Col from "react-bootstrap-columns";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Button from "react-bootstrap-Buttons";
import { Row } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { RaisedButton, ListItem, List } from "material-ui";
import "../styles/main.css";
import STRESS from "../styles/STRESS.PNG";
import TOOLATE from "../styles/TOOLATE.PNG";
import PROB from "../styles/PROB.PNG";
import GOOD from "../styles/GOOD.PNG";
import { Eclipse } from "react-loading-io";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      Test: false,
      formData: {
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
      },
      result: [],
      items: [],
    };
  }
  handleChange = (event) => {
    const {
      values: {
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
      },
    } = this.props;
    var formData = this.state.formData;
    formData["Ref"] = Ref;
    formData["Code_Arrondi"] = Code_Arrondi;
    formData["QualiteMO"] = QualiteMO;
    formData["Cat_Projet"] = Cat_Projet;
    formData["Type_Projet"] = Type_Projet;
    formData["Type_Travail"] = Type_Travail;
    formData["Niveau_Construction"] = Niveau_Construction;
    formData["SurfaceTerrain"] = SurfaceTerrain;
    formData["Cout"] = Cout;
    formData["NbrRejet"] = NbrRejet;
    formData["MiseAjourDossier"] = MiseAjourDossier;
    formData["Situation"] = Situation;
    formData["StepDossier"] = StepDossier;
    formData["Statut_Dossier"] = Statut_Dossier;
    this.setState({
      formData,
    });
    this.handlePredictClick();
    // this.risque();
  };
  risque = (e) => {
    var today = new Date();
    var create = document.getElementById("date").value;
    var T = today.getFullYear();
    var r = T - create;
    var stress = document.createElement("img");
    stress.src = STRESS;
    stress.width = 50;
    var late = document.createElement("img");
    late.src = TOOLATE;
    late.width = 50;
    var prob = document.createElement("img");
    prob.src = PROB;
    prob.width = 50;
    var good = document.createElement("img");
    good.src = GOOD;
    good.width = 50;
    var note = document.getElementById("note");
    if (r === 1) {
      note.innerHTML = "vous devez relance votre dossier le plus vite <br/>";
      note.appendChild(stress);
    } else if (r === 2) {
      note.innerHTML =
        "Il fort probable que vous aurez un rejet à votre dossier<br/>";
      note.appendChild(prob);
    } else if (r > 2) {
      note.innerHTML =
        "Apporter une excuse de votre retard sinon le dossier sera rejeter<br/>";
      note.appendChild(late);
    } else if (r < 1) {
      note.innerHTML =
        "Continue dans votre démarche, votre temps est optimal <br/>";
      note.appendChild(good);
    }
  };

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    var x = document.getElementById("laoding");
    x.style.display = "block";
    console.log(formData);
    console.log(typeof formData);
    console.log(JSON.stringify(formData));
    this.setState({ isLoading: true });
    fetch("http://127.0.0.1:5000/prediction/", {
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
            Test: true,
          },

          console.log(response.result[1]),
          this.showlaoding(),
          console.log(this.state.isLoading)
        );
      });
  };

  showlaoding = () => {
    var x = document.getElementById("laoding");
    if (this.state.Test === true) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  handleCancelClick = (event) => {
    this.setState({ result: [] });
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    const items = [];

    for (const [index, value] of result.entries()) {
      items.push(<li key={index}>.{value}</li>);
    }
    // Effectuer un filtre dans le tableau pour éliminer les redondances
    var cache = {};
    const items1 = items.filter(function (elem, index, array) {
      return cache[elem.index] ? 0 : (cache[elem.index] = 1);
    });
    // Pour faire afficher les élèments d'une liste de items1
    const items11 = [];

    for (const [index, value] of items1.entries()) {
      items11.push(<li key={index}>{value}</li>);
    }
    const {
      values: {
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
      },
    } = this.props;

    return (
      <SplitterLayout>
        <div>
          <MuiThemeProvider>
            <React.Fragment>
              <ul>Confirmer Les données inserées</ul>
              <List>
                <ListItem
                  primaryText="Réfèrence"
                  secondaryText={Ref}
                  name="Ref"
                  value={formData.Ref}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Code d'Arrondissement"
                  secondaryText={Code_Arrondi}
                  name="Code_Arrondi"
                  value={formData.Code_Arrondi}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Qualité de Maître d'ouvrage"
                  secondaryText={QualiteMO}
                  name="QualiteMO"
                  value={formData.QualiteMO}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Catégorie du project"
                  secondaryText={Cat_Projet}
                  name="Cat_Projet"
                  value={formData.Cat_Projet}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Type du Projet"
                  secondaryText={Type_Projet}
                  name="Type_Projet"
                  value={formData.Type_Projet}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Type du travail à effectuer"
                  secondaryText={Type_Travail}
                  name="Type_Travail"
                  value={formData.Type_Travail}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Le niveau de Construction"
                  secondaryText={Niveau_Construction}
                  name="Niveau_Construction"
                  value={formData.Niveau_Construction}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="La surface de votre champs du travail "
                  secondaryText={SurfaceTerrain}
                  name="SurfaceTerrain"
                  value={formData.SurfaceTerrain}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="cout de votre projet"
                  secondaryText={Cout}
                  name="Cout"
                  value={formData.Cout}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Nombre des rejets de votre projet"
                  secondaryText={NbrRejet}
                  name="NbrRejet"
                  value={formData.NbrRejet}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Nombre des fois que vous avez effectué la mise à jour de votre dossier"
                  secondaryText={MiseAjourDossier}
                  name="MiseAjourDossier"
                  value={formData.MiseAjourDossier}
                  onChange={this.handleChange}
                />
                <ListItem
                  primaryText="La situation de votre dossier est:"
                  secondaryText={Situation}
                  name="Situation"
                  value={formData.Situation}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Le nombre de fois où vous avez reconstitué votre dossier est: "
                  secondaryText={StepDossier}
                  name="StepDossier"
                  value={formData.StepDossier}
                  onChange={this.handleChange}
                />

                <ListItem
                  primaryText="Le statut de votre dossier"
                  secondaryText={Statut_Dossier}
                  name="Statut_Dossier"
                  value={formData.Statut_Dossier}
                  onChange={this.handleChange}
                />
              </List>
              <br />
              <div class="btn-group">
                <button
                  onClick={this.handleChange}
                  disabled={isLoading}
                  className="button"
                >
                  {isLoading ? "Faire prediction" : "Prediction"}
                </button>
                <button onClick={this.back} className="button1">
                  Retour
                </button>
              </div>
            </React.Fragment>
          </MuiThemeProvider>
        </div>
        <div>
          <p color="red">
            Les remarques qui sont préfèrables de revoir au cas de besoin sont :
          </p>
          <br />
          <di id="laoding" className="f">
            <Eclipse size={64} />
          </di>
          <br />
          {result === "" ? null : (
            <Row>
              <div className="tex">
                <h5 id="result">{items}</h5>
              </div>
            </Row>
          )}
          <br />
          <div id="note" className="footer"></div>
        </div>
      </SplitterLayout>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};
export default App;
