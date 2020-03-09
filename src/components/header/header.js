import React from 'react';
import logo from './icon-fb.png'
import Search from './search.js'
import Menu from './menu.js'

function Header() {
  return (
    <div className="header">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <img src={logo} className="logo" width="30" height="30" alt=""/>
            <Search />
            <Menu />
        </nav>
        
    </div>
  );
}

export default Header;
