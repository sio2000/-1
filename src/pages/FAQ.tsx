import { motion } from 'motion/react';
import { ChevronDown, HelpCircle, Users, Zap, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface FAQProps {
  onNavigate: (page: string) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Πόσο χρόνο διαρκεί κάθε πρόγραμμα;',
      answer:
        'Τα προγράμματα ποικίλουν: English Coaching Pro διαρκεί 12 εβδομάδες (2 συνεδρίες/εβδομάδα), Specialized Programs 8-16 εβδομάδες, και Life Coaching είναι ongoing για όσο χρονικό διάστημα θέλετε.',
    },
    {
      question: 'Είμαι αρχάριος. Είναι κατάλληλο για μένα;',
      answer:
        'Απολύτως! Τα προγράμματά μας σχεδιάστηκαν για όλα τα επίπεδα, από αρχάριους έως προχωρημένους. Κάθε συνεδρία προσαρμόζεται στο δικό σας επίπεδο και ρυθμό.',
    },
    {
      question: 'Πόσο κοστίζουν τα προγράμματα;',
      answer:
        'Τα κόστη ποικίλουν ανάλογα με το πρόγραμμα και τη διάρκεια. Προσφέρουμε ευέλικτα πακέτα πληρωμής και δωρεάν consultation για να βρούμε το ιδανικό για εσάς.',
    },
    {
      question: 'Μπορώ να ακυρώσω αν δεν μου αρέσει;',
      answer:
        'Ναι! Προσφέρουμε 100% εγγύηση επιστροφής χρημάτων τον πρώτο μήνα. Αν δεν είστε ικανοποιημένοι, επιστρέφουμε τα χρήματά σας, χωρίς ερωτήσεις.',
    },
    {
      question: 'Είναι online ή face-to-face;',
      answer:
        'Προσφέρουμε και τις δύο επιλογές! Οι περισσότεροι μαθητές μας προτιμούν online για την ευκολία, αλλά και τα face-to-face sessions είναι διαθέσιμα.',
    },
    {
      question: 'Πώς γίνεται η εκπαίδευση;',
      answer:
        'Μέσα από 1-on-1 coaching, πρακτική εξάσκηση σε σενάρια πραγματικής ζωής, ανάλυση προφοράς, και διαδραστικές δραστηριότητες. Κάθε συνεδρία είναι εξατομικευμένη στις ανάγκες σας.',
    },
    {
      question: 'Πόσες συνεδρίες θα έχω;',
      answer:
        'Εξαρτάται από το πρόγραμμα. English Coaching Pro: 2 συνεδρίες/εβδομάδα για 12 εβδομάδες. Specialized: 1-2 συνεδρίες/εβδομάδα. Life Coaching: ευέλικτο.',
    },
    {
      question: 'Μπορώ να συνδυάσω περισσότερα προγράμματα;',
      answer:
        'Φυσικά! Πολλοί μαθητές κάνουν English Coaching Pro και Life Coaching ταυτόχρονα για ολιστική ανάπτυξη. Μπορούμε να σχεδιάσουμε ένα προσαρμοσμένο πακέτο για εσάς.',
    },
    {
      question: 'Θα δω αποτελέσματα;',
      answer:
        'Ναι, γρήγορα! Οι περισσότεροι μαθητές βλέπουν βελτίωση στις 2 πρώτες εβδομάδες. Μετά από 4 εβδομάδες, οι αλλαγές είναι εμφανείς στην αυτοπεποίθηση και τις δεξιότητες.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-6"
          >
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Συχνές
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Ερωτήσεις
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Όλα όσα πρέπει να γνωρίζετε για τα προγράμματά μας
          </motion.p>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-7 py-5 bg-white hover:bg-[#fafafa] flex items-center justify-between transition-colors"
                >
                  <span className="text-[15px] font-semibold text-gray-900 text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === idx && (
                  <div className="px-7 py-5 bg-[#fafafa] border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed text-[15px]">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Ας Ξεκινήσουμε</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: HelpCircle,
                title: 'Δωρεάν Consultation',
                desc: 'Ξεκινήστε με ένα δωρεάν 30λεπτο consultation για να βρούμε το ιδανικό πρόγραμμα.',
              },
              {
                icon: Zap,
                title: 'Γρήγορη Ενεργοποίηση',
                desc: 'Ξεκινήστε την ίδια εβδομάδα. Κανένας χαμένος χρόνος, ευθεία στη δράση.',
              },
              {
                icon: Users,
                title: 'Συνεχής Υποστήριξη',
                desc: 'Email, chat, και πρόσβαση σε αποκλειστική κοινότητα μαθητών.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px]" />
        </div>
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Έχετε Περισσότερες Ερωτήσεις;
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Μη διστάσετε να επικοινωνήσετε μαζί μας. Είμαστε εδώ για εσάς.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Επικοινώνησε Μαζί Μας <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
