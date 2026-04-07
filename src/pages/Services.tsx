import { motion } from 'motion/react';
import {
  Users,
  Briefcase,
  MessageCircle,
  Award,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Mic,
  Globe,
  Heart,
  Target,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-6"
          >
            Προγράμματα
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Τρία Ισχυρά Προγράμματα
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              για Σωστά Αγγλικά
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Επιλέξτε το πρόγραμμα που ταιριάζει στους στόχους σας
          </motion.p>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Program 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-amber-700">
                <Mic className="w-4 h-4" /> Program #1
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                English Coaching Pro
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Μάθε τα Αγγλικά που πραγματικά χρησιμοποιούνται — σωστή προφορά, φυσικές εκφράσεις,
                αυτοπεποίθηση στην ομιλία. Μέσα από διαδραστικές μεθόδους, σενάρια πραγματικής ζωής
                και εξατομικευμένο coaching.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Κατάκτηση σωστής προφοράς και φυσικής ομιλίας',
                  'Εξάσκηση σε πραγματικά σενάρια και συνομιλίες',
                  'Εκμάθηση ιδιωματικών εκφράσεων και idioms',
                  'Ανάπτυξη κριτικής σκέψης στα Αγγλικά',
                  'Διαδραστικές μέθοδοι που κάνουν τη μάθηση ευχάριστη',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#fafafa] rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-gray-900">12 Εβδομάδες</p>
                  <span className="text-sm text-gray-400">· 2 Συνεδρίες / Εβδομάδα</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                Ενδιαφέρομαι <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-10 border border-amber-200/60">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Mic, label: 'Pronunciation' },
                  { icon: Globe, label: 'Real English' },
                  { icon: MessageCircle, label: 'Conversations' },
                  { icon: BookOpen, label: 'Expressions' },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                      <Icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                      <p className="text-gray-700 text-sm font-medium">{f.label}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Program 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="md:order-1 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-10 border border-blue-200/60">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Briefcase, label: 'Business' },
                  { icon: Award, label: 'Interviews' },
                  { icon: Target, label: 'Presentations' },
                  { icon: Users, label: '21st Skills' },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-gray-700 text-sm font-medium">{f.label}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="md:order-2">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-blue-700">
                <Briefcase className="w-4 h-4" /> Program #2
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Specialized Programs
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Εξειδικευμένα προγράμματα για σωστή επικοινωνία σε επαγγελματικό περιβάλλον.
                Από meetings μέχρι δημόσια ομιλία.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Business English για Σύσκεψη & Συνεργασία',
                  'Interview Preparation με Αυτοπεποίθηση',
                  'Public Speaking & Presentation Skills',
                  '21st Century Skills για Ανταγωνισμό',
                  'Εξατομίκευση βάσει των αναγκών σας',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#fafafa] rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-gray-900">8-16 Εβδομάδες</p>
                  <span className="text-sm text-gray-400">· Ευέλικτο Πρόγραμμα</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                Ενδιαφέρομαι <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Program 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-rose-700">
                <Heart className="w-4 h-4" /> Program #3
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Life Coaching
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Μεταμορφώστε τη ζωή σας. Βρείτε κατεύθυνση, υπερβείτε τα εμπόδια
                και δημιουργήστε τη ζωή που πραγματικά θέλετε.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Καθορισμός Σαφών Στόχων & Όραμα',
                  'Ξεπέρασμα Εμποδίων & Ανησυχιών',
                  'Ανάπτυξη Αυτοπεποίθησης & Αυτοεικόνας',
                  'Work-Life Balance & Ισορροπία',
                  'Μετασχηματισμός & Προσωπική Ανάπτυξη',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#fafafa] rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-gray-900">Ongoing</p>
                  <span className="text-sm text-gray-400">· 1-2 Συνεδρίες / Εβδομάδα</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                Ενδιαφέρομαι <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="bg-gradient-to-br from-rose-50 to-rose-100/50 rounded-3xl p-10 border border-rose-200/60">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: 'Goal Setting' },
                  { icon: Heart, label: 'Wellbeing' },
                  { icon: Users, label: 'Relationships' },
                  { icon: Award, label: 'Growth' },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                      <Icon className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                      <p className="text-gray-700 text-sm font-medium">{f.label}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Τι Περιλαμβάνει Κάθε Πρόγραμμα
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageCircle, title: '1-on-1 Coaching', desc: 'Προσωποποιημένες συνεδρίες με έναν έμπειρο coach' },
              { icon: BookOpen, title: 'Εκπαιδευτικό Υλικό', desc: 'Ολοκληρωμένες πηγές και κατευθύνσεις' },
              { icon: Award, title: 'Goal Tracking', desc: 'Παρακολούθηση προόδου και μετρήσεις' },
              { icon: Users, title: 'Υποστήριξη', desc: 'Συνεχής υποστήριξη και πρόσβαση σε πόρους' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px]" />
        </div>
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Έτοιμοι για την Αλλαγή;</h2>
          <p className="text-lg text-gray-400 mb-10">
            Επιλέξτε το πρόγραμμα που σας ταιριάζει και ξεκινήστε τη μεταμόρφωσή σας σήμερα.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Ξεκίνα Τώρα <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
