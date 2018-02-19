
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/js/dist/Modal';
import 'bootstrap/js/dist/util';
import './overdiv.css';

class OverDivComponent extends React.Component {
  render() {
    const {heading, modalTitle, componentId, children} = this.props;
    return (
      <div>
        <button type="button" className="btn btn-outline-primary btn-sm" data-toggle="modal" data-target={`#${componentId}`}>
          {heading}
        </button>
        <div className="overdiv-container" id={componentId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-content">
            <div className="modal-header p-2">
              <h6 className="modal-title">{modalTitle}</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

OverDivComponent.displayName = 'CommonOverDivComponent';
OverDivComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  componentId: PropTypes.string.isRequired
};
OverDivComponent.defaultProps = {};

export default OverDivComponent;
