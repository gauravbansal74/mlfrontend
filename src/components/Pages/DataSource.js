

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { inputValueChange, authCheck } from 'actions';

class DataSourcePage extends React.Component {
  render() {
    const { actions, dataSources } = this.props;
    return (
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-12">
            {
              dataSources.length > 0 ? <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">File Name</th>
                    <th scope="col">Message</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataSources.map((dataSource, index) => (
                      <tr key={dataSource._id}>
                        <th scope="row">{index+1}</th>
                        <td>{dataSource.fileName}</td>
                        <td>{dataSource.message}</td>
                        <td>{dataSource.status}</td>
                        <td>{dataSource.created}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table> : 'No Records'
            }

          </div>
        </div>
      </div>
    );
  }
}

DataSourcePage.displayName = 'DataSourcePage';

DataSourcePage.propTypes = {};

function mapStateToProps(state) {
  const props = {
    dataSources: state.dataSources
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { inputValueChange, authCheck };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(DataSourcePage);
