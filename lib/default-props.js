'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    className: '',
    accessibility: true,
    adaptiveHeight: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: '50px',
    cssEase: 'ease',
    customPaging: function customPaging(i) {
        return _react2.default.createElement(
            'button',
            null,
            i + 1
        );
    },
    dots: false,
    dotsClass: 'slick-dots',
    barClass: 'slick-bar',
    barThumbClass: 'slick-bar-thumb',
    draggable: true,
    easing: 'linear',
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: false,
    pauseOnHover: true,
    responsive: null,
    rtl: false,
    slide: 'div',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    variableWidth: false,
    vertical: false,
    waitForAnimate: true,
    afterChange: null,
    beforeChange: null,
    edgeEvent: null,
    // init: function hook that gets called right before InnerSlider mounts
    init: null,
    swipeEvent: null,
    // nextArrow, prevArrow should react componets
    nextArrow: null,
    prevArrow: null,
    appendDots: function appendDots(dots) {
        return _react2.default.createElement(
            'ul',
            { style: { display: 'block' } },
            dots
        );
    }
};

exports.default = defaultProps;