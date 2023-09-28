import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/Layout/Layout';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
