import { motion } from 'motion/react';
import {
  MessageCircle,
  Target,
  Heart,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Star,
  Instagram,
  Globe,
  BookOpen,
  Mic,
  CheckCircle,
  Maximize2,
  X,
} from 'lucide-react';
import { useState } from 'react';
import profileImg from '../assets/profile.png';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function Home({ onNavigate }: HomeProps) {
  const [fullscreenPost, setFullscreenPost] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover [transform:scaleY(-1)]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6" style={{ paddingTop: 290 }}>
          <div className="flex flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-[clamp(36px,5vw,80px)] font-medium leading-[1.05] tracking-[-0.04em]"
              style={{ fontFamily: "'Geist', sans-serif" }}
            >
              Μάθε{' '}
              <span
                className="font-instrument italic text-[clamp(44px,6.25vw,100px)]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                σωστά
              </span>{' '}
              Αγγλικά
              <br />
              <span className="text-gray-500">με αυτοπεποίθηση</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="text-[18px] leading-relaxed max-w-[554px]"
              style={{ color: 'rgba(55, 58, 70, 0.8)', fontFamily: "'Geist', sans-serif" }}
            >
              Εξατομικευμένο coaching που σε βοηθά να μιλάς Αγγλικά φυσικά, με σιγουριά
              και χωρίς φόβο — στη δουλειά, στα ταξίδια, στη ζωή.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-white px-8 py-4 text-[15px] font-medium transition-all hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"
                style={{
                  boxShadow:
                    'inset -4px -6px 25px 0px rgba(201,201,201,0.08), inset 4px 4px 10px 0px rgba(29,29,29,0.24)',
                  fontFamily: "'Geist', sans-serif",
                }}
              >
                Ξεκίνα Δωρεάν <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="rounded-full border-2 border-gray-300 text-gray-700 px-8 py-4 text-[15px] font-medium transition-all hover:border-gray-900 hover:text-gray-900 inline-flex items-center justify-center gap-2"
                style={{ fontFamily: "'Geist', sans-serif" }}
              >
                Δες τα Προγράμματα
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[
                  'https://randomuser.me/api/portraits/women/44.jpg',
                  'https://randomuser.me/api/portraits/men/32.jpg',
                  'https://randomuser.me/api/portraits/women/68.jpg',
                  'https://randomuser.me/api/portraits/men/75.jpg',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[13px] text-gray-500 font-medium">
                1,020+ Reviews
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-xs text-gray-400 font-medium mb-10 tracking-[0.2em] uppercase">
            Μας εμπιστεύονται μαθητές σε όλο τον κόσμο
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '1,020+', label: 'Μαθητές' },
              { num: '95%', label: 'Ποσοστό Επιτυχίας' },
              { num: '10+', label: 'Χρόνια Εμπειρίας' },
              { num: '4.9', label: 'Μέση Βαθμολογία' },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">{s.num}</div>
                <div className="text-xs text-gray-400 mt-1.5 tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ΥΠΗΡΕΣΙΕΣ (BENTO) ─── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-4">
              Τι Προσφέρουμε
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5 tracking-tight">
              Υπηρεσίες Ενδυνάμωσης
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Τρία προγράμματα σχεδιασμένα για να μιλάς σωστά Αγγλικά και να μεταμορφώσεις τη ζωή σου
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0 }} className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-amber-300 transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)]">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <MessageCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">English Coaching Pro</h3>
              <p className="text-gray-500 leading-relaxed mb-5 text-[15px]">
                Μάθε πραγματικά Αγγλικά — προφορά, ιδιωματικές εκφράσεις, φυσική ομιλία. Όπως μιλούν στη Νέα Υόρκη
                και στο Λονδίνο, όχι από σχολικά βιβλία.
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <Mic className="w-4 h-4 text-amber-500" /> Σωστή Προφορά & Φυσική Ομιλία
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <Globe className="w-4 h-4 text-amber-500" /> Real-world Idioms & Expressions
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 text-amber-500" /> Πρακτική Εξάσκηση σε Σενάρια
                </li>
              </ul>
              <button
                onClick={() => onNavigate('services')}
                className="text-amber-600 text-sm font-semibold hover:text-amber-700 flex items-center gap-1.5 group/btn"
              >
                Μάθε περισσότερα <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-300 transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)]">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Programs</h3>
              <p className="text-gray-500 leading-relaxed mb-5 text-[15px]">
                Business English, Interview Prep, Public Speaking. Κάθε πρόγραμμα προσαρμόζεται στους δικούς σου στόχους
                για σωστή επικοινωνία σε κάθε κατάσταση.
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <Award className="w-4 h-4 text-blue-500" /> Business English & Meetings
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <MessageCircle className="w-4 h-4 text-blue-500" /> Interview Preparation
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 text-blue-500" /> Public Speaking Skills
                </li>
              </ul>
              <button
                onClick={() => onNavigate('services')}
                className="text-blue-600 text-sm font-semibold hover:text-blue-700 flex items-center gap-1.5 group/btn"
              >
                Μάθε περισσότερα <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="group relative bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-3xl border border-gray-800 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)] transition-all duration-500">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Heart className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Life Coaching</h3>
              <p className="text-gray-400 leading-relaxed mb-5 text-[15px]">
                Βρες κατεύθυνση, ισορροπία και αυτοπεποίθηση. Δημιούργησε τη ζωή που πραγματικά αξίζεις, ξεπερνώντας
                κάθε εμπόδιο.
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-center gap-2.5 text-sm text-gray-400">
                  <Target className="w-4 h-4 text-amber-400" /> Καθορισμός Στόχων & Όραμα
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-400">
                  <Users className="w-4 h-4 text-amber-400" /> Αυτοπεποίθηση & Ισορροπία
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4 text-amber-400" /> Προσωπική Ανάπτυξη
                </li>
              </ul>
              <button
                onClick={() => onNavigate('services')}
                className="text-amber-400 text-sm font-semibold hover:text-amber-300 flex items-center gap-1.5 group/btn"
              >
                Μάθε περισσότερα <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM POSTS SECTION ─── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-4">
              Δες πώς δουλεύουμε
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Μάθε Αγγλικά που Χρησιμοποιούνται Πραγματικά
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Δεν μαθαίνεις απλά γραμματική — μαθαίνεις να επικοινωνείς με σιγουριά
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                url: 'https://www.instagram.com/p/DUJFPRwjGLZ/',
                embedUrl: 'https://www.instagram.com/p/DUJFPRwjGLZ/embed',
                tag: 'Speaking Skills',
                tagColor: 'bg-amber-50 text-amber-600',
                title: 'Η γλώσσα είναι σαν την οδήγηση',
                desc: 'Ξέρεις γραμματική αλλά παγώνεις όταν μιλάς; Η γλώσσα δεν είναι θεωρία — είναι εμπειρία. Άσε τη θεωρία και πιάσε το τιμόνι.',
                likes: '271',
              },
              {
                url: 'https://www.instagram.com/p/DUbolaRjBTx/',
                embedUrl: 'https://www.instagram.com/p/DUbolaRjBTx/embed',
                tag: 'Interview Prep',
                tagColor: 'bg-blue-50 text-blue-600',
                title: 'Συνέντευξη στα Αγγλικά;',
                desc: 'Δομημένες απαντήσεις, business εκφράσεις, σωστή γλωσσική δομή. Η προετοιμασία ξεκινά πριν μπεις στο interview.',
                likes: '15',
              },
              {
                url: 'https://www.instagram.com/p/DWvp4GzMD2Q/',
                embedUrl: 'https://www.instagram.com/p/DWvp4GzMD2Q/embed',
                tag: 'Life Coaching',
                tagColor: 'bg-rose-50 text-rose-600',
                title: 'Το βιβλίο σου δεν είναι λάθος',
                desc: 'Δεν σε καταλαβαίνουν; Μην βιαστείς να πιστέψεις ότι φταις εσύ. Είσαι ένα βιβλίο γραμμένο στη δική σου γλώσσα.',
                likes: '5',
              },
            ].map((post, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group bg-[#fafafa] rounded-3xl border border-gray-100 overflow-hidden hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all duration-500"
              >
                <div className="relative overflow-hidden bg-white" style={{ height: 580 }}>
                  <iframe
                    src={post.embedUrl}
                    className="absolute top-0 left-0 border-0"
                    style={{ width: 'calc(100% + 20px)', height: 'calc(100% + 20px)' }}
                    loading="lazy"
                    scrolling="no"
                    title={post.title}
                  />
                  <button
                    onClick={() => setFullscreenPost(post.embedUrl)}
                    className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${post.tagColor}`}>
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Heart className="w-3 h-3" /> {post.likes}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.desc}</p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 text-sm font-semibold hover:text-amber-700 inline-flex items-center gap-1.5 transition-colors"
                  >
                    Δες στο Instagram <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {fullscreenPost && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFullscreenPost(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullscreenPost(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <iframe
              src={fullscreenPost}
              className="w-full border-0"
              style={{ height: '85vh' }}
              allowFullScreen
              title="Instagram Post"
            />
          </div>
        </div>
      )}

      {/* ─── Η ΔΗΜΗΤΡΑ ─── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 text-sm font-medium text-gray-600 shadow-sm">
                <Instagram className="w-4 h-4 text-pink-500" />
                @the_pouma_academy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Γνωρίστε τη Δήμητρα
                <br />
                <span className="text-gray-400">Γιαννουπλάκη</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                Ιδρύτρια της Pouma Academy, με πάνω από μια δεκαετία εμπειρίας στη διδασκαλία
                σωστών Αγγλικών και life coaching. Η φιλοσοφία της: η γλώσσα δεν είναι μόνο λέξεις — είναι
                εργαλείο δύναμης και αυτοέκφρασης.
              </p>
              <blockquote className="border-l-4 border-amber-400 pl-5 my-6 py-2">
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  «Ποια είναι η φράση που λέτε στον εαυτό σας όταν πρέπει να μιλήσετε Αγγλικά;
                  Πριν αλλάξεις τη γλώσσα, αλλάζεις τη νοοτροπία.»
                </p>
              </blockquote>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://www.instagram.com/the_pouma_academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a
                  href="https://www.threads.com/@the_pouma_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all"
                >
                  Threads
                </a>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto w-full max-w-[520px] sm:max-w-[580px] md:max-w-[640px]"
            >
              <div
                className="grid w-full gap-4 md:gap-5 items-center justify-items-stretch"
                style={{
                  gridTemplateColumns: 'minmax(168px, 1fr) minmax(148px, 188px) minmax(168px, 1fr)',
                  gridTemplateRows: 'auto minmax(248px, 300px) auto',
                  gridTemplateAreas: `
                    "tl . tr"
                    ". img ."
                    "bl . br"
                  `,
                }}
              >
                {[
                  { area: 'tl' as const, icon: Sparkles, title: 'Σωστή Προφορά', desc: 'Μιλάς φυσικά και με αυτοπεποίθηση.' },
                  { area: 'tr' as const, icon: Users, title: 'Εξατομίκευση', desc: 'Πρόγραμμα στους δικούς σου στόχους.' },
                  { area: 'bl' as const, icon: TrendingUp, title: 'Γρήγορα Αποτελέσματα', desc: 'Βελτίωση από τις πρώτες εβδομάδες.' },
                  { area: 'br' as const, icon: Globe, title: 'Πρακτική Εφαρμογή', desc: 'Αγγλικά για πραγματικές καταστάσεις.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.area}
                      className="bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md hover:border-amber-200/60 transition-all duration-300 flex flex-col justify-between min-h-[178px] md:min-h-[200px] w-full max-w-[240px] justify-self-center"
                      style={{ gridArea: item.area }}
                    >
                      <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-3 shrink-0">
                        <Icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base mb-2 leading-snug">{item.title}</h4>
                      <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed flex-1">{item.desc}</p>
                    </div>
                  );
                })}
                <div
                  className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-lg h-full w-full max-w-[188px] justify-self-center"
                  style={{ gridArea: 'img' }}
                >
                  <img
                    src={profileImg}
                    alt="Δήμητρα Γιαννουπλάκη — Founder, The Pouma Academy"
                    className="w-full h-full min-h-[248px] object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3 pt-10">
                    <p className="text-white font-bold text-sm">Δήμητρα Γιαννουπλάκη</p>
                    <p className="text-white/75 text-[10px] md:text-xs leading-snug">
                      MA in English · Language Mentor · Life Coach
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-4">
            Αποτελέσματα
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5 tracking-tight">Τι Λένε για Εμάς</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Πραγματικές ιστορίες από μαθητές που μεταμόρφωσαν τη ζωή τους
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              quote: 'Τώρα μπορώ να συμμετέχω σε meetings χωρίς πανικό. Η Δήμητρα μου έμαθε να μιλάω σωστά Αγγλικά, όχι απλά γραμματική.',
              name: 'Μαρία',
              role: 'Marketing Manager',
              avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
            },
            {
              quote: 'Η ζωή μου άλλαξε ριζικά. Βρήκα κατεύθυνση, έμαθα να επικοινωνώ σωστά στα Αγγλικά και πέτυχα ότι δεν φανταζόμουν.',
              name: 'Νίκος',
              role: 'Επιχειρηματίας',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
            },
            {
              quote: 'Η μέθοδος είναι τελείως διαφορετική. Μαθαίνεις φυσικά, μιλάς με σιγουριά, χωρίς να βαριέσαι.',
              name: 'Σοφία',
              role: 'Student',
              avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
            },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#fafafa] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-12">
          <button
            onClick={() => onNavigate('testimonials')}
            className="text-amber-600 font-semibold text-sm hover:text-amber-700 inline-flex items-center gap-2 transition-colors"
          >
            Δες όλα τα αποτελέσματα <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* ─── ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ ─── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-4">
              Η Διαδικασία
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5 tracking-tight">Πώς Λειτουργεί</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Τέσσερα απλά βήματα για να μιλήσεις σωστά Αγγλικά
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Δωρεάν Consultation', desc: 'Αξιολογούμε τους στόχους σου, το επίπεδό σου και σχεδιάζουμε ένα εξατομικευμένο πρόγραμμα.' },
              { step: '02', title: 'Εντατική Εκπαίδευση', desc: 'Πρακτική εξάσκηση, σενάρια πραγματικής ζωής, σωστή προφορά. Κάθε συνεδρία χτίζει πάνω στην προηγούμενη.' },
              { step: '03', title: 'Παρακολούθηση', desc: 'Τακτικός έλεγχος προόδου και προσαρμογή του σχεδίου σύμφωνα με τα πραγματικά αποτελέσματα.' },
              { step: '04', title: 'Ανεξαρτησία', desc: 'Αποκτάς τις δεξιότητες να συνεχίσεις μόνος/η. Ενδυνάμωση, όχι εξάρτηση.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-5 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-xs tracking-wider">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTENT HIGHLIGHTS ─── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-4">
              Community
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5 tracking-tight">Ακολουθήστε μας</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Tips, insights και ενέργεια κάθε μέρα
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                title: 'Αγγλικά στη Δουλειά',
                text: 'Πώς να νιώθεις σίγουρος/η σε κάθε business meeting — σωστή προφορά, λεξιλόγιο και body language.',
                tag: 'Business English',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                title: 'Σωστή Προφορά',
                text: 'Τα 10 πιο συχνά λάθη στην Αγγλική προφορά που κάνουν οι Έλληνες — και πώς να τα διορθώσεις.',
                tag: 'Pronunciation',
                color: 'bg-amber-50 text-amber-600',
              },
              {
                title: 'Αυτοπεποίθηση & Γλώσσα',
                text: 'Η αυτοπεποίθηση ξεκινά πριν ανοίξεις το στόμα σου. Μάθε πώς να αλλάξεις τη νοοτροπία σου πρώτα.',
                tag: 'Life Coaching',
                color: 'bg-rose-50 text-rose-600',
              },
            ].map((post, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#fafafa] rounded-3xl p-8 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-5 ${post.color}`}>
                  {post.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[14px]">{post.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="text-center">
            <a
              href="https://www.instagram.com/the_pouma_academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Instagram className="w-4 h-4" /> Ακολούθησε μας στο Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
        </div>
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Έτοιμος να Μεταμορφωθείς;
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Ξεκίνα ένα δωρεάν consultation σήμερα. Η επόμενη ιστορία επιτυχίας μπορεί να είναι η δική σου.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Κάνε Δωρεάν Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="border border-gray-700 text-gray-300 px-10 py-4 rounded-full font-semibold text-lg hover:border-gray-500 hover:text-white transition-all inline-flex items-center justify-center gap-2"
            >
              Συχνές Ερωτήσεις
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
