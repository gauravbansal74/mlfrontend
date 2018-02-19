
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/js/dist/Modal';
import 'bootstrap/js/dist/util';

class ModalComponent extends React.Component {
  render() {
    let {heading, modalTitle, component: Component, modalId} = this.props;
    if (modalId === undefined) {
      modalId= '' +(new Date()).getTime() + '';
    }
    return (
      <div>
        <button type="button" className="btn btn-outline-primary btn-sm" data-toggle="modal" data-target={`#${modalId}`}>
          {heading}
        </button>
        <div className="modal fade text-left" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <Component {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalComponent.displayName = 'CommonModalComponent';
ModalComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  modelId: PropTypes.string
};
ModalComponent.defaultProps = {};

export default ModalComponent;
