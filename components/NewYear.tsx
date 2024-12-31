import React from 'react';
import { Star, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';
import IsaacPhoto from '../assets/touza.png';

const NewYearPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header with Emojis */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Sparkles className="w-full h-full" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="text-yellow-300" size={28} fill="currentColor" />
            <span className="text-4xl">✨</span>
            <h1 className="text-4xl font-bold">Meilleurs Vœux 2025!</h1>
            <span className="text-4xl">✨</span>
            <Star className="text-yellow-300" size={28} fill="currentColor" />
          </div>
        </div>
        
        {/* Photo and Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Photo Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-orange-200">
              <Image
                src={IsaacPhoto}
                alt="Portrait"
                width={256}  // Largeur souhaitée
                height={320} // Hauteur souhaitée
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-orange-800">Touza Isaac</h3>
              <p className="text-gray-600">Innovateur Digital 🚀</p>
            </div>
          </div>
          
          {/* Message Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              Chers collègues, amis et partenaires 🤝
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                En cette aube de 2025, je vous souhaite une année exceptionnelle remplie 
                d&apos;innovations technologiques, de réussites personnelles et de moments de 
                bonheur partagés.
              </p>
              
              <p className="text-lg flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Que cette nouvelle année soit pour vous une source constante d&apos;inspiration, 
                de créativité et de succès.
              </p>
              
              <p className="text-lg flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Ensemble, continuons à repousser les limites du possible et à construire 
                un avenir numérique toujours plus intelligent et connecté.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 text-center">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-orange-600 flex items-center justify-center gap-2">
              <span>🎉</span>
              Bonne Année 2025!
              <span>🎊</span>
            </p>
            <p className="text-lg text-gray-500 flex items-center justify-center gap-2">
              <span>💌</span>
              Avec mes salutations numériques les plus chaleureuses
              <Heart className="text-red-500" size={20} fill="currentColor" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewYearPage;