import React, { createContext, useContext, useState, useEffect } from 'react';
import initialData from '../data/portfolio.json';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('portfolio_data');
    return savedData ? JSON.parse(savedData) : initialData;
  });

  const updateData = (newData) => {
    setData(newData);
    localStorage.setItem('portfolio_data', JSON.stringify(newData));
  };

  const resetData = () => {
    setData(initialData);
    localStorage.removeItem('portfolio_data');
  };

  return (
    <PortfolioContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
