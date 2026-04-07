import { ChevronDown, HelpCircle, Clock, Users, Zap, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface FAQProps {
  onNavigate: (page: string) => void;
}

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
        'Απολύτως! Τα προγράμματά μας σχεδιάστηκαν για όλα τα επίπεδα, από αρχάριους έως προχωρημένους. Κάθε συνεδρία προσαρμόζεται στο δικό σας επίπεδο.',
    },
    {
      question: 'Πόσο κοστίζουν τα προγράμματα;',
      answer:
        'Τα κόστη ποικίλουν ανάλογα με το πρόγραμμα και τη διάρκεια. Προσφέρουμε ευέλικτα πακέτα πληρωμής και δωρεάν consultation για να βρούμε το ιδανικό για εσάς.',
    },
    {
      question: 'Μπορώ να ακυρώσω αν δεν μου αρέσει;',
      answer:
        'Ναι! Προσφέρουμε 100% εγγύηση επιστροφής χρημάτων το πρώτο μήνα. Αν δεν είστε ικανοποιημένοι, επιστρέφουμε τα χρήματά σας, χωρίς ερωτήσεις.',
    },
    {
      question: 'Είναι online ή face-to-face;',
      answer:
        'Προσφέρουμε και τις δύο επιλογές! Οι περισσότεροι μαθητές μας προτιμούν το online για την ευκολία και την προσβασιμότητα, αλλά και τα face-to-face coaching είναι διαθέσιμα.',
    },
    {
      question: 'Τι γίνεται αν δεν έχω όργανα gaming;',
      answer:
        'Δεν χρειάζεστε κανένα ειδικό όργανο! Τα παιχνίδια και το περιεχόμενό μας είναι προσβάσιμα από κάθε συσκευή (κινητό, tablet, υπολογιστή).',
    },
    {
      question: 'Πόσες συνεδρίες θα έχω;',
      answer:
        'Εξαρτάται από το πρόγραμμα. English Coaching Pro: 2 συνεδρίες/εβδομάδα για 12 εβδομάδες. Specialized: 1-2 συνεδρίες/εβδομάδα. Life Coaching: ευέλικτο.',
    },
    {
      question: 'Μπορώ να συνδυάσω περισσότερα προγράμματα;',
      answer:
        'Φυσικά! Πολλοί μαθητές κάνουν English Coaching Pro και Life Coaching ταυτόχρονα για συνολική ανάπτυξη. Μπορούμε να συσχεδιάσουμε ένα προσαρμοσμένο πακέτο για εσάς.',
    },
    {
      question: 'Θα δώ αποτελέσματα;',
      answer:
        'Ναι, γρήγορα! Οι περισσότεροι μαθητές παρατηρούν βελτίωση στις 2 πρώτες εβδομάδες. Μετά από 4 εβδομάδες, οι αλλαγές είναι εμφανείς στην αυτοπεποίθηση και τις δεξιότητες.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 py-24 px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Συχνές<br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              Ερωτήσεις
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Όλα όσα πρέπει να γνωρίζετε για τα προγράμματά μας
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-amber-300 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-amber-600 transition-transform flex-shrink-0 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === idx && (
                  <div className="px-6 py-5 bg-gradient-to-br from-amber-50 to-white border-t border-amber-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Ας Ξεκινήσουμε</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HelpCircle,
                title: 'Δωρεάν Consultation',
                desc: 'Ξεκινήστε με ένα δωρεάν 30λεπτο consultation για να βρούμε το ιδανικό πρόγραμμα.',
              },
              {
                icon: Zap,
                title: 'Γρήγορη Ενεργοποίηση',
                desc: 'Ξεκινήστε την ίδια εβδομάδα. Κανένας περιττός χρόνος, ευθεία στη δράση.',
              },
              {
                icon: Users,
                title: 'Ολική Υποστήριξη',
                desc: 'Email, chat, και πρόσβαση σε έναν αποκλειστικό κοινότητα μαθητών.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:border-amber-300 transition-all hover:shadow-lg"
                >
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Έχετε Περισσότερες Ερωτήσεις;</h2>
          <p className="text-xl text-gray-300 mb-8">
            Μη διστάσετε να επικοινωνήσετε μαζί μας. Είμαστε εδώ για να απαντήσουμε σε όλα τα ερωτήματά σας.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Επικοινώνησε Μαζί Μας <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
