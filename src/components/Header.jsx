import React from 'react';
import Searchbar from './dashboard/Searchbar';
export default function Header() {
  return (
    <header className="header">
     <h1>Healthcare</h1>
      
      <Searchbar/>
      <div className="header-icons">
        <span style={{ paddingLeft:'3px'}}>Notifications </span>  
        <span>User</span>
        <button>+</button>
      </div>
    </header>
  );
}

