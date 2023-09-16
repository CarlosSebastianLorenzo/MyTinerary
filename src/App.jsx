import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cities from './pages/Cities';
import Main from './layouts/Main';
import Hero from './pages/Hero';
import Error404 from './pages/Error404';
import Details from './pages/Details';
import ProtectedRoute from './pages/ProtectedRoute';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Mockups from './pages/Mockups';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { logInWithToken } from './Redux/Actions/UserAction.js';

const router = createBrowserRouter([
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
      },
      {
        path:'/gallery',
        element: <Mockups/>
      }
    ]
  },
  {
    path: '*',
    element: <Error404 />
  },
  {
    path: '/register',
    element: <ProtectedRoute/>,
    children: [
      {
        path: '/register/signin',
        element: <SignIn />
      },
      {
        path: '/register',
        element: <SignUp />
      }
    ]
  }
])

function App() {

  const dispatch = useDispatch();
  dispatch(logInWithToken())

  return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router}/>
      </GoogleOAuthProvider>
  )
}

export default App
