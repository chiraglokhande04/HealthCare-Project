import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Landing from '../pages/Landing';

const Header = () => {

    const {
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
        isLoading,
      } = useAuth0();
  return (
    <>
    {isAuthenticated?(
           <nav className="bg-blue-600 p-4 shadow-lg">
           <div className="flex justify-between items-center container mx-auto">
             <Link to='/home'>
             <h1 className="text-white text-3xl font-semibold">Doctor's Portal</h1>
             </Link>
             <div className="space-x-6">
               <Link to="/search-patient" className="text-white hover:text-yellow-300 text-lg">Search for Patient</Link>
               <Link to="/dashboard" className="text-white hover:text-yellow-300 text-lg">Dashboard</Link>
               <Link to="/community-support" className="text-white hover:text-yellow-300 text-lg">Community Support</Link>
               <button onClick={()=>logout({logoutParams:{returnTo: window.location.origin}})}  className="text-white hover:text-yellow-300 text-lg">Community Support</button>
             </div>
           </div>
         </nav>

    ): (
        <Link to="/login" onClick={()=> loginWithRedirect()} className="text-white hover:text-yellow-300 text-lg">Login</Link>
    )
}
  
 
    </>
  );
};

export default Header;
