import './App.css';
import LandingPage from './Components/landingPage';
import Menu from './Components/Menu';
import ProductPage from './Pages/FarmerProductPage';
import UploadProductPage from './Pages/UploadProduct';
import BuyerPage from './Pages/BuyerProductPage';
import SignupForm from './Pages/SignUpPage';
import { Routes,Route } from 'react-router-dom';
import LoginForm from './Pages/LoginPage';

function App() {
  return (
   
    // <ProductPage/>
    // <UploadProductPage />
    // <BuyerPage/>
     // <LandingPage/>
    // <Menu/>
    // <SignupForm />
    // <LoginForm/>

    <div className='App'>
      <Routes>
        <Route path="/" element={<ProductPage />}  />
        <Route path='BuyerPage' element={<BuyerPage />} />
        <Route path='UploadProductPage' element={<UploadProductPage />} />
        <Route path='SignUpForm' element={<SignupForm/>} />
        <Route path='LoginpForm' element={<LoginForm/>} />

      </Routes>

    </div>
  );
}

export default App;
