import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './Pages/home/home.page';
import LoginPage from './Pages/login/login.page';

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;