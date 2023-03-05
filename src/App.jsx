import { RouterProvider, createHashRouter } from 'react-router-dom';
import Cities from './pages/Cities';
import Main from './layouts/Main';
import Hero from './pages/Hero';
import Error404 from './pages/Error404';
import Details from './pages/Details';

const router = createHashRouter([
  { 
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      { path:'/cities',
        element: <Cities/>
      },
      {
        path:'/cities/:id',
        element: <Details/>
      }
    ]
  },
  {
    path: '*',
    element: <Error404 />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App