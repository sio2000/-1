import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

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
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-6"
          >
            Επικοινωνία
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Ξεκινήστε το Ταξίδι
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Σας Σήμερα
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Δωρεάν consultation και εξατομικευμένο σχέδιο για να ξεκινήσετε
          </motion.p>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Mail, label: 'Email', value: 'ask@thepoumaacademy.com' },
              { icon: Phone, label: 'Τηλέφωνο', value: '+30 XXX XXX XXXX' },
              { icon: MapPin, label: 'Τοποθεσία', value: 'Online & Global' },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#fafafa] rounded-3xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <p className="text-xs text-gray-400 mb-1.5 tracking-wide uppercase">{contact.label}</p>
                  <p className="text-base font-semibold text-gray-900">{contact.value}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Επικοινωνήστε μαζί μας</h2>

              {isSubmitted ? (
                <div className="bg-green-50 rounded-3xl p-10 text-center border border-green-100">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Ευχαριστούμε!</h3>
                  <p className="text-gray-600 mb-3">
                    Λάβαμε το μήνυμά σας. Θα επικοινωνήσουμε εντός 24 ωρών.
                  </p>
                  <p className="text-sm text-gray-400">
                    Ετοιμαστείτε για ένα δωρεάν consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Πλήρες Όνομα *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Π.χ. Μαρία Παπαδοπούλου"
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-[#fafafa]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-[#fafafa]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Τηλέφωνο</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+30 6XX XXX XXXX"
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-[#fafafa]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ενδιαφέρεστε για *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-[#fafafa]"
                    >
                      <option value="">Επιλέξτε πρόγραμμα</option>
                      <option value="english-pro">English Coaching Pro</option>
                      <option value="specialized">Specialized Programs</option>
                      <option value="life">Life Coaching</option>
                      <option value="combo">Συνδυαστικό Πρόγραμμα</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Μήνυμα *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Πείτε μας περισσότερα για τους στόχους σας..."
                      rows={5}
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none bg-[#fafafa]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white px-8 py-4 rounded-xl text-base font-semibold hover:shadow-xl transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Αποστολή
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Οι πληροφορίες σας παραμένουν εμπιστευτικές
                  </p>
                </form>
              )}
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-6">
              <div className="bg-[#fafafa] rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Δωρεάν Consultation</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
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
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fafafa] rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Γρήγορη Ενεργοποίηση</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Αν ενδιαφέρεστε, μπορείτε να ξεκινήσετε:
                </p>
                <div className="mt-5">
                  <p className="text-2xl font-bold text-gray-900">Αυτή την εβδομάδα</p>
                  <p className="text-sm text-gray-400 mt-1">Κανένας χαμένος χρόνος. Ευθεία στη δράση.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Γιατί Περιμένετε;</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Εκατοντάδες άνθρωποι έχουν ήδη ξεκινήσει τη μεταμόρφωσή τους. Η επόμενη ιστορία επιτυχίας μπορεί να είναι η δική σας.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
