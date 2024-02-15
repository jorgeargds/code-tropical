// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/Theme.js';
import Menu from './components/Menu/Menu.js';
import Home from './views/Home/Home.js';
import About from './views/About/About.js';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
