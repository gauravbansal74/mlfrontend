

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import {uploadFile} from 'actions';
import IconComponent from './Icon';

class Uploader extends React.Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles) {
    const formData = new FormData();
    formData.append('uploader', acceptedFiles[0], acceptedFiles[0].name);
    const {actions, type, operation} = this.props;
    const {uploadFile} = actions;
    uploadFile(formData, type, operation);
  }

  render() {
    let dropzoneRef;
    const {heading, accept, icon} = this.props;
    return (
      <section>
        <Dropzone
          accept={accept}
          style={{display: 'none'}}
          ref={(node) => { dropzoneRef = node; }}
          onDrop={this.onDrop}
				 />
        <div className="uploader-div" onClick={() => { dropzoneRef.open(); }}>
          <IconComponent icon={icon} label={heading} type="large" />
        </div>
      </section>
    );
  }
}

Uploader.displayName = 'CommmonUploader';
Uploader.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {uploadFile};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
