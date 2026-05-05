import './App.css';
import { BrowserRouter, Route, Routes } from "react-router"
import { AppBar } from './components/Appbar/AppBar';

const Hello = () => (
  <div className='w-[90%] mx-auto'>
    <AppBar />
    <div className='flex bg-amber-500 w-full h-full'>Hello world</div>
  </div>
)

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Hello} >
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
