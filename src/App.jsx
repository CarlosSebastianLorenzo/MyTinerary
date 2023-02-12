import { RouterProvider, createHashRouter } from 'react-router-dom';
import Cities from './pages/Cities';
import Main from './layouts/Main';
import Hero from './pages/Hero';
import Error404 from './pages/Error404';
import Details from './pages/Details';
import ProtectedRoute from './pages/ProtectedRoute';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { logInWithToken } from './Redux/Actions/UserAction.js';

const router = createHashRouter([
  { 
    path: '/',
    element: <ProtectedRoute/>,
    children: [
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
    ]
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

function App() {

  const dispatch = useDispatch();
  dispatch(logInWithToken())

  return (
      <GoogleOAuthProvider clientId="129309573868-7v794qd0cdflnus0r6er5u0vrkpdib1b.apps.googleusercontent.com">
        <RouterProvider router={router}/>
      </GoogleOAuthProvider>
  )
}

export default App
