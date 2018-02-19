

import React from 'react';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Find from 'lodash.find';
import {Link} from 'react-router';

// import 'popperjs';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/util';

import IconComponent from 'common/components/Icon';

const Layout = {};

// Layout SubPageHeader starts here
Layout.SubPageHeader = ({currentMenu, childrens, pathname}) => {
  if (currentMenu.subHeaderShow) {
    let selectedMenu = childrens[0];
    let myHeading = '';
    if (pathname.split('/').length === 3) {
      selectedMenu = Find(childrens, {path: `/${pathname.split('/')[2]}`});
      myHeading = selectedMenu.heading;
    }

    if (pathname.split('/').length === 5) {
      selectedMenu = Find(childrens, {path: `/${pathname.split('/')[2]}/${pathname.split('/')[3]}`});
      myHeading = selectedMenu.heading;
    }

    if (pathname.split('/').length === 2) {
      myHeading = currentMenu.childHeading;
    }
    return (
      <div className="sub-header-layout row border p-1 bg-light">
        <nav className="navbar navbar-expand-lg p-2">
          <h6 className="p-0 m-0 font-weight-normal">{myHeading}</h6>
        </nav>
      </div>
    );
  }
  return null;

};

Layout.SubPageHeader.displayName = 'Layout.SubPageHeader';
Layout.SubPageHeader.propTypes = {
  currentMenu: PropTypes.shape({}).isRequired,
  childrens: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  childrens: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  pathname: PropTypes.string.isRequired
};
// Layout SubPageHeader ends here

// Layout BreadCrumb starts here
Layout.Breadcrumb = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 pr-3 pl-3 border">
    <ol className="breadcrumb p-0 m-0">
      <li className="breadcrumb-item active">Home</li>
    </ol>
  </nav>
	);

Layout.Breadcrumb.displayName = 'Layout.Breadcrumb';
Layout.Breadcrumb.propTypes = {};
Layout.Breadcrumb.defaultProps = {};

// Layout BreadCrumb ends here

//  Close Layout Header starts here
Layout.Header = {};
Layout.Header.Organization = ({name, logoSrc, index, changeOrganization}) => (
  <a
    className="dropdown-item p-2 border border-light border-top-0" href="#"
    onClick={() => {
      changeOrganization(index);
    }}>
    <div className="row">
      <div className="col-md-4 align-self-center">
        <img
          src={logoSrc}
          className="rounded mx-auto d-block"/>
      </div>
      <div className="col-md-8 p-2 text-truncate">
        {name}
      </div>
    </div>
  </a>);

