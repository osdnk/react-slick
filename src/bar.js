'use strict';

import React from 'react';
import classnames from 'classnames';

export class Bar extends React.Component {
  render() {
    var range = this.props.slideCount - this.props.slidesToShow;
    var position = this.props.currentSlide;
    var percentage = position / range;
    var width = this.props.trackWidth / (range + 1);
    var translate = percentage * (this.props.trackWidth - width);

    return (
      <div className={this.props.barClass} style={{display: 'block'}}>
        <div className={this.props.barThumbClass} style={{display: 'block', width, transform: `translateX(${translate}px)` }} />
      </div>
    );
  }
}
