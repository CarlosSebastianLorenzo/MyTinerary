import { RouterProvider, createHashRouter } from 'react-router-dom';
import Cities from '../components/Cities';
import Main from '../layouts/Main';
import Hero from '../components/Hero';
import Error404 from '../components/Error404';

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
