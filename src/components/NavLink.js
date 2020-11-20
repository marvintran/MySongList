import React from 'react';
import '../stylesheets/NavLink.css';
import Nav from 'react-bootstrap/Nav';

const NavLink = ({ title, currMarker, className}) => {
  let toCamelCase = title.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

  let css = "black-text " + className;
  if(currMarker === title)
    css = "active " + css;

  return (
    <Nav.Link href={ "#" + toCamelCase} className={css}>
      { currMarker === title
        ? <span className="marker"/>
        : null
      }
      {title}
    </Nav.Link>
  )
}

export default NavLink;