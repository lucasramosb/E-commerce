// Pages
import HomePage from './Pages/home/home.page';
import LoginPage from './Pages/login/login.page';
import SingUpPage from './Pages/sign-up/sign-up.pages';

// Utils
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent, useContext, useState } from 'react';
import { auth, db } from './config/firebase.config';
import { userContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { userConverter } from './converters/firestore.converters';
import Loading from './Components/loading/loading.components';
import ExplorePage from './Pages/explore/explore.page';
import CategoryDetailsPage from './Pages/category-datails/category-datails.page';
import Cart from './Components/cart/cart.component';

const App: FunctionComponent = () => {

  const [ isInitializing, setIniatializing ] = useState(true);
   
  const { isAuthenticated, loginUser, logoutUser } = useContext(userContext);

  //se o usuario estiver logado no contexto, e o usuario do firebase(sign out)
  //devemos limpar o contexto(sign out)
  onAuthStateChanged(auth, async (user) => {
    const isSingnInOut = isAuthenticated && !user
    if(isSingnInOut){
      logoutUser()
      return setIniatializing(false)
    };

    //se o usuario for nulo no contexto, e não for nulo no firebase
    //devemos fazer login
    const isSigninIn = !isAuthenticated && user
    if(isSigninIn){

      const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(userConverter), where('id', '==', user.uid)))

      const userFromFirestore = querySnapshot.docs[0]?.data()

      loginUser(userFromFirestore)
      return setIniatializing(false)
    };

    return setIniatializing(false)
  });

  //enquanto isInitializing for true, retorne o component Loading
  if(isInitializing) return <Loading/>
 
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/explore' element={ <ExplorePage/> } />
        <Route path='/category/:id' element={ <CategoryDetailsPage/> } />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SingUpPage/>} />
      </Routes>

      <Cart/>
    </BrowserRouter>
  )
}
export default App;