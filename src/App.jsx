import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='h-full flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main>
            <div className=' p-4 font-bold text-3xl'>
                  <p className='mb-8'>Create Your Own Blog:</p>
                  <Outlet />
            </div>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
