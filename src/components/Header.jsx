import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Landing from '../pages/Landing';

const Header = ({user}) => {
  return (
    <>
           <nav className="bg-blue-600 p-4 shadow-lg sticky top-0 z-50">
           <div className="flex justify-between items-center container mx-auto">
             <Link to='/home'>
             <h1 className="text-white text-3xl font-semibold">Doctor's Portal</h1>
             </Link>
             <div className="space-x-6">
                <Link to="/meet" className="text-white hover:text-yellow-300 text-lg">TeleMedicine</Link>
               <Link to="/dashboard" className="text-white hover:text-yellow-300 text-lg">Dashboard</Link>
               <Link to="/community-support" className="text-white hover:text-yellow-300 text-lg">Community Support</Link>
             </div>
           </div>
         </nav>
    </>
  );
};

export default Header;
