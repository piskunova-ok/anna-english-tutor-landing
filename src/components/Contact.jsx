import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { submitLead } from '../lib/submitLead.js';
import { ChevronDown, CircleCheck, LoaderCircle, Mail, Phone, Send, Target, User } from 'lucide-react';

const GOALS = [
  'Преодолеть языковой барьер',
  'Подготовка к собеседованию / Работа',
  'Сдача IELTS / TOEFL',
  'Переезд и путешествия',
  'Не знаю свой уровень, хочу оценить',
];

const isValidContact = (value) => {
  const v = value.trim();
  const digits = v.replace(/\D/g, '');
  const isPhone = /^[+]?[\d\s()\-]{7,20}$/.test(v) && digits.length >= 10;
  const isTelegram = /^@[a-zA-Z0-9_]{3,32}$/.test(v);
  return isPhone || isTelegram;
};

export default function Contact({ onSuccess, onError }) {
  const [values, setValues] = useState({ name: '', contact: '', goal: '', botcheck: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.botcheck) return;
    const next = {};
    if (values.name.trim().length < 2) next.name = 'Укажите ваше имя (минимум 2 символа)';
    if (!isValidContact(values.contact)) next.contact = 'Введите корректный телефон (+7 …) или Telegram (@username)';
    if (!values.goal) next.goal = 'Выберите вашу главную цель';
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      await submitLead({ name: values.name.trim(), contact: values.contact.trim(), goal: values.goal });
      onSuccess('Спасибо за заявку! Я свяжусь с вами в течение 2 часов');
      setValues({ name: '', contact: '', goal: '', botcheck: '' });
    } catch (err) {
      console.error('[form] Не удалось отправить заявку:', err);
      onError('Не удалось отправить заявку — попробуйте ещё раз');
    } finally {
      setSending(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full rounded-none border bg-white px-4 py-3.5 text-sm text-slate-900 shadow-none outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-0 ${
      hasError
        ? 'border-red-400 bg-red-50/30'
        : 'border-slate-300 focus:border-brand-600 focus:bg-white'
    }`;

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Запись на урок</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5">Запишитесь на бесплатный пробный урок</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Оставьте контакты — я напишу вам в Telegram или WhatsApp в течение дня, чтобы согласовать удобное время.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-9 space-y-5 border-t-2 border-slate-200 pt-8">
              {[
                'Пробное занятие длится 30 минут и ничего не стоит',
                'На встрече определим ваш уровень и составим план',
                'Отвечаю в течение дня — никакого спама',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                alt="Анна Смирнова"
                className="h-16 w-16 rounded-full object-cover ring-2 ring-brand-100"
                width="64"
                height="64"
                loading="lazy"
              />
              <div>
                <p className="font-display text-lg font-semibold uppercase tracking-wide text-slate-900">
                  Анна Смирнова
                </p>
                <p className="text-sm text-slate-500">Отвечаю лично в Telegram и WhatsApp — быстро и по делу.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={160}>
            <form onSubmit={handleSubmit} noValidate className="border border-slate-200 bg-paper p-7 sm:p-10">
              <input
                type="text"
                name="botcheck"
                value={values.botcheck}
                onChange={set('botcheck')}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="flex items-center gap-4 border-b-2 border-slate-200 pb-6">
                <span className="grid h-12 w-12 place-items-center bg-brand-600 text-white">
                  <Send className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold uppercase tracking-wide text-slate-900">
                    Быстрая запись
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Заполните форму — это 20 секунд</p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">
                    Ваше имя
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={set('name')}
                      placeholder="Например, Артём"
                      className={`${inputClass(Boolean(errors.name))} pl-11`}
                      aria-invalid={Boolean(errors.name)}
                    />
                  </div>
                  {errors.name && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">
                    Телефон или Telegram
                  </label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      value={values.contact}
                      onChange={set('contact')}
                      placeholder="+7 (999) 000-00-00 или @username"
                      className={`${inputClass(Boolean(errors.contact))} pl-11`}
                      aria-invalid={Boolean(errors.contact)}
                    />
                  </div>
                  {errors.contact && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.contact}</p>}
                </div>

                <div>
                  <label htmlFor="goal" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">
                    Ваша главная цель
                  </label>
                  <div className="relative">
                    <Target className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <select
                      id="goal"
                      name="goal"
                      value={values.goal}
                      onChange={set('goal')}
                      className={`${inputClass(Boolean(errors.goal))} appearance-none pl-11 pr-11`}
                      aria-invalid={Boolean(errors.goal)}
                    >
                      <option value="" disabled>
                        Выберите цель
                      </option>
                      {GOALS.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                  {errors.goal && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.goal}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary flex w-full items-center justify-center gap-2 py-4 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Отправляем…
                    </>
                  ) : (
                    <>
                      Записаться бесплатно
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-400">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Никакого спама.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}