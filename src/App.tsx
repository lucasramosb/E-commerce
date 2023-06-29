import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'

// Pages
import HomePage from './Pages/home/home.page';
import LoginPage from './Pages/login/login.page';
import SingUpPage from './Pages/sign-up/sign-up.pages';
import { auth } from './config/firebase.config';
import { FunctionComponent } from 'react';

const App: FunctionComponent = () => {

  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

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