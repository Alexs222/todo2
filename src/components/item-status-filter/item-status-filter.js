import react, { Component } from 'react';
import React from 'react';

import './item-status-filter.scss';

export default class ItemStatusFilter extends Component {

  state = {
    classAll: 'btn btn-info',
    classActive: 'btn btn-outline-secondary',
    classDone: 'btn btn-outline-secondary'
  }


  // onChangeAll = () => {
  //   this.setState({
  //     classAll: 'btn btn-info',
  //     classActive: 'btn btn-outline-secondary',
  //     classDone: 'btn btn-outline-secondary'
  
  //   })
  // }

  // onChangeActive = () => {
  //   this.setState({
  //     classActive: 'btn btn-info',
  //     classAll: 'btn btn-outline-secondary',
  //     classDone: 'btn btn-outline-secondary'
  //   })
  // }

  // onChangeDone = () => {
  //   this.setState({
  //     classDone: 'btn btn-info',
  //     classAll: 'btn btn-outline-secondary',
  //     classActive: 'btn btn-outline-secondary',
  //   })
  // }

  render() {

    const {onChangeAll, onChangeActive, onChangeDone} = this.props;

    // let classNames = 'todo-list-item';
    // if (done) {
    //   classNames += ' done'
    // };
    // if (important){
    //   classNames += ' important'
    // };

    return (
      <div className="btn-group">
        <button type="button"
                className={this.state.classAll}
                onClick={onChangeAll}>
                All</button>
        <button type="button"
                className={this.state.classActive}
                onClick={onChangeActive}
                >Active</button>
        <button type="button"
                className={this.state.classDone}
                onClick={onChangeDone}
                >Done</button>
      </div>
    );
  };
};