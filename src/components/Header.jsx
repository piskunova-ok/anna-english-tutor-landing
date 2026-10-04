import { useEffect, useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

const NAV = [
  { href: '#about', label: 'О преподавателе' },
  { href: '#programs', label: 'Форматы' },
  { href: '#benefits', label: 'Преимущества' },
  { href: '#process', label: 'Как учимся' },
  { href: '#reviews', label: 'Отзывы' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-slate-200 bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur-md' : 'border-slate-200 bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3" aria-label="Anna English Tutor — на главную">
          <span className="grid h-10 w-10 place-items-center bg-brand-600 text-white">
            <span className="font-display text-lg font-bold">A</span>
          </span>
          <span className="font-display text-xl font-semibold uppercase tracking-wide text-slate-900">
            Anna English <span className="text-brand-600">| Tutor</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[13px] font-semibold uppercase tracking-[0.12em]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden bg-brand-600 px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-brand-500 sm:inline-flex"
          >
            Пробный урок
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            className="grid h-11 w-11 place-items-center border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-[26rem]' : 'max-h-0 border-t-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-6 pt-2" aria-label="Мобильная навигация">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-slate-100 px-3 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-700 transition hover:text-brand-600"
            >
              {l.label}
              <ChevronRight className="h-4 w-4 text-slate-300" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-brand-600 px-5 py-3.5 text-center text-[13px] font-bold uppercase tracking-[0.18em] text-white"
          >
            Пробный урок бесплатно
          </a>
        </nav>
      </div>
    </header>
  );
}