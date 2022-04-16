import React, { Component } from "react";

import "./item-add-form.scss";

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      // e.preventDefault();
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });  
  };

  render() {

    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
              className="form-control"
              placeholder={'What needs to be done'}
              onChange={this.onLabelChange}
              value={this.state.label}
        />
        <button
          type="button"
          className="item-add-form-button btn btn-outline-danger btn-sm"
          onClick={this.onSubmit}
          >
          Add item
        </button>
      </form>
    );
  }
}
