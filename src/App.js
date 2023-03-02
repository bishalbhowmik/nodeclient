import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Update from './components/Update/Update';

function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('http://localhost:5000/users')
    },
    {
      path:'/info',
      element:<Info></Info>

    },
    {
      path:'/update/:id',
      element:<Update></Update>,
      loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
