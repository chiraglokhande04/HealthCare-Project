import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const Landing = () => {
  return (
    <div className="h-screen bg-cover bg-center flex justify-center items-center text-center bg-gray-800 bg-opacity-50" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/042/585/516/small_2x/ai-generated-medical-stethoscope-on-green-background-top-view-with-copy-space-photo.jpg')" }}>
      <div className="text-white">
        <h1 className="text-6xl font-bold mb-6">Welcome to the Doctor's Portal</h1>
        <p className="text-xl mb-12">Your Health, Our Priority</p>
        
        <div className="flex justify-center gap-8">
          <Link to="/login">
            <button
              className="bg-blue-600 text-white text-3xl px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              className="bg-green-600 text-white text-3xl px-8 py-4 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
