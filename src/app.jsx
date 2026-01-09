import { h, Component } from 'preact';
import { About, Home, Navbar, NavMenu, Settings } from './components';
import Router, { } from 'preact-router'
import { useQRAPI, useTheme } from './hooks';
import { useEffect } from 'preact/hooks';

const App = () => {
  useTheme();
  const { checkHealth, healthStatus } = useQRAPI();

  useEffect(() => {
    checkHealth();
  }, []);

  useEffect(() => {
    console.log(healthStatus);
  
  }, [healthStatus]);


  return (
    <div class="h-full text-(--text-color) text-xl  ">
      <Navbar />
      <section class="h-[92%] overflow-scroll ">
        <NavMenu />
        <Router>
          <Home path="/" />
          <Settings path="/settings" />
          <About path="/about" />

        </Router>
      </section>
    </div>
  );
};

export default App;