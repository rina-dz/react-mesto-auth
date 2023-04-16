import React from 'react';
import { useLocation } from "react-router";
import logo from '../images/logo.svg';


function Header(props) {

  const location = useLocation();
  let title;
  let href;

  if (location.pathname === '/sign-in') {
    title = "Регистрация";
    href = '/sign-up';
  } else {
    if (location.pathname === '/sign-up') {
      title = "Вход";
      href = '/sign-in';
    } else {
      title = props.email;
      href = '#';
    }
  }


  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип место Россия" />
      <a className="header__link" href={href}>{title}</a>
      {location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && <a onClick={props.signOut} className="header__exit-link">Выйти</a>}
    </header>
  )
}


export default Header;