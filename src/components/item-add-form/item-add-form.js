import React, { Component } from "react";

import "./item-add-form.scss";

export default class ItemAddForm extends Component {
  render() {
    const {onItemAdded} = this.props;

    return (
      <span className="item-add-form d-flex">
        <button
          type="button"
          className="item-add-form-button btn btn-outline-danger btn-sm"
          onClick={() => onItemAdded('Hello world')}>
          Add item
        </button>
      </span>
    );
  }
}
