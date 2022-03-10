import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import Rate from './pages/rate';
import Dashboard from './pages/dashboard';
import Trade from './pages/trade';
import { AuthProvider } from './context/authContext';
import TradingCoin from './pages/trading-coin';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/rate" element={<Rate/>}/>
          <Route path="/user/dashboard" element={<Dashboard/>}/>
          <Route path="/trade" element={<Trade/>}/>
          <Route path="/trade/coin/:name" element={<TradingCoin/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
