// Pages
import HomePage from './Pages/home/home.page';
import LoginPage from './Pages/login/login.page';
import SingUpPage from './Pages/sign-up/sign-up.pages';

// Utils
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useContext } from 'react';
import { auth, db } from './config/firebase.config';
import { userContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore';

const App: FunctionComponent = () => {
   
  const { currentUser, isAuthenticated, loginUser, logoutUser } = useContext(userContext)

  console.log({currentUser})
  console.log({isAuthenticated})
  console.log({loginUser})

  //se o usuario estiver logado no contexto, e o usuario do firebase(sign out)
  //devemos limpar o contexto(sign out)
  onAuthStateChanged(auth, async (user) => {
    const isSingnInOut = isAuthenticated && !user
    if(isSingnInOut){
      return logoutUser()
    }

    //se o usuario for nulo no contexto, e não for nulo no firebase
    //devemos fazer login
    const isSigninIn = !isAuthenticated && user
    if(isSigninIn){

      const QuerySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))

      const userFromFirestore = QuerySnapshot.docs[0]?.data()

      return loginUser(userFromFirestore as any)
    }
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