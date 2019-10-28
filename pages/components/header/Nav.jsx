import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CX from 'classnames';

import '../../../css/styleguide_nav.scss';

const prefix = 'navigation';

const MenuItem = ({ label, action, className }) => (
  <li className={className}>
    <button
      className={`${className}__element`}
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

const MenuSection = ({ name, items, className }) => (
  <li className={CX({ [`${className}__element`]: className })}>
    <h3 className={CX({ [`${className}__title`]: className })}>{name}</h3>
    <ul className={CX({ [`${className}__list`]: className })}>
      {items.map((el, idx) => <MenuItem className={`${className}__item`} key={`menu-section-${idx}`} label={el.label} action={el.action} />)}
    </ul>
  </li>
);

const Nav = ({ menuElements, opened, className }) => {
  const [openState, setOpen] = useState(opened || false);
  const classNames = CX([prefix, { [className]: typeof className !== 'undefined' }]);

  return (
    <header className={classNames}>
      <section className={`${prefix}__menu`}>
        <h1>Stylegyde template</h1>
        <button
          type="button"
          className={`${prefix}__menu__hamburger`}
          onClick={(e) => {
            e.preventDefault();
            setOpen(!openState);
          }}
        >
          <div className={`${prefix}__menu__hamburger-topbar`} />
        </button>
      </section>
      <section className={`${prefix}__components`}>
        {openState && (
          <div>
            <ul className={`${prefix}__components__menusection`}>
              {Object.keys(menuElements)
                .map((name) => (
                  <MenuSection
                    key={`menu-section-${name}`}
                    name={name}
                    items={menuElements[name]}
                    className={`${prefix}__components__menusection`}
                  />
                ))}
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
  ]).isRequired,
  className: PropTypes.string
};

const menuItems = PropTypes.arrayOf(PropTypes.shape(menuItem));

Nav.propTypes = {
  menuElements: PropTypes.shape({
    atoms: menuItems,
    molecules: menuItems,
    organisms: menuItems,
    templates: menuItems
  }),
  opened: PropTypes.bool,
  className: PropTypes.string
};
MenuSection.propTypes = {
  name: PropTypes.string.isRequired,
  items: menuItems.isRequired,
  className: PropTypes.string
};

MenuItem.propTypes = menuItem;

export default Nav;
