// ga.js

import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-H2VS7XQ1VW'); // Replace with your actual tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
