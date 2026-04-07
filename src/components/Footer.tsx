import { Mail, MapPin, Heart, Zap } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">Pouma Academy</p>
                <p className="text-xs text-amber-400">Communication & Life</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Μεταμορφώνοντας τη ζωή μέσα από ενδυναμωτική επικοινωνία και προσωπική ανάπτυξη.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Σελίδες</h4>
            <ul className="space-y-3">
              {[
                { label: 'Αρχική', id: 'home' },
                { label: 'Υπηρεσίες', id: 'services' },
                { label: 'Σχετικά Μας', id: 'about' },
                { label: 'Αποτελέσματα', id: 'testimonials' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Πληροφορίες</h4>
            <ul className="space-y-3">
              {[
                { label: 'Συχνές Ερωτήσεις', id: 'faq' },
                { label: 'Επικοινωνία', id: 'contact' },
                { label: 'Πολιτική Απορρήτου', id: 'home' },
                { label: 'Όροι Χρήσης', id: 'home' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Επικοινωνία</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:ask@thepoumaacademy.com"
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    ask@thepoumaacademy.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Τοποθεσία</p>
                  <p className="text-white">Online & Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              Δημιουργήθηκε με <Heart className="w-4 h-4 text-amber-500" /> για τη δύναμη της ενδυναμωτικής
              επικοινωνίας
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} Pouma Academy. Όλα τα δικαιώματα διατηρούνται.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
