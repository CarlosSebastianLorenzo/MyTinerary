import { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {

    const selector = useSelector(store => store.userSignUpReducer.isOnline)
    const [isAuth, setIsAuth] = useState(true)

    useEffect(()=>{
        setIsAuth(selector)
    },[])

    return (
        <>
            {isAuth ? <Outlet/> : <Navigate to='/signin' />}
        </>
    )
}

export default ProtectedRoute
