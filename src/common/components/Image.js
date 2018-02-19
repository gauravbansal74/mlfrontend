import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'react-user-avatar';
import config from 'config';

class Image extends React.Component {
  render() {
    const {src, name, size} = this.props;
    if (src) {
      return (
        <UserAvatar
          size={size}
          name={name}
          src={`${config.content}${src}`}/>);
    }
    return (
      <UserAvatar
        size={size}
        name={name}
        colors={['#ccc', '#fafafa', '#ccaabb']}/>);
  }
}
Image.displayName = 'CommonImage';
Image.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};

export default Image;

