import {
  Gamepad2,
  Users,
  Briefcase,
  MessageCircle,
  Award,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Τρία Ισχυρά Προγράμματα<br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              για τη Μεταμόρφωσή σας
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Επιλέξτε το πρόγραμμα που ταιριάζει καλύτερα στους στόχους σας
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
                <Gamepad2 className="w-5 h-5 text-amber-700" />
                <span className="text-sm font-semibold text-amber-700">Program #1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                English Coaching Pro
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Η επαναστατική μέθοδος μας συνδυάζει video games, διαδραστικό περιεχόμενο και τεχνολογία για να σας διδάξει τα πραγματικά
                Αγγλικά που χρησιμοποιούν οι άνθρωποι στην καθημερινή ζωή.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Κατάκτηση προφοράς και φυσικής ομιλίας',
                  'Εξάσκηση σε πραγματικά σενάρια και συνομιλίες',
                  'Εκμάθηση τοπικών εκφράσεων και idioms',
                  'Αναπτυξιακή κριτική σκέψη και λήψης αποφάσεων',
                  'Μέθοδος gaming που κάνει τη μάθηση διασκεδαστική',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">Διάρκεια Προγράμματος</p>
                <p className="text-2xl font-bold text-gray-900">12 Εβδομάδες</p>
                <p className="text-sm text-gray-500 mt-2">2 Συνεδρίες / Εβδομάδα</p>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                Ενδιαφέρομαι <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-transparent rounded-3xl p-12 border border-amber-200">
              <div className="bg-amber-100 rounded-2xl p-8 text-center">
                <Gamepad2 className="w-16 h-16 text-amber-700 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">Μάθηση μέσα από Παιχνίδια</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-24" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <Briefcase className="w-5 h-5 text-blue-700" />
                <span className="text-sm font-semibold text-blue-700">Program #2</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Specialized Programs
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Προγράμματα ειδικευμένα για συγκεκριμένες ανάγκες και στόχους. Από επαγγελματικές συνομιλίες έως δημόσια ομιλία.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Business English για Σύσκεψη & Συνεργασία',
                  'Interview Preparation για Αυτοπεποίθηση',
                  'Public Speaking & Presentation Skills',
                  '21st Century Skills για Ανταγωνισμό',
                  'Εξατομίκευση βάσει των αναγκών σας',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">Διάρκεια Προγράμματος</p>
                <p className="text-2xl font-bold text-gray-900">8-16 Εβδομάδες</p>
                <p className="text-sm text-gray-500 mt-2">Ευέλικτο Πρόγραμμα</p>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                Ενδιαφέρομαι <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="md:order-1 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl p-12 border border-blue-200">
              <div className="bg-blue-100 rounded-2xl p-8 text-center">
                <Briefcase className="w-16 h-16 text-blue-700 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">Προγράμματα Ειδικευμένα</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-24" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-2 mb-6">
                <Users className="w-5 h-5 text-rose-700" />
                <span className="text-sm font-semibold text-rose-700">Program #3</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Life Coaching
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Μεταμορφώστε τη ζωή σας. Ανακαλύψτε τη σκοπιμότητά σας, υπερβείτε τα εμπόδια και δημιουργήστε την ζωή που πραγματικά
                θέλετε.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Καθορισμός Σαφών Στόχων & Όραμα',
                  'Ξεπέρασμα Εμπόδιων & Ανησυχιών',
                  'Ανάπτυξη Αυτοπεποίθησης & Αυτοεικόνας',
                  'Εργασία στη Ζωική Ισορροπία',
                  'Μετασχηματισμός & Προσωπική Ανάπτυξη',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">Διάρκεια Προγράμματος</p>
                <p className="text-2xl font-bold text-gray-900">Ongoing</p>
                <p className="text-sm text-gray-500 mt-2">1-2 Συνεδρίες / Εβδομάδα</p>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                Ενδιαφέρομαι <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-transparent rounded-3xl p-12 border border-rose-200">
              <div className="bg-rose-100 rounded-2xl p-8 text-center">
                <Users className="w-16 h-16 text-rose-700 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">Προσωπική Ενδυνάμωση</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Τι Περιλαμβάνει Κάθε Πρόγραμμα;</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageCircle, title: '1-on-1 Coaching', desc: 'Προσωποποιημένες συνεδρίες με έναν έμπειρο coach' },
              { icon: BookOpen, title: 'Εκπαιδευτικό Υλικό', desc: 'Ολοκληρωμένες πηγές και κατευθύνσεις' },
              { icon: Award, title: 'Goal Tracking', desc: 'Παρακολούθηση προόδου και παγκόσμιες μετρήσεις' },
              { icon: Users, title: 'Υποστήριξη', desc: 'Συνεχής υποστήριξη και πρόσβαση σε πόρους' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-amber-300 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Έτοιμοι για την Αλλαγή;</h2>
          <p className="text-xl text-gray-300 mb-8">
            Επιλέξτε το πρόγραμμα που σας ταιριάζει και ξεκινήστε τη μεταμόρφωσή σας σήμερα.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Ξεκίνα Τώρα <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
