import { Heart, Target, Users, Sparkles, Award, Lightbulb, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Γνωρίστε την<br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Pouma Academy
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Μια κοινότητα ενδυναμωμένων μαθητών που μεταμορφώνουν τη ζωή τους μέσα από επικοινωνία και ανάπτυξη
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Το Όραμά Μας</h2>

          <div className="space-y-8 mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Το Ξεκίνημα</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Η Pouma Academy δημιουργήθηκε με μια απλή αλλά ισχυρή αποστολή: να δώσουμε δύναμη σε κάθε άνθρωπο να
                ανακαλύψει τη φωνή του και να ζήσει τη ζωή που πραγματικά θέλει. Δεν είμαστε απλά ένα σχολείο. Είμαστε ένα
                κίνημα αυτοπεποίθησης και προσωπικής εξέλιξης.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Η Φιλοσοφία Μας</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Πιστεύουμε ότι η γλώσσα είναι περισσότερο από λέξεις. Είναι ένα εργαλείο εξουσίας. Μέσα του μπορείτε να
                εκφράσετε τα όνειρά σας, να χτίσετε σχέσεις, να ηγηθείτε και να αλλάξετε τον κόσμο. Η μέθοδος gaming
                δεν είναι απλή τάση—είναι η μελλοντική εκπαίδευση.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white border border-rose-200 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Κατακτήστε τη Ζωή Σας</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Life Coaching δεν είναι πολυτέλεια—είναι ανάγκη. Οι χρόνοι είναι δύσκολοι και υπάρχουν πολλές
                ανησυχίες. Εμείς σας μάθουμε να αντιμετωπίζετε την πίεση, να θέτετε όρια και να δημιουργείτε ένα
                στερεό σχέδιο για τα όνειρά σας. Με σας είστε ποτέ μόνοι σε αυτό το ταξίδι.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">Τι Μας Κάνει Διαφορετικούς</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Gaming-Based Learning',
                desc: 'Μάθηση χωρίς κόπο, χωρίς βαρεμάρα. Τα video games κάνουν την εκπαίδευση διασκεδαστική και αποτελεσματική.',
              },
              {
                icon: Award,
                title: '10+ Χρόνια Εμπειρίας',
                desc: 'Δεκαετής παρουσία στον χώρο της επικοινωνίας και του life coaching με χιλιάδες ευχαριστημένους μαθητές.',
              },
              {
                icon: Heart,
                title: 'Ανθρωποκεντρική Προσέγγιση',
                desc: 'Δεν θεραπεύουμε μαθητές σαν αριθμούς. Κάθε άτομο είναι μοναδικό και έχει ένα προσαρμοσμένο σχέδιο.',
              },
              {
                icon: Lightbulb,
                title: 'Πρακτικές Δεξιότητες',
                desc: 'Θεωρία είναι καλή, αλλά στοχεύουμε σε ενέργεια. Άμεσα αποτελέσματα στον πραγματικό κόσμο.',
              },
              {
                icon: Target,
                title: 'Σαφή Αποτελέσματα',
                desc: 'Μετρήσιμη πρόοδος, σαφείς πέτρες σταθμού, και εγγυημένα αποτελέσματα σε 4 εβδομάδες.',
              },
              {
                icon: Users,
                title: 'Κοινότητα Υποστήριξης',
                desc: 'Ανταλλάξτε εμπειρίες με άλλους μαθητές, αποκτήστε πόρους και παραμείνετε ενθουσιασμένοι.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-amber-300 transition-all hover:shadow-lg">
                  <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Η Μέθοδος Μας</h2>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Αξιολόγηση & Σχέδιο',
                desc: 'Ξεκινάμε με έναν σχολιασμό του τρέχοντος επιπέδου σας και των στόχων σας. Δημιουργούμε ένα προσαρμοσμένο σχέδιο δράσης.',
              },
              {
                step: '2',
                title: 'Εντατική Εκπαίδευση',
                desc: 'Εβδομάδες γεμάτες με παιχνίδια, σενάρια και εξάσκηση. Κάθε συνεδρία χτίζει πάνω στην προηγούμενη.',
              },
              {
                step: '3',
                title: 'Παρακολούθηση & Προσαρμογή',
                desc: 'Ελέγχουμε τακτικά τα αποτελέσματα και προσαρμόζουμε το σχέδιο βάσει της προόδου σας.',
              },
              {
                step: '4',
                title: 'Ενδυνάμωση & Ανεξαρτησία',
                desc: 'Σας διδάσκουμε να είστε ανεξάρτητοι. Στο τέλος, έχετε τις δεξιότητες να συνεχίσετε από μόνοι σας.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-lg text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Έχετε Όλα τα Εργαλεία που Χρειάζεστε</h2>
          <p className="text-xl text-gray-300 mb-8">
            Εμείς σας κατευθύνουμε, αλλά εσείς κάνετε την αλλαγή. Ας αρχίσουμε το ταξίδι σας σήμερα.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Ξεκίνα Δωρεάν Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
