import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Uploader from './Uploader';

import './picture.css';
class Picture extends React.Component {
  render() {
    return (
      <div className="image-with-uploader">
        <Image {...this.props} />
        <Uploader {...this.props} accept="image/jpeg, image/png" icon="camera" />
      </div>
    );
  }
}
Picture.displayName = 'CommonPicture';
export default Picture;

