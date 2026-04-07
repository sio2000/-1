import { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ξεκινήστε το Ταξίδι<br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Σας Σήμερα
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Δωρεάν consultation και εξατομικευμένο σχέδιο για να ξεκινήσετε σήμερα
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, label: 'Email', value: 'ask@thepoumaacademy.com' },
              { icon: Phone, label: 'Τηλέφωνο', value: '+30 XXX XXX XXXX' },
              { icon: MapPin, label: 'Τοποθεσία', value: 'Online & Global' },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-amber-700" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{contact.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{contact.value}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Επικοινωνήστε μαζί μας</h2>

              {isSubmitted ? (
                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ευχαριστώ!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Λάβαμε το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
                  </p>
                  <p className="text-sm text-gray-500">
                    Προσβλέψτε για ένα δωρεάν consultation και ένα εξατομικευμένο σχέδιο.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Πλήρες Όνομα *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Π.χ. Μαρία Παπαδοπούλου"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Τηλέφωνο
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+30 6XX XXX XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Ενδιαφέρεστε για *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Επιλέξτε πρόγραμμα</option>
                      <option value="english-pro">English Coaching Pro</option>
                      <option value="specialized">Specialized Programs</option>
                      <option value="life">Life Coaching</option>
                      <option value="combo">Combination Programs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Μήνυμα *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Πείτε μας περισσότερα για τους στόχους σας..."
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Αποστολή
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Αυτές οι πληροφορίες θα παραμείνουν εμπιστευτικές
                  </p>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Δωρεάν Consultation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ξεκινήστε με ένα δωρεάν 30λεπτο call για να συζητήσουμε:
                </p>
                <ul className="space-y-3">
                  {[
                    'Τους στόχους σας και τα όνειρά σας',
                    'Το τρέχον επίπεδό σας',
                    'Ποιο πρόγραμμα ταιριάζει καλύτερα',
                    'Ένα εξατομικευμένο σχέδιο δράσης',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Γρήγορη Ενεργοποίηση
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Αν ενδιαφέρεστε, μπορείτε να ξεκινήσετε:
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-lg font-bold text-gray-900">Αυτή την εβδομάδα</p>
                  <p className="text-sm text-gray-600">
                    Κανένας χρόνος σπατάλης. Ευθεία στη δράση.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Γιατί Περιμένετε;</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Χιλιάδες άνθρωποι έχουν ήδη ξεκινήσει τη μεταμόρφωσή τους. Η επόμενη ιστορία επιτυχίας μπορεί να είναι η δική σας.
          </p>
        </div>
      </section>
    </div>
  );
}
