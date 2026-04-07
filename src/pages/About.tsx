import { motion } from 'motion/react';
import { Heart, Target, Users, Sparkles, Award, Lightbulb, ArrowRight, Globe, BookOpen } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-6"
          >
            Ποιοι Είμαστε
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Γνωρίστε την
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Pouma Academy
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Μια κοινότητα μαθητών που μαθαίνουν σωστά Αγγλικά και μεταμορφώνουν τη ζωή τους
          </motion.p>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Το Όραμά Μας</h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="bg-[#fafafa] rounded-3xl p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Το Ξεκίνημα</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Η Pouma Academy δημιουργήθηκε με μια ισχυρή αποστολή: να δώσουμε δύναμη σε κάθε άνθρωπο να
                μιλάει σωστά Αγγλικά, να ανακαλύψει τη φωνή του και να ζήσει τη ζωή που πραγματικά θέλει.
                Δεν είμαστε ένα κλασικό φροντιστήριο — είμαστε ένα κίνημα αυτοπεποίθησης μέσα από τη γλώσσα.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#fafafa] rounded-3xl p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Η Φιλοσοφία Μας</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Πιστεύουμε ότι η γλώσσα είναι πολύ περισσότερο από λέξεις και γραμματική. Είναι εργαλείο δύναμης.
                Μέσα από τη σωστή χρήση της Αγγλικής γλώσσας μπορείτε να εκφράσετε τα όνειρά σας, να χτίσετε σχέσεις,
                να ηγηθείτε και να αλλάξετε τον κόσμο γύρω σας. Η μέθοδός μας εστιάζει στην πρακτική εφαρμογή
                και τη φυσική ομιλία.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="bg-[#fafafa] rounded-3xl p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Κατακτήστε τη Ζωή Σας</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Το Life Coaching δεν είναι πολυτέλεια — είναι ανάγκη. Σας βοηθάμε να αντιμετωπίσετε
                την πίεση, να θέσετε όρια και να δημιουργήσετε ένα στερεό σχέδιο για τα όνειρά σας.
                Δεν είστε ποτέ μόνοι σε αυτό το ταξίδι.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Τι Μας Κάνει Διαφορετικούς</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: 'Πραγματικά Αγγλικά',
                desc: 'Μαθαίνεις τη γλώσσα όπως χρησιμοποιείται πραγματικά — ιδιωματικές εκφράσεις, σωστή προφορά, φυσική ομιλία.',
              },
              {
                icon: Award,
                title: '10+ Χρόνια Εμπειρίας',
                desc: 'Πάνω από μια δεκαετία στη διδασκαλία Αγγλικών και life coaching με εκατοντάδες ευχαριστημένους μαθητές.',
              },
              {
                icon: Heart,
                title: 'Ανθρωποκεντρική Προσέγγιση',
                desc: 'Κάθε μαθητής είναι μοναδικός. Κάθε πρόγραμμα είναι εξατομικευμένο στους δικούς σου στόχους.',
              },
              {
                icon: Lightbulb,
                title: 'Πρακτικές Δεξιότητες',
                desc: 'Εστίαση στην πράξη, όχι στη θεωρία. Άμεσα αποτελέσματα σε πραγματικές καταστάσεις.',
              },
              {
                icon: Target,
                title: 'Μετρήσιμα Αποτελέσματα',
                desc: 'Σαφείς πέτρες σταθμού, τακτική αξιολόγηση και εγγυημένη πρόοδος σε 4 εβδομάδες.',
              },
              {
                icon: Users,
                title: 'Κοινότητα Υποστήριξης',
                desc: 'Ανταλλάξτε εμπειρίες με άλλους μαθητές και παραμείνετε κινητοποιημένοι.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Η Μέθοδος Μας</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Αξιολόγηση & Σχέδιο',
                desc: 'Ξεκινάμε με μια σε βάθος αξιολόγηση του επιπέδου και των στόχων σας. Δημιουργούμε ένα εξατομικευμένο σχέδιο δράσης.',
              },
              {
                step: '02',
                title: 'Εντατική Εκπαίδευση',
                desc: 'Πρακτική εξάσκηση, σενάρια πραγματικής ζωής, σωστή προφορά. Κάθε συνεδρία χτίζει πάνω στην προηγούμενη.',
              },
              {
                step: '03',
                title: 'Παρακολούθηση & Προσαρμογή',
                desc: 'Τακτικός έλεγχος αποτελεσμάτων και προσαρμογή του σχεδίου σύμφωνα με την πραγματική σας πρόοδο.',
              },
              {
                step: '04',
                title: 'Ενδυνάμωση & Ανεξαρτησία',
                desc: 'Σας εξοπλίζουμε με τις δεξιότητες να συνεχίσετε μόνοι. Στόχος μας είναι η ενδυνάμωση, όχι η εξάρτηση.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 md:gap-8 items-start bg-[#fafafa] rounded-3xl p-8 border border-gray-100"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center text-white font-bold text-sm tracking-wider">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px]" />
        </div>
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Έχετε Όλα τα Εργαλεία που Χρειάζεστε
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Εμείς σας κατευθύνουμε, αλλά εσείς κάνετε την αλλαγή. Ας αρχίσουμε σήμερα.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Ξεκίνα Δωρεάν Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
