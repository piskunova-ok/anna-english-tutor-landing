import { useState } from 'react';
import { BookOpen, ChevronRight, Mail, Phone, Send, X } from 'lucide-react';

const CONTACTS = [
  { icon: Send, label: 'Telegram', value: '@anna_english_tutor' },
  { icon: Phone, label: 'WhatsApp', value: '+7 900 123-45-67' },
  { icon: Mail, label: 'Email', value: 'anna.tutor@example.com' },
];

const NAV = [
  { href: '#about', label: 'О преподавателе' },
  { href: '#programs', label: 'Форматы' },
  { href: '#benefits', label: 'Преимущества' },
  { href: '#process', label: 'Как учимся' },
  { href: '#reviews', label: 'Отзывы' },
];

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#hero" className="flex items-center gap-3" aria-label="Anna English Tutor — на главную">
              <span className="grid h-10 w-10 place-items-center bg-brand-600 text-white">
                <BookOpen className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold uppercase tracking-wide text-white">
                Anna English <span className="text-brand-400">| Tutor</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Индивидуальный английский для карьеры, экзаменов и жизни без языкового барьера. Пробный урок — бесплатно.
            </p>
            <div className="mt-5 flex items-center gap-1 text-gold-500" aria-label="Рейтинг 4.9 из 5">
              <span className="flex gap-0.5">★★★★★</span>
              <span className="ml-2 text-sm font-semibold text-slate-300">4.9 из 5 — оценка учеников</span>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">Контакты</h3>
            <ul className="mt-5 space-y-4">
              {CONTACTS.map((c) => (
                <li key={c.label} className="flex items-center gap-4 text-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-white/5 text-gold-400">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      {c.label}
                    </span>
                    <span className="font-semibold text-slate-200">{c.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">Навигация</h3>
            <ul className="mt-5 space-y-1">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 py-1.5 text-sm font-semibold text-slate-400 transition-colors hover:text-gold-400"
                  >
                    <ChevronRight className="h-4 w-4 text-slate-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-gold-400" />
                    <span className="uppercase tracking-wider">{l.label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a href="#contact" className="btn-gold">
                  Записаться на пробный урок
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">© 2026 Anna English Tutor. Все права защищены.</p>
          <button
            type="button"
            onClick={() => setPrivacyOpen(true)}
            className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 underline-offset-4 transition-colors hover:text-gold-400 hover:underline"
          >
            Политика конфиденциальности
          </button>
        </div>
      </div>

      {privacyOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPrivacyOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Политика конфиденциальности"
        >
          <div className="toast-in relative w-full max-w-lg bg-white p-8 sm:p-10">
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              aria-label="Закрыть окно"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide text-slate-900">
              Политика конфиденциальности
            </h3>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                Используя форму на этом сайте, вы соглашаетесь на обработку персональных данных: имени и контакта для
                связи (телефона или Telegram).
              </p>
              <p>
                Данные используются исключительно для ответа на вашу заявку, согласования пробного занятия и
                коммуникации о занятиях. Мы не передаём информацию третьим лицам и не используем её для рассылок.
              </p>
              <p>
                Вы можете в любой момент запросить удаление своих данных, написав на{' '}
                <span className="font-semibold text-slate-900">anna.tutor@example.com</span>.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              className="btn-primary mt-8 w-full"
            >
              Понятно
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}