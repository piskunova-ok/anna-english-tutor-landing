import Reveal from './Reveal.jsx';
import { ArrowRight, CircleCheck } from 'lucide-react';

const CHECKLIST = ['Бесплатно 30 минут', 'Тестирование уровня', 'Личный план обучения'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-slate-900 pt-28"
    >
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
        alt="Студенты на онлайн-занятии по английскому"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-900/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="ml-auto max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.24em] text-gold-400">
              <span className="h-px w-10 bg-gold-400" aria-hidden="true" />
              🚀 Заговори свободно уже через 3 месяца
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-semibold uppercase leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Индивидуальный английский для карьеры, экзаменов и жизни{' '}
              <span className="text-brand-300">без языкового барьера</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200">
              Авторская коммуникативная методика, упор на 70% практики речи с первого занятия и интерактивные
              материалы без скучной зубрежки правил.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-gold">
                Записаться на бесплатный пробный урок
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#process" className="btn-outline-light">
                Узнать, как учимся
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2.5">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                  <CircleCheck className="h-4 w-4 shrink-0 text-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}