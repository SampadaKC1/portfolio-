import React, { useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { useTheme } from './Hooks/UseTheme';
function App() {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div className={`bg-white dark:bg-pink-500 dark:text-white text-gray-900 dark:text-black-100 ${theme}`}
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
   
      <NavBar/>
         <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;