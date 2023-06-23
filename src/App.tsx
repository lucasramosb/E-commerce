import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './Pages/home/home.page';

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={ <HomePage/> } />
      </Routes>
    </BrowserRouter>
  )
}
export default App;