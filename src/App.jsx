import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className=" social-button-container w-50 mt-3">
        <div className="">
          <img
            // onClick={handleGoogleLogin}
            className=" social-button"
            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
            alt=""
          />
        </div>
        <div className="">
          <img
            // onClick={handleGithubLogin}
            className=" social-button"
            src="https://i.ibb.co/g9f4P0S/github-btn.png"
            alt=""
          />
        </div>
      </div>

    </>
  )
}

export default App
