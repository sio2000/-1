import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Αρχική', id: 'home' },
    { label: 'Υπηρεσίες', id: 'services' },
    { label: 'Σχετικά', id: 'about' },
    { label: 'Αποτελέσματα', id: 'testimonials' },
    { label: 'Συχνές Ερωτήσεις', id: 'faq' },
    { label: 'Επικοινωνία', id: 'contact' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow transform group-hover:scale-105 duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 text-base leading-none">Pouma Academy</p>
              <p className="text-xs text-amber-600 font-medium">Communication & Life</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'text-amber-700 bg-amber-50'
                    : 'text-gray-600 hover:text-amber-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all transform hover:scale-105 duration-300"
            >
              Ξεκίνα τώρα
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  currentPage === item.id
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-full text-sm font-semibold mt-4"
            >
              Ξεκίνα τώρα
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
