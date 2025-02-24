import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Scissors, Palette, Droplet, Sparkles } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'coupe-femme',
    title: 'Coupe Femme',
    description: 'Coupe personnalisée incluant le diagnostic, le shampoing, le massage du cuir chevelu, la coupe et le brushing.',
    price: 'À partir de 45€',
    duration: '1h',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: <Scissors className="w-6 h-6" />
  },
  {
    id: 'coupe-homme',
    title: 'Coupe Homme',
    description: 'Coupe homme incluant le diagnostic, le shampoing, la coupe et la finition.',
    price: 'À partir de 25€',
    duration: '45min',
    image: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: <Scissors className="w-6 h-6" />
  },
  {
    id: 'coloration',
    title: 'Coloration',
    description: 'Coloration professionnelle adaptée à vos envies, incluant le diagnostic, l\'application, le shampoing et le brushing.',
    price: 'À partir de 60€',
    duration: '2h',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: 'balayage',
    title: 'Balayage',
    description: 'Technique de coloration naturelle pour un effet soleil, incluant le diagnostic, l\'application, le shampoing et le brushing.',
    price: 'À partir de 80€',
    duration: '2h30',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: <Droplet className="w-6 h-6" />
  },
  {
    id: 'soin',
    title: 'Soin Profond',
    description: 'Traitement personnalisé pour restaurer et revitaliser vos cheveux, incluant un massage du cuir chevelu.',
    price: 'À partir de 35€',
    duration: '45min',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: <Sparkles className="w-6 h-6" />
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
    <div className="relative h-48">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
        {service.icon}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          <span>{service.duration}</span>
        </div>
        <span className="font-semibold text-purple-600">{service.price}</span>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Nos Services</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services de coiffure professionnels,
              réalisés à domicile par nos experts.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Choisissez le service qui vous convient et réservez votre créneau en quelques clics.
            Notre équipe se fera un plaisir de vous accueillir.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Informations importantes
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  À propos de nos services
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tous nos services incluent une consultation personnalisée</li>
                  <li>• Produits professionnels de haute qualité</li>
                  <li>• Conseils d'entretien personnalisés</li>
                  <li>• Service à domicile dans un rayon de 20km</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Politique de réservation
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Réservation en ligne ou par téléphone</li>
                  <li>• Annulation gratuite jusqu'à 24h avant le rendez-vous</li>
                  <li>• Paiement sécurisé en ligne ou sur place</li>
                  <li>• Devis personnalisé pour les prestations spéciales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;