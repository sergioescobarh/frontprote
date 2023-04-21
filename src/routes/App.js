import './App.css';
import {Route,createRoutesFromElements,RouterProvider,createBrowserRouter} from 'react-router-dom'
import {Home} from '../templates/Home/Home'
import { YourProduct } from '../templates/YourProduct/YourProduct';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/yp' element={<YourProduct/>} ></Route>
    </>
  ));
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
