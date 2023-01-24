import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default function Sidebar(props){
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/test">
        Test
      </a>
    </Menu>
  );
};