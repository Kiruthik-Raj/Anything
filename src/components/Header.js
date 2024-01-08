import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
    return(<div className = "header">
        <p>What's On Your Mind Today?</p>
        <button onClick={() => handleToggleDarkMode((previousDarkMode)=> !previousDarkMode) } className = "switch">Switch Mode</button>
    </div>)
};

export default Header;