import {
  Zap,
  MessageCircle,
  Target,
  Heart,
  CheckCircle,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">Μετασχηματισμός δια της Επικοινωνίας</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Μίλα με
            <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Αυτοπεποίθηση
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Κατακτήστε τα Αγγλικά και ανακαλύψτε το αληθινό σας δυναμικό. Από επαγγελματική εξέλιξη έως προσωπική ανάπτυξη,
            ας μεταμορφώσουμε τη ζωή σας μαζί.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('services')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Ξεκίνα τώρα <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="border-2 border-gray-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-amber-400 hover:text-amber-400 transition-all"
            >
              Μάθε περισσότερα
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-sm text-gray-400">Ικανοποιημένοι Μαθητές</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">95%</div>
              <div className="text-sm text-gray-400">Ποσοστό Επιτυχίας</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">10+</div>
              <div className="text-sm text-gray-400">Χρόνια Εμπειρίας</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Υπηρεσίες Ενδυνάμωσης</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Τρία ολοκληρωμένα προγράμματα σχεδιασμένα για τη μεταμόρφωσή σας
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-amber-400 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-amber-200 transition-all">
                <MessageCircle className="w-7 h-7 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                English Coaching Pro
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Εντελώς καινούργια μέθοδος μάθησης μέσα από video games και διαδραστικό περιεχόμενο. Μάθετε το πραγματικό Αγγλικά που
                μιλούν στους δρόμους της Νέας Υόρκης και του Λονδίνου.
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-amber-700 font-semibold hover:text-amber-800 flex items-center gap-2 group/btn"
              >
                Δες λεπτομέρειες <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="group relative bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-amber-400 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-amber-200 transition-all">
                <Target className="w-7 h-7 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Specialized Programs
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Business English για τις ανάγκες της εργασίας σας, προετοιμασία συνεντεύξεων, δημόσια ομιλία και 21st-century skills
                που θα σας διαφοροποιήσουν.
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-amber-700 font-semibold hover:text-amber-800 flex items-center gap-2 group/btn"
              >
                Δες λεπτομέρειες <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="group relative bg-gradient-to-br from-amber-400 to-amber-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Life Coaching</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Υπερβείτε τα εμπόδια σας και δημιουργήστε τη ζωή που θέλετε. Ισορροπία, κατεύθυνση και προσωπική ανάπτυξη που θα
                αλλάξει τα πάντα.
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-white font-semibold hover:text-gray-100 flex items-center gap-2 group/btn"
              >
                Δες λεπτομέρειες <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Γιατί η Pouma Academy;</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Δεν είμαστε απλά ένα σχολείο. Είμαστε ένας συνοδός προσωπικής ενδυνάμωσης.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: 'Μέθοδος Gaming', desc: 'Μάθηση χωρίς κόπο μέσω interactive εμπειρίες' },
              {
                icon: Users,
                title: 'Προσωποποίηση',
                desc: 'Κάθε πρόγραμμα προσαρμόζεται στους στόχους σας',
              },
              { icon: TrendingUp, title: 'Σαφή Αποτελέσματα', desc: 'Μετρήσιμη πρόοδος από την πρώτη εβδομάδα' },
              {
                icon: Award,
                title: 'Εξειδίκευση',
                desc: 'Δεκαετής εμπειρία στην επικοινωνία και life coaching',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-amber-200 transition-all hover:shadow-lg">
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Αποτελέσματα που Μιλούν</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gradient-to-br from-amber-50 to-transparent p-8 rounded-2xl border border-amber-100">
              <Quote className="w-8 h-8 text-amber-400 mb-4" />
              <p className="text-gray-700 italic mb-4">
                "Τώρα μπορώ να συμμετέχω σε συνεδριάσεις εργασίας χωρίς πανικό. Η διαφορά είναι τεράστια!"
              </p>
              <p className="font-semibold text-gray-900">Μαρία, Marketer</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-transparent p-8 rounded-2xl border border-amber-100">
              <Quote className="w-8 h-8 text-amber-400 mb-4" />
              <p className="text-gray-700 italic mb-4">
                "Η ζωή μου άλλαξε ριζικά. Βρήκα κατεύθυνση και αυτοπεποίθηση που δεν είχα ποτέ."
              </p>
              <p className="font-semibold text-gray-900">Νίκος, Επιχειρηματίας</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-transparent p-8 rounded-2xl border border-amber-100">
              <Quote className="w-8 h-8 text-amber-400 mb-4" />
              <p className="text-gray-700 italic mb-4">
                "Ο τρόπος διδασκαλίας είναι επαναστατικός. Δεν βαριέμαι και μαθαίνω πολλά."
              </p>
              <p className="font-semibold text-gray-900">Σοφία, Student</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('testimonials')}
            className="mt-12 text-amber-700 font-semibold hover:text-amber-800 flex items-center justify-center gap-2 mx-auto"
          >
            Δες όλα τα αποτελέσματα <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Έτοιμος να Μεταμορφωθείς;
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ξεκινήστε ένα δωρεάν consultation σήμερα και ανακαλύψτε πώς μπορούμε να σας βοηθήσουμε.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Κάνε Επίδειξη <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

function Quote({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-7-3s-7 1.75-7 3c0 1 0 4 1 6v4c1 2 2 4 3.5 5.5 1.5 1.5 3 2 5 2z" />
    </svg>
  );
}
