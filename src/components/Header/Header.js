import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";

import header from './header.module.scss'

export const Header = withRouter(({ history }) => {
  const [state, setState] = useState({
    clicked: false,
    menuName: 'Menu'
  })

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  const handleMenu = () => {
    disableMenu();

    (state.clicked)
      ? setState({
        clicked: !state.clicked,
        menuName: 'Menu'
      })
      : setState({
        clicked: !state.clicked,
        menuName: 'Close'
      })
  }

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div className={header.header__container}>
      <div className={header.header__inner}>
        <div className={header.header__logo}>
          <Link className={header.header__logo__item} to="/">BSX_MARS</Link>
        </div>
        <div className={header.header__menu}>
          <button className={header.header__menu__btn} disabled={disabled} onClick={handleMenu}>
            {state.menuName}
          </button>
        </div>
      </div>

      <Menu state={state} />
    </div>
  );
});