Layout.Header.Organization.displayName = 'Layout.Header.Organization';
Layout.Header.Organization.propTypes = {
  name: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  changeOrganization: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

Layout.Header.Organizations = ({selectedOrganization, organizations, changeOrganization}) => {
  if (organizations.length > 1) {
    const organizationComponents = [];
    organizations.map((org, index) => {
      organizationComponents.push(
        <Layout.Header.Organization
          name={org.name}
          key={org.name}
          index={index}
          changeOrganization={changeOrganization}
          logoSrc="http://3j3fcqfu91e8lyzv2ku31m63-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/redmart_logo.png"/>);
    });
    return (
      <div className="btn-group">
        <button
          className="btn btn-light btn-lg btn-block dropdown-toggle p-1" type="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="row">
            <div className="col-md-4 align-self-center">
              <img
                src="http://3j3fcqfu91e8lyzv2ku31m63-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/redmart_logo.png"
                className="rounded mx-auto d-block"/>
            </div>
            <div className="col-md-8 pl-2 p-1 text-truncate font-weight-bold text-left">
              {selectedOrganization.name}
            </div>
          </div>
        </button>
        <div className="dropdown-menu p-0 m-0 border-0">
          <h6 className="dropdown-header p-2 text-uppercase border border-light border-top-0">Switch Organization</h6>
          {organizationComponents}
        </div>
      </div>
    );
  }
  return (
    <div className="btn-group">
      <button className="btn btn-light btn-lg btn-block p-1" type="button">
        <div className="row">
          <div className="col-md-4">
            <img
              src="http://3j3fcqfu91e8lyzv2ku31m63-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/redmart_logo.png"
              className="rounded mx-auto d-block"/>
          </div>
          <div className="col-md-8 pl-2 p-1 text-truncate font-weight-bold text-left">
            {selectedOrganization.name}
          </div>
        </div>
      </button>
    </div>
  );


};

Layout.Header.Organizations.displayName = 'Layout.Header.Organizations';
Layout.Header.Organizations.propTypes = {
  selectedOrganization: PropTypes.shape({}).isRequired,
  organizations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  changeOrganization: PropTypes.func.isRequired
};


Layout.Header.Main = ({user, actions}) => {
  const {changeOrganization, logout} = actions;
  const selectedOrganization = Find(user.organizations, {id: user.selectedOrganization});
  return (
    <nav className="navbar navbar-light justify-content-between p-0 pr-1" style={{backgroundColor: '#ffffff', height: '50px'}}>
      <div className="navbar-brand p-0 organization-container">
        <Layout.Header.Organizations
          selectedOrganization={selectedOrganization}
          organizations={user.organizations}
          changeOrganization={changeOrganization}/>
      </div>
      <div className="user-top-menu">
        <div className="btn-group">
          <button
            className="btn btn-sm btn-light dropdown-toggle" type="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {user.firstName} {user.lastName}
          </button>
          <div className="dropdown-menu pt-0 pb-0">
            <a className="dropdown-item border border-light border-top-0 p-2" onClick={() => { logout(); }} href="#">
              <IconComponent icon="sign-out" label="Logout" type="small" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

Layout.Header.Main.displayName = 'Layout.Header.Main';
Layout.Header.Main.propTypes = {
  user: PropTypes.shape({}).isRequired,
  actions: PropTypes.shape({}).isRequired
};
Layout.Header.Main.defaultProps = {};
//  Close Layout Header ends here

// Layout LeftNavigation Start here
Layout.Navigation = {};

// Sub Left Navigation Starts here
Layout.Navigation.SubNavLeft = {};
Layout.Navigation.SubNavLeft.MenuItem = ({path, name, icon, selectMenu,index}) => (
  <li className="nav-item">
    <Link className={location.href.split('/')[4] === selectMenu || (location.href.split('/').length === 4 && index === 0) ? 'nav-link nav-link-selected p-1 pl-3' : 'nav-link p-1 pl-3'} to={path}>
      {name}
    </Link>
  </li>
);
Layout.Navigation.SubNavLeft.MenuItem.displayName = 'Layout.Navigation.SubNavLeft.MenuItem';
Layout.Navigation.SubNavLeft.MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectMenu: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};
Layout.Navigation.SubNavLeft.Main = ({currentMenu}) => {
  if (currentMenu.subNavigationShow) {
    return (
      <div className="col-md-2 p-0">
        <div className="sub-left-navigation p-2 pt-3">
          <div className="pl-3">
            <IconComponent icon={currentMenu.icon} label={` ${currentMenu.childHeading}`} type="medium"/>
          </div>
          <hr className="m-2 p-0" />
          <ul className="nav flex-column">
            {
              currentMenu.childrens.map((menu, index) => {
                if (!menu.main) {
                  return (<Layout.Navigation.SubNavLeft.MenuItem
                    path={`${currentMenu.path}${menu.path}`}
                    name={menu.name}
                    key={menu.path}
                    selectMenu={menu.selectMenu}
                    index={index}
                    icon={menu.icon}/>);
                } else {
                  return (
                    <div className="mt-4">
                      <div className="pl-3">
                        <IconComponent icon={menu.icon} label={` ${menu.heading}`} type="medium"/>
                      </div>
                      <hr className="m-2 p-0" />
                    </div>
                  );
                }
              })
            }
          </ul>
        </div>
      </div>
    );
  }
  return null;
};
Layout.Navigation.SubNavLeft.Main.displayName = 'Layout.Navigation.SubNavLeft.Main';
Layout.Navigation.SubNavLeft.Main.propTypes = {
  currentMenu: PropTypes.shape({}).isRequired
};
Layout.Navigation.SubNavLeft.Main.defaultProps = {};
// Sub Left Navigation Ends here

// Left Navigation
Layout.Navigation.Left = {};
Layout.Navigation.Left.MenuItem = ({path, name, icon}) => (
  <li className="nav-item text-center p-1 pt-1 pb-1 mb-1 d-inline-block">
    <Link to={path}>
      <IconComponent icon={icon} label={name} type="leftNavigation" />
    </Link>
  </li>
);
Layout.Navigation.Left.MenuItem.displayName = 'Layout.Navigation.Left.MenuItem';
Layout.Navigation.Left.MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

Layout.Navigation.Left.Main = ({menuOptions}) => {
  const items = [];
  menuOptions.map((menu) => {
    if (menu.show) {
      items.push(<Layout.Navigation.Left.MenuItem path={menu.path} name={menu.name} icon={menu.icon} key={menu.path} />);
    }
  });
  return (
    <div className="left-navigation">
      <ul className="nav flex-column">
        {items}
      </ul>
    </div>
  );
};
Layout.Navigation.Left.Main.displayName = 'Layout.Navigation.Left.Main';
Layout.Navigation.Left.Main.propTypes = {
  menuOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

// SubTop Navigation
Layout.Navigation.SubTop = {};
Layout.Navigation.SubTop.MenuItem = ({path, name, icon, selectMenu}) => (
  <li className="nav-item border border-right-0">
    <Link
      className={location.href.split('/')[4] === selectMenu || location.href.split('/').length === 4 ?
						'nav-link nav-link-selected' : 'nav-link'}
      to={path}
		>
      <IconComponent icon={icon} label={name} type="large" />
    </Link>
  </li>
);
Layout.Navigation.SubTop.MenuItem.displayName = 'Layout.Navigation.SubTop.MenuItem';
Layout.Navigation.SubTop.MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

Layout.Navigation.SubTop.Main = ({menuOptions, id}) => (
  <div className="navbar navbar-expand-lg navbar-light p-0" style={{background: '#ffffff'}}>
    <ul className="nav justify-content-left">
      {
					menuOptions.map((menu, index) => {
  if (menu.show) {
    return (
      <Layout.Navigation.SubTop.MenuItem
        path={`${menu.path}/${id}`}
        selectMenu={menu.selectMenu}
        name={menu.name}
        icon={menu.icon}
        key={index}
								/>
    );
  }
})
				}
    </ul>
  </div>
	);
Layout.Navigation.SubTop.Main.displayName = 'Layout.Navigation.SubTop.Main';
Layout.Navigation.SubTop.Main.propTypes = {
  menuOptions: PropTypes.arrayOf(PropTypes.shape({}))
};

// Close Layout Footer Starts Here
Layout.Footer = () => (
  <div className="footer clearfix">
    <div className="card" style={{backgroundColor: '#ffffff', height: '62px'}}>
      <div className="container text-center">
					&copy; 2017 offcampus4u.com
				</div>
    </div>
  </div>
	);

Layout.Footer.displayName = 'Layout.Footer';
Layout.Footer.propTypes = {};
Layout.Footer.defaultProps = {};
// Close Layout Footer Ends Here

export default Layout;
