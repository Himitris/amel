import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                01 23 45 67 89
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contact@salon-coiffure.fr
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 rue de la Coiffure, 75000 Paris
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires d'ouverture</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Lundi - Vendredi : 9h - 19h
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Samedi : 9h - 18h
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Dimanche : Fermé
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {/* Add social media links here */}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Salon de Coiffure. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;