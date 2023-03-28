import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Root = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <App currentPage={currentPage} onNavigationClick={handleNavigationClick} />
    </div>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
