import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import links from './menu-links.module.scss'

import {
  handleHover,
  handleHoverExit,
  staggerText,
} from "../../../utils/animations";

export const MenuLinks = ({state}) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    staggerText(line1.current, line2.current, line3.current);

  }, [state])

  return (
    <div className={links.links}>
      <div className={links.links__box}>
        <Link
          className={links.links__item}
          onMouseEnter={e => handleHover(e)}
          onMouseOut={e => handleHoverExit(e)}
          ref={line1}
          to='/opportunities'>
          Opportunities
      </Link>
        <Link
          className={links.links__item}
          onMouseEnter={e => handleHover(e)}
          onMouseOut={e => handleHoverExit(e)}
          ref={line2}
          to='/solutions'>
          Solutions
      </Link>
        <Link
          className={links.links__item}
          onMouseEnter={e => handleHover(e)}
          onMouseOut={e => handleHoverExit(e)}
          ref={line3}
          to='/contact-us'>
          Contact us
      </Link>
      </div>
      {/* <nav>
        <ul>
          <li>
            <Link
            className=
              onMouseEnter={e => handleHover(e)}
              onMouseOut={e => handleHoverExit(e)}
              ref={line1}
              to='/opportunities'>
              Opportunities
          </Link>
          </li>
          <li>
            <Link
              onMouseEnter={e => handleHover(e)}
              onMouseOut={e => handleHoverExit(e)}
              ref={line2}
              to='/solutions'>
              Solutions
          </Link>
          </li>
          <li>
            <Link
              onMouseEnter={e => handleHover(e)}
              onMouseOut={e => handleHoverExit(e)}
              ref={line3}
              to='/contact-us'>
              Contact us
          </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  )
}