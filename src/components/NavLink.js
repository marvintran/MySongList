import React from 'react';
import '../stylesheets/NavLink.css';
import { Link } from 'react-scroll'

const NavLink = ({ title, currMarker, className}) => {
  let toCamelCase = title.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

  let css = "black-text " + className;
  if(currMarker === title)
    css = "active " + css;

  return (
    <Link
      to={toCamelCase}
      duration={1500}
    >
      <div className={css}>
        { currMarker === title
          ? <span className="marker"/>
          : null
        }
        {title}
      </div>
    </Link>
  )
}

export default NavLink;