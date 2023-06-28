import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './Pages/home/home.page';
import LoginPage from './Pages/login/login.page';
import SingUpPage from './Pages/sign-up/sign-up.pages';

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SingUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;