import { motion } from 'motion/react';
import { Star, TrendingUp, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  onNavigate: (page: string) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function Testimonials({ onNavigate }: TestimonialsProps) {
  const testimonials = [
    {
      name: 'Μαρία Παπαδοπούλου',
      role: 'Marketing Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
      content:
        'Δεν περίμενα τέτοια μεταμόρφωση. Πριν πανικοβάλλομαι στις σύσκεψες, τώρα μιλάω σωστά Αγγλικά με αυτοπεποίθηση. Η μέθοδος είναι εξαιρετικά αποτελεσματική.',
      result: 'Προήχθη σε Senior Position',
      stars: 5,
    },
    {
      name: 'Νίκος Κωνσταντίνου',
      role: 'Επιχειρηματίας',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      content:
        'Δύο μόνο μήνες coaching και άλλαξε η ζωή μου. Βρήκα κατεύθυνση, έθεσα σαφείς στόχους και κατάφερα ότι δεν πίστευα ότι ήταν δυνατό.',
      result: 'Ξεκίνησε το Δικό του Business',
      stars: 5,
    },
    {
      name: 'Σοφία Αντωνίου',
      role: 'Student',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      content:
        'Ο τρόπος διδασκαλίας είναι τελείως διαφορετικός. Μαθαίνεις φυσικά, μιλάς με σιγουριά — σαν να ζεις σε αγγλόφωνη χώρα!',
      result: 'Πέρασε το Cambridge Exam',
      stars: 5,
    },
    {
      name: 'Αλέξανδρος Μητρόπουλος',
      role: 'Software Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
      content:
        'Τα Αγγλικά ήταν μόνο για δουλειά, αλλά τώρα είναι τμήμα της προσωπικής μου ανάπτυξης. Πραγματικό coaching, όχι απλά μαθήματα.',
      result: 'Πήρε Θέση στο Εξωτερικό',
      stars: 5,
    },
    {
      name: 'Ελένη Διαμαντοπούλου',
      role: 'HR Professional',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
      content:
        'Δεν φαντάζομαι πώς θα διαχειριζόμουν τις συνεντεύξεις χωρίς αυτό το πρόγραμμα. Σωστά Αγγλικά, σωστή επικοινωνία, σωστά αποτελέσματα.',
      result: 'Διπλάσια Αποδοχή σε Νέα Θέση',
      stars: 5,
    },
    {
      name: 'Δημήτρης Βασιλάκος',
      role: 'Δάσκαλος',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      content:
        'Είμαι δάσκαλος, αλλά έμαθα τόσα πολλά για τον εαυτό μου. Πραγματικά coaching που αλλάζει τον τρόπο σκέψης σου. Ευχαριστώ!',
      result: 'Αναγνωρίστηκε ως Teacher of the Year',
      stars: 5,
    },
  ];

  const stats = [
    { number: '1,020+', label: 'Ικανοποιημένοι Μαθητές' },
    { number: '95%', label: 'Ποσοστό Επιτυχίας' },
    { number: '10+', label: 'Χρόνια Εμπειρίας' },
    { number: '100%', label: 'Εγγύηση Ικανοποίησης' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-6"
          >
            Αποτελέσματα
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Αποτελέσματα που
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Αλλάζουν Ζωές
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Εκατοντάδες άνθρωποι έχουν μεταμορφώσει τη ζωή τους. Εδώ είναι οι ιστορίες τους.
          </motion.p>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#fafafa] rounded-3xl p-8 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">"{testimonial.content}"</p>

                <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-5">
                  <p className="text-sm text-amber-700 font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {testimonial.result}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Αριθμοί που Μιλούν</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
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
            Θέλεις να Είσαι η Επόμενη Ιστορία Επιτυχίας;
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Εκατοντάδες άνθρωποι έχουν ήδη κάνει την αλλαγή. Τώρα είναι η δική σου σειρά.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Ξεκίνα Σήμερα <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
