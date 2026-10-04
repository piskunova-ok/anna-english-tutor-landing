import { useCallback, useEffect, useState } from 'react';
import { CircleCheck, CircleX } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Programs from './components/Programs.jsx';
import Benefits from './components/Benefits.jsx';
import Process from './components/Process.jsx';
import StudyBanner from './components/StudyBanner.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((msg, type = 'success') => {
    setToast({ id: Date.now(), msg, type });
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 6000);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-indigo-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-xl"
      >
        Перейти к содержимому
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Programs />
        <Benefits />
        <Process />
        <StudyBanner />
        <Reviews />
        <Contact onSuccess={showToast} onError={(msg) => showToast(msg, 'error')} />
      </main>

      <Footer />

      {toast && (
        <div
          key={toast.id}
          role="status"
          aria-live="polite"
          className="toast-in fixed bottom-6 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-md"
        >
          <div
            className={`flex items-center gap-3 rounded-2xl border p-4 shadow-2xl shadow-slate-900/25 ring-1 ring-slate-900/5 ${
              toast.type === 'error'
                ? 'border-red-100 bg-white'
                : 'border-emerald-100 bg-white'
            }`}
          >
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                toast.type === 'error'
                  ? 'bg-red-100 text-red-600'
                  : 'bg-emerald-100 text-emerald-600'
              }`}
            >
              {toast.type === 'error' ? (
                <CircleX className="h-5 w-5" />
              ) : (
                <CircleCheck className="h-5 w-5" />
              )}
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">{toast.msg}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                {toast.type === 'error'
                  ? 'Данные сохранены — попробуйте отправить ещё раз.'
                  : 'Ждите сообщение в Telegram или WhatsApp.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}