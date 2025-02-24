import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Scissors className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Salon de Coiffure</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Accueil
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link to="/booking" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Rendez-vous
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              {currentUser && (
                <Link to="/admin" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  Admin
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;