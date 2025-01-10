import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Landing from './Landing';


const Home = () => {

    const {
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
        isLoading,
      } = useAuth0();
  return (
    <>
   
  {isAuthenticated ?(  <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex justify-center items-center bg-cover bg-center min-h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('https://via.placeholder.com/1500x900')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Welcome, Dr. [Doctor's Name]</h2>
          <p className="text-xl mb-8">What would you like to do today?</p>

          <div className="flex justify-center gap-8">
            <Link to="/search-patient">
              <button className="bg-blue-600 text-white text-xl px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Search for Patient
              </button>
            </Link>

            <Link to="/dashboard">
              <button className="bg-green-600 text-white text-xl px-8 py-4 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
                Dashboard
              </button>
            </Link>

            <Link to="/community-support">
              <button className="bg-purple-600 text-white text-xl px-8 py-4 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
                Community Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    ) : (<Landing/>)}
    </>
  );
};

export default Home;
