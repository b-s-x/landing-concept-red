import React, { useRef, useEffect } from "react";

import { MenuLinks } from './MenuLinks/MenuLinks'
import { MenuLocations } from './MenuLocations/MenuLocations'
import { MenuContent } from './MenuContent/MenuContent'

import menu from './menu.module.scss'

import {
  staggerReveal,
  staggerRevealClose,
  openMenu,
  closeMenu
} from "../../utils/animations";

export const Menu = ({ state }) => {
  let menuLayer = useRef(null);
  let overlay1 = useRef(null);
  let overlay2 = useRef(null);
  let cityBackground = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      closeMenu(menuLayer.current)
      staggerRevealClose(overlay2.current, overlay1.current);
    } else if (state.clicked === true) {
      openMenu(menuLayer.current, overlay1.current, overlay2.current)
      staggerReveal(overlay1.current, overlay2.current);
    }
  }, [state]);

  return (
    <div ref={menuLayer} className={menu.menu}>
      <div ref={overlay1} className={menu.menu__secondary__color}></div>
      <div ref={overlay2} className={menu.menu__layer}>
        <div ref={cityBackground} className={menu.menu__city__bg}></div>

        <div className={menu.menu__container}>
          <div className={menu.menu__box}>
            <MenuLinks state={state} />
            <MenuContent state={state} />
          </div>

          <MenuLocations cityBackground={cityBackground} state={state} />
        </div>
      </div>
    </div>
  );
};

