import React from 'react';
import useDarkMode from './hooks/useDarkMode'
import { Dropdown, Menu } from 'semantic-ui-react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Menu>
    <Menu.Item href="https://www.coingecko.com/en">Home</Menu.Item>
    <Dropdown text='Information' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Exchanges</Dropdown.Header>
        <Dropdown.Item>
        </Dropdown.Item>
        <Dropdown.Item href="https://www.coingecko.com/en/exchanges">Spot</Dropdown.Item>
        <Dropdown.Item href="https://www.coingecko.com/en/exchanges/derivatives">Derivatives</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Resources</Dropdown.Header>
        <Dropdown.Item href="https://www.coingecko.com/en/api">API</Dropdown.Item>
        <Dropdown.Item href="https://newsletter.coingecko.com/landing/subscribe">Newsletter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item href="https://bitcointalk.org/index.php?topic=561516.0">Forums</Menu.Item>
    <Menu.Item href="https://support.coingecko.com/help_center">Help</Menu.Item>
  </Menu>


      
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
