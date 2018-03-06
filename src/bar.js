'use strict';

import React from 'react';
import classnames from 'classnames';

export class Bar extends React.Component {
  render() {
    var percentage = (this.props.currentSlide + this.props.slidesToShow) / this.props.slideCount;
    var calcWidth = this.props.listWidth * percentage;
    var width = calcWidth > this.props.listWidth ? this.props.listWidth : calcWidth;
    return (
      <div className={this.props.barClass}>
        <div className={this.props.barThumbClass} style={{display: 'block', width }} />
      </div>
    );
  }
}
