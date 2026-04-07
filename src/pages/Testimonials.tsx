import { Star, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  onNavigate: (page: string) => void;
}

export default function Testimonials({ onNavigate }: TestimonialsProps) {
  const testimonials = [
    {
      name: 'Μαρία Παπαδοπούλου',
      role: 'Marketing Manager',
      image: '👩‍💼',
      content:
        'Δεν περίμενα τέτοια μεταμόρφωση. Πριν πανικοβάλλομαι στις σύσκεψες, τώρα μιλάω με αυτοπεποίθηση. Η τεχνική gaming κάνει τα πράγματα διασκεδαστικά και αποτελεσματικά.',
      result: 'Προήχθη σε Senior Position',
      stars: 5,
    },
    {
      name: 'Νίκος Κωνσταντίνου',
      role: 'Επιχειρηματίας',
      image: '👨‍💼',
      content:
        'Δύο μόνο μήνες coachingκαι άλλαξε η ζωή μου. Βρήκα κατεύθυνση, έθεσα σαφείς στόχους και κατάφερα ότι δεν πίστευα ότι ήταν δυνατό.',
      result: 'Ξεκίνησε το Δικό του Business',
      stars: 5,
    },
    {
      name: 'Σοφία Αντωνίου',
      role: 'Student / Ζαχαροπλάστης',
      image: '👩‍🎓',
      content:
        'Ο τρόπος που διδάσκονται τα Αγγλικά με games είναι επαναστατικός. Δεν ζαλίζει, μαθαίνεις φυσικά και μιλάς σαν κατοίκος της Νέας Υόρκης!',
      result: 'Πέρασε το Cambridge Exam',
      stars: 5,
    },
    {
      name: 'Αλέξανδρος Μητρόπουλος',
      role: 'Software Engineer',
      image: '👨‍💻',
      content:
        'Τα Αγγλικά ήταν μόνο για δουλειά, αλλά τώρα είναι τμήμα της προσωπικής μου ανάπτυξης. Life coaching άλλαξε τα πάντα.',
      result: 'Πήρε Θέση στο Εξωτερικό',
      stars: 5,
    },
    {
      name: 'Ελένη Διαμαντοπούλου',
      role: 'HR Professional',
      image: '👩‍💼',
      content:
        'Δεν φαντάζομαι πώς θα διαχειριζόμουν τις συνεντεύξεις χωρίς αυτό το πρόγραμμα. Απόλυτη εκπαίδευση και υποστήριξη.',
      result: 'Διπλάσια Αποδοχή σε Νέα Θέση',
      stars: 5,
    },
    {
      name: 'Δημήτρης Βασιλάκος',
      role: 'Δάσκαλος',
      image: '👨‍🏫',
      content:
        'Είμαι δάσκαλος, αλλά έμαθα τόσα πολλά για τον εαυτό μου. Πραγματικά coaching, όχι απλά μαθήματα. Ευχαριστώ!',
      result: 'Αναγνωρίστηκε ως Teacher of the Year',
      stars: 5,
    },
  ];

  const stats = [
    { number: '500+', label: 'Ικανοποιημένοι Μαθητές' },
    { number: '95%', label: 'Ποσοστό Επιτυχίας' },
    { number: '10+', label: 'Χρόνια Εμπειρίας' },
    { number: '100%', label: 'Σιγουρία Χρημάτων πίσω' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Αποτελέσματα που<br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Αλλάζουν Ζωές
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Δεκάδες άνθρωποι έχουν μεταμορφώσει τη ζωή τους. Εδώ είναι οι ιστορίες τους.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-amber-300 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{testimonial.image}</span>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-700 font-semibold">
                    <TrendingUp className="w-4 h-4 inline mr-2" />
                    {testimonial.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Αριθμοί που Μιλούν</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:border-amber-300 transition-all hover:shadow-lg"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Θέλεις να Είσαι η Επόμενη Ιστορία Επιτυχίας;</h2>
          <p className="text-xl text-gray-300 mb-8">
            Χιλιάδες άνθρωποι έχουν ήδη κάνει την αλλαγή. Τώρα είναι η δική σου σειρά.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Ξεκίνα Σήμερα <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
