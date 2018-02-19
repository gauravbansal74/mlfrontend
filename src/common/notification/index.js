import React from 'react';

import NotificationsSystem from 'reapop';

import theme from 'reapop-theme-wybo';

class Notification extends React.Component {

  render() {
    return (
      <div>
        <NotificationsSystem theme={theme}/>
      </div>
    );
  }
}
export default Notification;
