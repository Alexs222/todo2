import react, { Component } from 'react';
import React from 'react';

import './item-status-filter.scss';

export default class ItemStatusFilter extends Component {


  render() {

    return (
      <div className="btn-group">
        <button type="button"
                className='btn btn-info'
                // onClick={onChangeAll}
                >
                All</button>
        <button type="button"
                className='btn btn-outline-secondary'
                // onClick={onChangeActive}
                >Active</button>
        <button type="button"
                className='btn btn-outline-secondary'
                // onClick={onChangeDone}
                >Done</button>
      </div>
    );
  };
};