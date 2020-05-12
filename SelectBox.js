import React from "react";
const options = ["PPT", "GPJ"];
export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "Select an Option" };
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor="select2">TYPE DE Projet </label>
        <br />
        <select
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          className="form-control"
        >
          {options.map(option => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
