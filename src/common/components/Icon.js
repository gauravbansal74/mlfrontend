import React from 'react';
import PropTypes from 'prop-types';

const IconStyle = {
  large: {fontSize: '18px', verticalAlign: 'middle', marginRight: '6px'},
  medium: {fontSize: '14px', verticalAlign: 'middle'},
  small: {fontSize: '13px', verticalAlign: 'middle', marginRight: '4px'},
  onlyIcon: {fontSize: '16px', verticalAlign: 'middle'},
  leftNavigation: {fontSize: '1.5rem', verticalAlign: 'middle', display: 'block'},
};

const iconTextStyle = {
  small: {fontSize: '13px', verticalAlign: 'middle', marginRight: '4px'},
  leftNavigation: {fontSize: '10px', verticalAlign: 'middle', display: 'block'},
  medium: {color: '#4e4d4d', verticalAlign: 'middle', fontWeight: '400'},
  large: {color: '#4e4d4d', verticalAlign: 'middle', fontWeight: '400'}
};

const Icon = ({icon, label, type}) => (
  <div className="icon-component d-inline-block">
    <i className={`fa fa-${icon}`} aria-hidden="true" style={IconStyle[type]} />
    <span style={iconTextStyle[type]}>{label}</span>
  </div>
	);

Icon.displayName = 'CommonIcon';
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Icon;
