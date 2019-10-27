import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../css/styleguide_nav.scss';

const MenuItem = ({ label, action }) => (
  <li>
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        if (typeof action === 'string') {
          window.location = action;
        } else {
          action();
        }
      }}
    >
      {label}
    </button>
  </li>
);

const MenuSection = ({ name, items }) => (
  <li>
    <p>{name}</p>
    <ul>
      {items.map((el, idx) => <MenuItem key={`menu-section-${idx}`} label={el.label} action={el.action} />)}
    </ul>
  </li>
);

const Nav = ({ menuElements, opened }) => {
  const [openState, setOpen] = useState(opened || false);

  return (
    <header>
      <section id="header-menu">
        <h1>Stylegyde template</h1>
        <button
          type="button"
          id="hamburger-menu"
          onClick={(e) => {
            e.preventDefault();
            setOpen(!openState);
          }}
        >
          <div />
        </button>
      </section>
      <section id="header-components">
        {openState && (
          <div>
            <ul>
              {Object.keys(menuElements)
                .map((name) => <MenuSection key={`menu-section-${name}`} name={name} items={menuElements[name]} />)}
            </ul>
          </div>
        )}
      </section>
    </header>
  );
};

const menuItem = {
  label: PropTypes.string.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]).isRequired
};

const menuItems = PropTypes.arrayOf(PropTypes.shape(menuItem));

Nav.propTypes = {
  menuElements: PropTypes.shape({
    atoms: menuItems,
    molecules: menuItems,
    organisms: menuItems,
    templates: menuItems
  }),
  opened: PropTypes.bool
};
MenuSection.propTypes = {
  name: PropTypes.string.isRequired,
  items: menuItems.isRequired
};

MenuItem.propTypes = menuItem;

export default Nav;
