import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Star, Clock, MapPin } from 'lucide-react';

const Home = () => {
  const testimonials = [
    {
      name: "Sophie L.",
      comment: "Un service exceptionnel ! La coiffeuse est très professionnelle et à l'écoute.",
      rating: 5
    },
    {
      name: "Marie D.",
      comment: "Très pratique de pouvoir se faire coiffer à domicile. Je recommande !",
      rating: 5
    },
    {
      name: "Julie M.",
      comment: "Excellent rapport qualité-prix. Le résultat est toujours parfait.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-600/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Votre salon de coiffure itinérant
            </h1>
            <p className="text-xl mb-8">
              Découvrez l'expérience unique d'un salon de coiffure qui vient à vous.
              Professionnel, flexible et personnalisé.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              >
                Prendre rendez-vous
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise professionnelle</h3>
              <p className="text-gray-600">
                Des coiffeurs qualifiés et passionnés pour sublimer votre beauté
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexibilité horaire</h3>
              <p className="text-gray-600">
                Des créneaux adaptés à votre emploi du temps
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service à domicile</h3>
              <p className="text-gray-600">
                Nous venons à vous pour plus de confort
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Coupe femme",
                image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "À partir de 45€"
              },
              {
                title: "Coupe homme",
                image: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "À partir de 25€"
              },
              {
                title: "Coloration",
                image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "À partir de 60€"
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p>{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Ce que disent nos clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prêt à rafraîchir votre style ?
          </h2>
          <Link
            to="/booking"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;