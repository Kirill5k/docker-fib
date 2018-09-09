import React, { Component } from "react";
import fibService from "../services/fibService";
import IndexList from "../components/IndexList";
import ValueList from "../components/ValueList";
import IndexForm from "../components/IndexForm";

class MainPage extends Component {
  state = {
    seendIndexes: [],
    values: {},
    index: ""
  };

  componentDidMount() {
    this.updateIndexes();
    this.updateValues();
  }

  get hasIndexes() {
    return Boolean(this.state.seendIndexes.length);
  }

  get hasValues() {
    return Boolean(Object.keys(this.state.values).length);
  }

  updateValues = () => fibService.getValues().then(values => this.setState({ values }));
  updateIndexes = () => fibService.getIndexes().then(seendIndexes => this.setState({ seendIndexes }));
  calculateValue = (index) => fibService.calculateValue(index).then(this.updateIndexes).then(this.updateValues);

  render() {
    const { seendIndexes, values } = this.state;
    return (
      <div>
        <IndexForm onSubmit={this.calculateValue} />
        {this.hasIndexes && <IndexList indexes={seendIndexes} />}
        {this.hasValues && <ValueList values={values} />}
      </div>
    );
  }
}

export default MainPage;
