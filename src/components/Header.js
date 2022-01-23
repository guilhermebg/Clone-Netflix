import React from 'react';
import './Header.css';
import {ReactComponent as GitHubIcon} from '../components/img/github.svg'

export default ({black}) => {
  return (
    <header className={black ? 'black' : ' '}>
      <div className="header--logo">                 
        <a href="/">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png' alt="NetFlix" />                  
        </a>
      </div>   
      <div className="header--user">
        <a href="https://github.com/guilhermebg/" >
       <GitHubIcon/>
        </a>
      </div>   
    </header>
  );
}