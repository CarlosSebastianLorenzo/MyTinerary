/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const ProtectedRoute = () => {

    const isOlinline = useSelector(store => store.userSignUpReducer.isOnline)
    const [isAuth, setIsAuth] = useState(true)

    useEffect(()=>{
        setIsAuth(!isOlinline)
    },[])

    if(!isAuth) { toast.error('Must be logged out to visit the sections signIn/signUp')}

    return (
        <>
            {isAuth ? <Outlet/> : <Navigate to='/' />}
        </>
    )
}

export default ProtectedRoute
